// import { CHAT_API } from "@/config/api/chat";
import { request, axios } from "@/utils/request";
// import { BasicType } from "@/interface/model/common";
// import { GroupManageType } from "@/interface/model/group";
interface useChatServiceInterface {
  chat: (params: { prompt: string; model: string }) => Promise<any>;
}
export const useChatService = (): useChatServiceInterface => {
  class ChatService {
    public chat(params: { prompt: string; model: string }) {
      const url = "/ai/openai/text";
      return request
        .post(url, params)
        .then(({ data }) => {
          // console.log(res);
          return Promise.resolve(data);
        })
        .catch((err) => {
          console.log(err);
          return Promise.reject(err);
        });
    }
  }
  return new ChatService();
};
