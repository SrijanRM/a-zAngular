import { Injectable } from '@angular/core';
import { RoomList } from '../room';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  // header = new HttpHeaders({ 'token': '1234' });

  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
  );


  constructor(private http: HttpClient) {
    console.log("room services initilised ");
  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomtype: 'AC',
      checkin: new Date('11-Jan-2023'),
      checkout: new Date('12-Jan-2023'),
      price: 2500,
      amenities: '',
      rating: 0
    },
    {
      roomNumber: 2,
      roomtype: 'Non AC',
      checkin: new Date('11-Jan-2023'),
      checkout: new Date('12-Jan-2023'),
      price: 2000,
      amenities: '',
      rating: 0
    },
    {
      roomNumber: 3,
      roomtype: 'No fan',
      checkin: new Date('11-Jan-2023'),
      checkout: new Date('12-Jan-2023'),
      price: 300,
      amenities: '',
      rating: 0
    },
    {
      roomNumber: 4,
      roomtype: '1 Star',
      checkin: new Date('11-Jan-2023'),
      checkout: new Date('12-Jan-2023'),
      price: 5000,
      amenities: '',
      rating: 0
    },

  ];



  getRooms() {
    // creating header for http request 
    // return this.http.get<RoomList[]>('/api/rooms');
    // return this.roomList;

    return this.http.get<RoomList[]>('/api/rooms');
  }

  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
    })
    return this.http.request(request);
  }

}
