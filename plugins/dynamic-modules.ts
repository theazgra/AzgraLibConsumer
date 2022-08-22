import * as userModule from 'AzgraNuxtLibrary/src/store-modules/user';
// import { StoreAccessorType } from '~/store';

function registerStoreModule(app: any, name: string, module: any) {
  app.store.registerModule(name, module);
  console.log(`VUEX store module '${name}' registered.`);
}

export default function (
  { app }: any,
  inject: (key: string, value: Function | Object) => void
) {
  // registerStoreModule(app, 'user', userModule);
}
