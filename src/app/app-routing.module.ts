import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfounfComponent } from './notfound/notfounf.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule)},
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // default route 
  { path: '**', component: NotfounfComponent }, // wildcard route 


  // , canActivate: [LoginGuard]  add this guard later 

  // ng g m comname --route=routename --routing --model=modelloc
  // for lazy loading usig cli
];


// FOR ROOT 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// 13:23:20
