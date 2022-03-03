import { Component, OnInit } from '@angular/core';

import { TabsService } from '../../services/tabs.service';
import { Account } from '../file';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  files: Account [] = [];
  total: number = 0;

  constructor(private tabsService: TabsService) { }

  ngOnInit(): void {
    this.getFiles();
    this.getSizes();
  }

  getFiles(): void {
    this.tabsService.getFiles()
      .subscribe(files => this.files = files);
  }

  getSizes() {
    this.files.forEach(file => {
      this.total += file.data.length;
    })
  }

}
