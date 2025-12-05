import { IncomingMessage, ServerResponse } from "http";
import { getProductByCategory } from "../../../application/product/getProductByCategory";
import { getProductById } from "../../../application/product/getProductById";
import { createProductRepository } from "../../factory/ProductRepositoryFactory";

export const productRouter = async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> => {
  const { method, url } = req;
  const repo = createProductRepository();
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (!url) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Invalid URL" }));
    return;
  }

  if (method === "GET" && url.startsWith("/api/products/category/")) {
    const category = decodeURIComponent(
      url.split("/").pop()!.trim().toUpperCase()
    );

    try {
      const products = await getProductByCategory({ repo, category });
      if (!products) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Invalid category" }));
        return;
      }

      if (products.length === 0) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({ message: "Not products found on this category" })
        );
        return;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(products));
    } catch (error) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Server error" }));
    }

    return;
  }

  if (method === "GET" && url.startsWith("/api/products/")) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const rawId = url.split("/").pop()!;

    try {
      const product = await getProductById({ repo, rawId });
      if (!product) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Product not found" }));
        return;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(product));
    } catch (error) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Server error" }));
    }
    return;
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "Route not found" }));
};
