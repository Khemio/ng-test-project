import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { File } from '../../app/components/file';
import { DATA } from '../../app/components/mock-files';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  incomeFiles: File[] = [];
  outcomeFiles: File[] = [];
  loanFiles: File[] = [];
  investmentFiles: File[] = [];

  files = [
    {
      id: 0,
      type: 'income',
      data: this.incomeFiles
    },
    {
      id: 1,
      type: 'outcome',
      data: this.outcomeFiles
    },
    {
      id: 2,
      type: 'loans',
      data: this.loanFiles
    },
    {
      id: 3,
      type: 'investments',
      data: this.investmentFiles
    }
  ]
  
  constructor() { }

  getFiles(): Observable<any> {
    this.files[0].data = DATA.filter((file) => file.type === 'income');
    this.files[1].data = DATA.filter((file) => file.type === 'outcome');
    this.files[2].data = DATA.filter((file) => file.type === 'loan');
    this.files[3].data = DATA.filter((file) => file.type === 'investment');

    const files = of(this.files);
    return files;
  }
}
