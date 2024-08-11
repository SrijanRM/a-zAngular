import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  bookingForm!: FormGroup;

  constructor(private fB: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fB.group({
      roomId: new FormControl(''),
      guestemail: new FormControl(''),
      address : this.fB.group({
        guestAddress:[''],
        guestCity:[''],
        guestState:[''],
        guestCountry:[''],
        guestZipCode:[''],
      }),
      checkindate: new FormControl(''),
      checkoutdate: new FormControl(''),
      bookingstatus: new FormControl(''),
      bookingnumber: new FormControl(''),
      bookingamount: new FormControl(''),
    });
  }

  addBooking() {
    console.log("form ",this.bookingForm.getRawValue());
    
  }

}

// 14 hr