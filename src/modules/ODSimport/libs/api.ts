import { Dialog } from "@universe-platform/sdk";


const udToken = localStorage.getItem('ud-token');
const udSession = localStorage.getItem('ud-session');

export const getTemplate = () => {
  fetch(
    `/universe-backend/api/v2/core/import-data/template?_dc=${udSession}`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${udToken}`
      },
      body: JSON.stringify({
        entityName: 'test',
        target: 'records-and-relations-ods',
        format: 'XLSX',
        additional: {
          importClassifications: false
        }
      })
    }
  )
  .then((response: Response) => {
    if (response.status !== 200) {
      Dialog.showError('Не получилось скачать шаблон. Попробуйте ещё раз или обратитесь к администратору');
      return null
    }
    return response.blob()
  })
  .then((blob) => {
    if (blob) {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `sample.ods`);
      document.body.appendChild(link);
      link.click();
      // @ts-ignore
      link.parentNode.removeChild(link);
    }
  })
}