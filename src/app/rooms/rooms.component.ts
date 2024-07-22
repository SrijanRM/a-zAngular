import {
  AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnInit, QueryList,
  ViewChild, ViewChildren
} from '@angular/core';
import { Room, RoomList } from './room';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, observable, shareReplay } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { CssSelector } from '@angular/compiler';

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

  // creating observable 
  stream = new Observable(data => {
    for (let i = 1; i < 10; i++) {
      data.next(`user ${i}`);
    }
    data.complete();
    // data.error('error');
  });

  room: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 1,
  }

  roomList: any;


  constructor(private roomservice: RoomsService, private http: HttpClient) { }
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

  totalbit = 0;
  ngOnInit(): void {
    this.roomservice.getPhotos().subscribe(event => {
      // console.log(data);
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log("request sent ");
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log("request sucess ");
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalbit += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log("response ", event.body);
        }
      }
    });
    // stream
    this.stream.subscribe(data => {
      console.log(data);
    });
    // if we fetch from api
    // gives error saying type observable not there 
    // this.roomList = this.roomservice.getRooms();
    // this.roomList = [];

    this.roomservice.getRooms().subscribe(data => {
      // this.roomList = rooms; // get call using api
      console.log(data);
    });

    this.roomList = this.roomservice.roomList;

    this.roomservice.getRooms$.subscribe(data => {
      console.log(data);
    });
    // angular user rxjs library internally to work with data and it is also used inside http service also form / routiing 
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

// 6:58:00 --  7:25:28
// 8:00:00

// 8:31:00 try .



// pull 
// getdate -> adddata -> getdata 
// pushdata >;
// getdata -> rxjs is continous stream of data -> adddata // 8:50

// router 9:35:40 

// 10:15:15