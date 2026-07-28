import type { Express } from "express";

const MANUS_STORAGE_BASE = "https://hzdesignvinhyenvinhphuc.manus.space";

export function registerStorageProxy(app: Express) {
  app.get("/manus-storage/*", async (req, res) => {
    const key = (req.params as Record<string, string>)[0];
    if (!key) {
      res.status(400).send("Missing storage key");
      return;
    }

    try {
      const targetUrl = `${MANUS_STORAGE_BASE}/manus-storage/${key}`;
      console.log(`[StorageProxy] Redirecting to: ${targetUrl}`);
      res.set("Cache-Control", "public, max-age=3600");
      res.redirect(307, targetUrl);
    } catch (err) {
      console.error("[StorageProxy] failed:", err);
      res.status(502).send("Storage proxy error");
    }
  });
}
