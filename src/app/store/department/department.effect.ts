import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from '../../service/data.service';
import { loadDepartment, loadDepartmentSuccess } from './department.action';

@Injectable()
export class DepartmentEffects {
  private actions$ = inject(Actions);
  private dataService = inject(DataService);

  loadDepartment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDepartment),
      mergeMap(() =>
        this.dataService
          .getDepartments()
          .pipe(
            map((departments: any) => loadDepartmentSuccess({ departments }))
          )
      )
    )
  );
}
