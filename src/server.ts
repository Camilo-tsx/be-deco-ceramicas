import http from "http";
import { productRouter } from "./infraestructure/http/routes/app.routes";

const server = http.createServer((req, res) => {
  try {
    if (req.url?.startsWith("/api/products")) {
      productRouter(req, res);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Route not found" }));
    }
  } catch (error) {
    console.error("Server error:", error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal server error" }));
  }
});

server.listen(3005, () => {
  const address = server.address();

  if (address && typeof address === "object") {
    console.log(`Server listening on port ${address.port}`);
  } else {
    console.log("Server running");
  }
});
