import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { IAppState } from './store/AppState';
import { decrement, increment } from './store/counter/counter.action';
import { selectCount } from './store/counter/counter.selector';
import { loadDepartment } from './store/department/department.action';
import { selectDepartments, selectLoading } from './store/department/department.selector';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AdminComponent,
    UserComponent,
    CommonModule,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  
  private store=inject(Store)

  departments$=this.store.select(selectDepartments);
  loading$=this.store.select(selectLoading);

  ngOnInit(): void {
    this.store.dispatch(loadDepartment());
  }
  // counter$: Observable<number> = new Observable<number>();
  // constructor(private readonly store: Store<IAppState>) {
  //   this.counter$ = this.store.select(selectCount);
  // }

  // onDecrement() {
  //   //this.counter --;
  //   this.store.dispatch(decrement());
  // }
  // onIncrement() {
  //   //this.counter ++;
  //   this.store.dispatch(increment());
  // }
}
