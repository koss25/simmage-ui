import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import '../../../rxjs_operators';

import { DbObjectivesviewGet } from '../../../db-models/objectives';

@Component({
  selector: 'app-objectives-views-list',
  templateUrl: './objectives-views-list.component.html',
  styleUrls: ['./objectives-views-list.component.css']
})
export class ObjectivesViewsListComponent implements OnInit {

  public objectivesViewsData: Observable<any[]>;
  public selectedId: Observable<number>;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.objectivesViewsData = this.route.data.pluck<DbObjectivesviewGet[]>('list');
    this.selectedId = this.route.params.pluck<number>('selid');
  }
}
