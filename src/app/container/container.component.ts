import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit {

  constructor() { }
  ngAfterContentInit(): void {

  }

  ngOnInit(): void {
  }

}
