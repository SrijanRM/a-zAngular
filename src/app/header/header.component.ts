import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // title: string = 'from child invoke using view child , here not using input / output decorator ';
  title: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
