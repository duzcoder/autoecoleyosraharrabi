import { Router } from "express";
import { logger } from "../lib/logger";

const router = Router();

const PAGE_ID = "100094160687636";
const API_VERSION = "v20.0";

interface FBVideo {
  id: string;
  title?: string;
  description?: string;
  permalink_url?: string;
  thumbnails?: { data: { uri: string; width: number; height: number; is_preferred?: boolean }[] };
  length?: number;
}

interface FBResponse {
  data: FBVideo[];
  error?: { message: string; code: number };
}

router.get("/facebook/reels", async (req, res) => {
  const token = process.env["FACEBOOK_ACCESS_TOKEN"];

  if (!token) {
    res.status(503).json({
      error: "FACEBOOK_ACCESS_TOKEN not configured",
      reels: [],
    });
    return;
  }

  try {
    const fields = "id,title,description,permalink_url,thumbnails,length";
    const url = new URL(`https://graph.facebook.com/${API_VERSION}/${PAGE_ID}/videos`);
    url.searchParams.set("fields", fields);
    url.searchParams.set("limit", "8");
    url.searchParams.set("video_type", "REELS");
    url.searchParams.set("access_token", token);

    const response = await fetch(url.toString());
    const data = (await response.json()) as FBResponse;

    if (data.error) {
      logger.warn({ error: data.error }, "Facebook Graph API error");
      res.status(502).json({ error: data.error.message, reels: [] });
      return;
    }

    const reels = data.data.map((v) => {
      const thumb = v.thumbnails?.data?.find((t) => t.is_preferred) ?? v.thumbnails?.data?.[0];
      return {
        id: v.id,
        title: v.title ?? "",
        description: v.description ?? "",
        permalink_url: v.permalink_url ?? `https://www.facebook.com/watch/?v=${v.id}`,
        thumbnail: thumb?.uri ?? null,
        duration: v.length ?? 0,
        embed_url: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(v.permalink_url ?? `https://www.facebook.com/watch/?v=${v.id}`)}&show_text=0&width=560&mute=0`,
      };
    });

    res.json({ reels });
  } catch (err) {
    logger.error({ err }, "Failed to fetch Facebook reels");
    res.status(500).json({ error: "Failed to fetch reels", reels: [] });
  }
});

export default router;
