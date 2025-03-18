import React, { useState } from "react";
import { Modal as PlatformModal } from "@universe-platform/uikit";
import { observer } from "mobx-react";

let qwe;

const Modal = () => {

  const [isModalOpen, setIsModalOpen] = useState(true)

  qwe = () => {
    console.log('qwe');
    setIsModalOpen(true);
  };

  return (
    <PlatformModal
      isOpen={isModalOpen}
      onClose={() => {
        setIsModalOpen(false)
      }}
    >
      123123123asd
    </PlatformModal>
  );
}

export {qwe};

export default observer(Modal);