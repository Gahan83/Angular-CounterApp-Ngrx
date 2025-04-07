import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState, IDataState } from '../../store/AppState';
import { selectCount } from '../../store/counter/counter.selector';
import { selectData } from '../../store/data/data.selector';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  imports: [CommonModule],
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  count: Observable<number>;
  userList$: Observable<any> | undefined;
  constructor(private readonly store: Store<IAppState & IDataState>) {
    this.count = this.store.select(selectCount);
    this.userList$ = this.store.select(selectData);
  }

  ngOnInit() {}
}
