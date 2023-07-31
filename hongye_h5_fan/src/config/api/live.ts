import { resolveUrl } from "@/utils/common";
export const API_LIVE = {
  list: () => resolveUrl("/live"),
  del: () => resolveUrl("/delLive"),
  edit: () => resolveUrl("/updateLive"),
};
