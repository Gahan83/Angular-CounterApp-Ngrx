import { Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    {
        path:'user',
        component:UserComponent
    },
    {
        path:'admin',
        component:AdminComponent
    }
];
