import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../store/AppState';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  imports:[CommonModule],
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  count:Observable<number>;
  constructor(private readonly store:Store<IAppState>) { 
    this.count=this.store.select('count');
  }

  ngOnInit() {
  }

}
