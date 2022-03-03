import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  currentType: string = 'income';
  types: string[] = ['income', 'outcome', 'loans', 'investments'];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      if (params['id']){
        this.currentType = this.types[params['id']];
      }
      else {
        this.currentType = 'income';
      }
    })
  }
}


