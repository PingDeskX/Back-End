import { bootstrap } from "./app.controller.js";

bootstrap().catch((err) => {
  console.error("Server failed to start:", err.message);
  process.exit(1);
});
