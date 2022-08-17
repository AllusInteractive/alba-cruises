import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  passengers = [
    'Adult',
    'Children (9-16)',
    'Children (3-8)',
    'Infants (2 and Under)'
  ];

  constructor() { }

  ngOnInit() {
  }

}
