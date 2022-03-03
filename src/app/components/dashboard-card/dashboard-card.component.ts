import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {
  @Input() size: number = 0;
  @Input() type: string = '';
  @Input() id: any;

  constructor() { }

  ngOnInit(): void {
  }

}
