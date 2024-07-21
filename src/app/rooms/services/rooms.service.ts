import { Injectable } from '@angular/core';
import { RoomList } from '../room';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
  );

   
  constructor(private http: HttpClient) {
    console.log("room services initilised ");
  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'AC',
      checkin: new Date('11-Jan-2023'),
      checkout: new Date('12-Jan-2023'),
      price: 2500,
    },
    {
      roomNumber: 2,
      roomType: 'Non AC',
      checkin: new Date('11-Jan-2023'),
      checkout: new Date('12-Jan-2023'),
      price: 2000,
    },
    {
      roomNumber: 3,
      roomType: 'No fan',
      checkin: new Date('11-Jan-2023'),
      checkout: new Date('12-Jan-2023'),
      price: 300,
    },
    {
      roomNumber: 4,
      roomType: '1 Star',
      checkin: new Date('11-Jan-2023'),
      checkout: new Date('12-Jan-2023'),
      price: 5000,
    },
    {
      roomNumber: 5,
      roomType: '2 Star',
      checkin: new Date('11-Jan-2023'),
      checkout: new Date('12-Jan-2023'),
      price: 20000,
    },
    {
      roomNumber: 6,
      roomType: '3 Star',
      checkin: new Date('11-Jan-2023'),
      checkout: new Date('12-Jan-2023'),
      price: 4000,
    },
    {
      roomNumber: 7,
      roomType: '4 Star',
      checkin: new Date('11-Jan-2023'),
      checkout: new Date('12-Jan-2023'),
      price: 3000,
    }
  ];

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
    // return this.roomList;
  }

  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
    })
    return this.http.request(request);
  }

}
