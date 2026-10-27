import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, "dist");

// Ensure dist/index.html exists before starting the server
if (!fs.existsSync(path.join(DIST_DIR, "index.html"))) {
  console.log("[Server] dist/index.html not found, running build...");
  try {
    execSync("npm run build", { stdio: "inherit" });
  } catch (err) {
    console.error("[Server] Build failed:", err);
  }
}

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".otf": "font/otf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".pdf": "application/pdf",
  ".zip": "application/zip",
};

const PORT = parseInt(process.env.PORT || "3000", 10);
const HOST = "0.0.0.0";

const server = http.createServer((req, res) => {
  // Normalize URL and remove query strings
  const parsedUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);

  // Health check endpoint
  if (pathname === "/_health" || pathname === "/healthz" || pathname === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("OK");
    return;
  }

  // Prevent directory traversal
  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, "");
  const filePath = path.join(DIST_DIR, safePath);

  // Check if requested path is a file in dist
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      serveFile(filePath, res);
      return;
    }

    // If directory, check for index.html inside it
    if (!err && stats.isDirectory()) {
      const indexPath = path.join(filePath, "index.html");
      if (fs.existsSync(indexPath)) {
        serveFile(indexPath, res);
        return;
      }
    }

    // SPA fallback: serve dist/index.html for HTML requests
    const fallback = path.join(DIST_DIR, "index.html");
    if (fs.existsSync(fallback)) {
      serveFile(fallback, res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  });
});

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  // Set cache headers: immutable for hashed assets, revalidate for index.html
  const isHashedAsset = filePath.includes(`${path.sep}assets${path.sep}`);
  const headers = {
    "Content-Type": contentType,
    "Cache-Control": isHashedAsset ? "public, max-age=31536000, immutable" : "no-cache",
  };

  res.writeHead(200, headers);
  fs.createReadStream(filePath).pipe(res);
}

server.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
