/*
 * @Author: yifan
 * @Date: 2023-07-30 19:29:26
 * @Last Modified by:   yifan
 * @Last Modified time: 2023-07-30 19:29:26
 */
import { resolveUrl } from "@/utils/common";
export const API_infos = {
  infos: () => resolveUrl("/api/v1/infos"),
  setinfos: () => resolveUrl("/api/v1/infos"),
  delinfos: () => resolveUrl("/api/v1/infos"),
  addinfos: () => resolveUrl("/api/v1/infos"),
  editinfos: () => resolveUrl("/api/v1/infos"),
};
