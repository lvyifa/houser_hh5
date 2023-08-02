import { resolveUrl } from "@/utils/common";
export const API_BROKER = {
  list: () => resolveUrl("/api/v1/broker"),
  del: () => resolveUrl("/api/v1/broker"),
  edit: () => resolveUrl("/api/v1/broker"),
  add: () => resolveUrl("/api/v1/broker"),
};
