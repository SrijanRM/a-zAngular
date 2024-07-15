import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnInit, QueryList,
   ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './room';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  // for binding 
  // we have three type 
  // interpolation , even and property binding 

  // @ViewChild(HeaderComponent) headerComp! : HeaderComponent;

  // if i add static has true then can acess it in ngOnInit ,async 
  // @ViewChild(HeaderComponent, { static: true }) headerComp!: HeaderComponent;
  @ViewChild(HeaderComponent) headerComp!: HeaderComponent;
  // one instance viewchild 
  // more instance viewchildren

  @ViewChildren(HeaderComponent) headerChildren!: QueryList<HeaderComponent>;

  title: any = 'Interpolation';
  childTitle: any = 'before ngOnChange ';
  propertybinding = 'propertybinding';
  hideRoom: any = false;

  room: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 1,
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

  constructor() { }
  ngAfterViewChecked(): void {
    this.headerComp.title = "ng After View Init";

    console.log("ngAfterViewChecked init ", this.headerComp.title);

  }


  ngAfterViewInit(): void {
    // console.log("view child after using after view init  :", this.headerComp)
    this.headerComp.title = "ng After View Init";
    console.log("view checked init ", this.headerComp.title);

    this.headerChildren.forEach(item => item.title = "Title");
  }

  ngDoCheck(): void {
    console.log("it will invoke each time when there is a change in coponent");
    console.log("try not to use onchange and docheck has they do same job");
    console.log("on change detect any changes done to input value ");
    console.log("docheck detect any changes done so it will cause duplicate if using both");


  }

  ngOnInit(): void {
    console.log("used static has true to able to acess in oninit");

    console.log("view child  :", this.headerComp)
  }

  eventBinding() {
    this.hideRoom = !this.hideRoom;
    this.childTitle = "Room list after ngOnChange";
  }

  roomSelected(info: any) {
    console.log(info);

  }


}
// bootstarp - 4:31:00
// lifev cycle hook 4:45

// constructor > ngonchange > ngoninit > ngDoCheck > ngAfterContent init > 
// ngAfterContentChecked > ngAfterviewinit > ngafterviewchecked > ngondestroy

// 5:50:00

// ngaftercontentinit
