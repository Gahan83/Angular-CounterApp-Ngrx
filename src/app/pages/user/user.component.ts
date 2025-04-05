import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/AppState';
import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  imports: [CommonModule],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
count:Observable<number>;
  constructor(private readonly store:Store<IAppState>) { 
    this.count=this.store.select('count');
  }
  ngOnInit() {
  }

}
