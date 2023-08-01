import { createStore } from "vuex";
import { BasicTypeInterface, StoreManageType } from "@/interface/store";

const createModule = (): BasicTypeInterface.Data<
  StoreManageType.CommitInterface<string>
> => {
  const context = require.context("./modules", true, /\.ts|js$/);
  const modules: BasicTypeInterface.Data<
    StoreManageType.CommitInterface<string>
  > = {};
  context.keys().forEach((key) => {
    const moduleName: string = key.replace(/^\.\/(.*)\.\w+$/, "$1");
    const moduleContext = context(key).default;
    modules[moduleName] = moduleContext;
  });
  return modules;
};

const store = createStore({
  modules: createModule(),
});

export default store;
