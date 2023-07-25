import { resolveUrl } from "@/utils/common";
export const API_USER = {
  login: () => resolveUrl("/login"),
  registry: () => resolveUrl("/registry"),
  sendCode: () => resolveUrl("/sendCode"),
  upload: () => resolveUrl("/upload"),
  editUser: () => resolveUrl("/editUser"),
  userLogin: () => resolveUrl("/login"),
};
