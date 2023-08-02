import { resolveUrl } from "@/utils/common";
export const API_GROUP = {
  getgroup: () => resolveUrl("/api/v1/group"),
  setgroup: () => resolveUrl("/api/v1/group"),
  delgroup: () => resolveUrl("/api/v1/group"),
};
