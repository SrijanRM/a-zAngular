import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { NotfounfComponent } from './notfound/notfounf.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'rooms', component: RoomsComponent },
  // for dynamic routing 
  { path: 'rooms/:id', component: RoomsBookingComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' }, // default route 
  { path: '**', component: NotfounfComponent } // wildcard route 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
