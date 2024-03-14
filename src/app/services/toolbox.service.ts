import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToolboxService {
  constructor() {}

  convertObjectToArray(obj: any) {
    return Object.keys(obj).map((key) => {
      return {
        name: key,
        ...obj[key],
      };
    });
  }

  sortArrayByKey(array: any[], key: any) {
    return array.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
  }

}
