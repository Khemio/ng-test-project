
import { Component, OnInit, Input } from '@angular/core';
import { SimpleChange } from '@angular/core';
import { TabsService } from '../../services/tabs.service';

import { Account } from '../file';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() switchTabs!: Object;

  currentType: string = 'income';

  files: Account [] = []

  constructor(private tabsService: TabsService) {
  }

  ngOnInit(): void {
    this.getFiles();
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }){
    let change: SimpleChange = changes['switchTabs']; 

    this.currentType = change.currentValue;
  }

  getFiles(): void {
    this.tabsService.getFiles()
      .subscribe(files => this.files = files);
  }
}
