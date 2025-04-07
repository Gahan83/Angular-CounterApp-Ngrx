import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from '../../service/data.service';
import { loadData, loadDataFailure, loadDataSuccess } from './data.action';

@Injectable()
export class DataEffects {
  private actions$ = inject(Actions);
  private dataService = inject(DataService);

  loadData$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadData),
      switchMap(() =>
        this.dataService.getUsers().pipe(
          map(data => loadDataSuccess({ data })),
          catchError(error => 
            of(loadDataFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
