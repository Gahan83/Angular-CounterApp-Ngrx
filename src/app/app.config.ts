import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { DataEffects } from './store/data/data.effect';
import { dataReducer } from './store/data/data.reducer';
import { counterReducer } from './store/counter/counter.reducer';
import { departmentReducer } from './store/department/department.reducer';
import { DepartmentEffects } from './store/department/department.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      data: dataReducer,
      counter:counterReducer,
      departments: departmentReducer
    }),
    provideEffects([DataEffects,DepartmentEffects])
  ]
};
