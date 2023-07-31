import { resolveUrl } from "@/utils/common";
export const API_GROUP = {
  getgroup: () => resolveUrl("/group"),
  setgroup: () => resolveUrl("/set/group"),
  delgroup: () => resolveUrl("/del/group"),
};
