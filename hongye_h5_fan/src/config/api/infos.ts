/*
 * @Author: yifan
 * @Date: 2023-07-30 19:29:26
 * @Last Modified by:   yifan
 * @Last Modified time: 2023-07-30 19:29:26
 */
import { resolveUrl } from "@/utils/common";
export const API_infos = {
  infos: () => resolveUrl("/information"),
  setinfos: () => resolveUrl("/set/information"),
  delinfos: () => resolveUrl("/del/information"),
  addinfos: () => resolveUrl("/addInformation"),
  editinfos: () => resolveUrl("/editInformation"),
};
