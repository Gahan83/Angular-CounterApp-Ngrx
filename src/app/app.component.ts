import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from "./pages/admin/admin.component";
import { UserComponent } from "./pages/user/user.component";
import { Store } from '@ngrx/store';
import { IAppState } from './store/AppState';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { decrement, increment } from './store/counter.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent, UserComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter:number=0;
  counter$:Observable<number>;
  constructor(private readonly store:Store<IAppState>
  )
  {
    this.counter$ = this.store.select('count');
  }


  onDecrement()
  {
    //this.counter --;
    this.store.dispatch(decrement())
    
  }
  onIncrement()
  {
    //this.counter ++;
    this.store.dispatch(increment())

  }
}
