import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {

  constructor(private router: ActivatedRoute

  ) { }

  id: any;
  // id$ !: Observable<number>

  // id$ = this.router.params.pipe(
  //   map(par => par['id'])
  // );
  // if multiple value then can use paramMap

  id$ = this.router.paramMap.pipe(map((par) => par.get('id')));

  ngOnInit(): void {
    // again a observable 
    // here we subscribe 
    // but how to avoid it 
    // this.router.params.subscribe((param) => this.id = param['id']);



    // using snapshot 
    // this.id = this.router.snapshot.params['id'];


    // here snapshot will never upadate data if we are showing in same view 
    // better to use 

    // this.id$ = this.router.params.pipe(
    //   map(par => par['id'])
    // );

  }

  // dynamic routing 

}


// activated roouting 
// allow user to access data in router 
// allow acess to snapshot data 
// allow to acess data from route config 
