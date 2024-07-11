import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit, OnChanges {

  @Input() Room: RoomList[] = [];

  @Input() title: string = '';

  @Output() roomSelected = new EventEmitter<RoomList>();


  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log(changes);

  }

  ngOnInit(): void {
  }

  selecetRoom(info: RoomList) {
    this.roomSelected.emit(info);
  }

}
