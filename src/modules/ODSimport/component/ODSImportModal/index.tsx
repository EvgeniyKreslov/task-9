// @ts-nocheck


import React from "react";
// import store from "../../store";
import { inject, observer } from "mobx-react";
// import { Modal } from "@universe-platform/uikit";
// import { action, observable } from "mobx";
import Modal from "../../ui/Modal";

// @inject((stores: any) => {
//   return {
//     ...stores,
//     store
//   }
// })
@observer
class MyComponent extends React.Component {

  override render(): React.ReactNode {
    return (
      <div style={{ backgroundColor: 'red' }}>
        1123123123
        <Modal />

      </div>
    );
  }
}

export default MyComponent;