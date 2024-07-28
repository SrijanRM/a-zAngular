import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotelInventoryApp';

  constructor(private router: Router) {

  }


  ngOnInit(): void {

    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // })

    // pipe rxjs  

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log('naviagatin started ', event);
    });

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log('naviagatin Ended ', event);
    });

  }
}
