import { Component, OnInit } from '@angular/core';
import { RoomList } from '../room';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {

  room: RoomList = {
    roomtype: '',
    amenities: '',
    checkin: new Date(),
    checkout: new Date(),
    rating: 0,
    price: 0
  }

  constructor(private roomservice: RoomsService) { }

  ngOnInit(): void {
  }

  addRooms() {
    
  }

}
