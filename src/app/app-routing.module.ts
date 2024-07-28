import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfounfComponent } from './notfound/notfounf.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'employee', component: EmployeeComponent , canActivate: [LoginGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // default route 
  { path: '**', component: NotfounfComponent }, // wildcard route 
  { path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule), canActivate: [LoginGuard]  },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule), canActivate: [LoginGuard]  }

  // ng g m comname --route=routename --routing --model=modelloc
  // for lazy loading usig cli
];


// FOR ROOT 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
