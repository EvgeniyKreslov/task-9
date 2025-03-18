import MyComponent from "./modules/ODSimport/component/ODSImportModal";
import ExportHistoryMenuItem from "./modules/ODSimport/component/UEComponent";

//@ts-ignore
import { qwe } from "./modules/ODSimport/ui/Modal";

export default {
  userExits: [
      {
          type: 'RightHeaderItem',
          moduleId: 'uniqueId',
          active:true,
          system: false,
          resolver: () => true,
          meta: {
             order: 1,
          },
          component: MyComponent
      },
      {
        moduleId: 'ExportHistoryMenuItem123',
        type: 'SearchPageOperationMenuItem',
        active: true,
        system: false,
        resolver: (): boolean => true,
        meta: {getTitle: () => 'import ODS'},
        fn: () => {
          // @ts-ignore
          qwe();
        }
    },
  ]
};
