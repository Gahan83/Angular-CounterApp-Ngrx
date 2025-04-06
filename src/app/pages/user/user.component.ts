import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, IDataState } from '../../store/AppState';
import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';
import { selectCount } from '../../store/counter/counter.selector';
import { loadData } from '../../store/data/data.action';
import { selectData } from '../../store/data/data.selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  imports: [CommonModule],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
count:Observable<number>;
userList$:Observable<any> | undefined;
  constructor(private readonly store: Store<IAppState & IDataState>) { 
    this.count=this.store.select(selectCount);
    this.store.dispatch(loadData())
    this.userList$ = this.store.select(selectData);
  }
  ngOnInit() {
  }

}
