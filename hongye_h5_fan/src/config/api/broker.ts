import { resolveUrl } from "@/utils/common";
export const API_BROKER = {
  list: () => resolveUrl("/broker"),
  del: () => resolveUrl("/del/broker"),
  edit: () => resolveUrl("/set/BrokerStatus"),
  add: () => resolveUrl("/add/Broker"),
};
