// @ts-check

import * as React from 'react';
import { DropDown } from '@universe-platform/uikit';
import {
  //  Dialog,
   i18n,
  //  UniverseConfig
} from '@universe-platform/sdk';
// import { observer } from 'mobx-react';
import { AbstractCardStore, IRecordEntity } from '@universe-platform/record';
import '../../libs/locales.ts';
import { inject, observer } from 'mobx-react';
// @ts-ignore
import { qwe } from '../../ui/Modal/index.tsx';
// import store from '../../store/index.ts';

interface IProps {
   dataCardStore: AbstractCardStore<IRecordEntity>;
}

// @inject((stores: any) => {
//   return {
//     ...stores,
//     store
//   }
// })
// @observer
class ExportHistoryMenuItem extends React.Component {
  //  const handleClick = React.useCallback(() => {

  //     let filename = '';

  //     fetch(
  //         UniverseConfig.getServerUrl().replace(/\/+$/, '') + '/v1/dg/export-history/history.xlsx' + `?assetType=${props.dataCardStore.typeName}&etalonId=${props.dataCardStore.etalonId}&_dc=${new Date().getTime()}`,
  //        {
  //          method: 'GET',
  //          headers: {
  //            "Content-Type": "application/json",
  //            "Authorization": localStorage.getItem('ud-token') || ''
  //          },
  //        }
  //      )
  //      .then((response: Response) => {
  //        if (response.status !== 200) {
  //          Dialog.showError('Не получилось экспортировать. Попробуйте ещё раз или обратитесь к администратору');
  //          return null
  //        }
  //          const disposition = response.headers.get('Content-Disposition');
  //           if( disposition && disposition.indexOf('attachment') !== -1 ) {
  //              const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
  //              const matches = filenameRegex.exec(disposition);
  //              if( matches != null && matches[1] ) {
  //                 filename = matches[1].replace(/['"]/g, '');
  //              }
  //           }
  //        return response.blob()
  //      })
  //      .then((blob) => {
  //        if (blob) {
  //          const url = window.URL.createObjectURL(new Blob([blob]));
  //          const link = document.createElement('a');
  //          link.href = url;
  //          link.setAttribute('download', filename);
  //          document.body.appendChild(link);
  //          link.click();
  //          // @ts-ignore
  //          link.parentNode.removeChild(link);
  //        }
  //      })

      
  //  }, [props.dataCardStore.etalonId, props.dataCardStore.typeName]);

   handleClick = () => {
      console.log('дёргаем ручку экспорта в XLXS');
   }


   handleClickODS = () => {
      console.log('дёргаем ручку экспорта в ODS', this.props);
      // @ts-ignore
      qwe();
   //  const { toggleModal } = this.props.store;
   //  toggleModal();
   }

   override render () {

     return  (
        <>
           <DropDown.Item
              onClick={this.handleClick}
           >
              qweqweqweqwe
           </DropDown.Item>
           <DropDown.Item
              onClick={this.handleClickODS}
           >
              asdasdasdasd
           </DropDown.Item>
        </>
     );
   }

}

export default ExportHistoryMenuItem;
