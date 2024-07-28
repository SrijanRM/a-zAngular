import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';


// NESTED ROUTING 
const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    children: [{ path: ':id', component: RoomsBookingComponent }, { path: 'add', component: RoomAddComponent }]
  },
 
  
];


// FOR CHILD 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
