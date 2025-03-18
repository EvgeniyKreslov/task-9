// import { action, computed, observable } from "mobx";

// interface IODSImportStore {
//   isModalOpen: boolean;
//   toggleModal: Function;
// }

// class ODSImportStore implements IODSImportStore {
//   @observable isModalOpen: boolean = false;

//   @computed
//   get isModalOpenComputed() {
//     console.log('isModalOpenComputed', this.isModalOpen)
//     return this.isModalOpen
//   }

//   @action.bound
//   toggleModal = (): void =>  {
//     console.log('here', this.isModalOpen)
//     this.isModalOpen = !this.isModalOpen;
//     console.log('there', this.isModalOpen)
//   }
// }

// const store = new ODSImportStore();

// export default store;