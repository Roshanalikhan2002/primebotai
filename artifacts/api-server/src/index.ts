import "dotenv/config";
import app from "./app";

// Export for Vercel serverless
export default app;

// Run as standalone server if PORT is set (local dev)
const rawPort = process.env["PORT"];
if (rawPort) {
  const port = Number(rawPort);
  if (!Number.isNaN(port) && port > 0) {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
}
