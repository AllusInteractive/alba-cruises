import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-times-costs',
  templateUrl: './times-costs.component.html',
  styleUrls: ['./times-costs.component.css']
})
export class TimesCostsComponent implements OnInit {

  eiggMuckTimes = [
    'Morar dep 11:00',
    'Eigg arr 12:00', 
    'Eigg dep 12:30', 
    'Muck arr 13:30',  
    'Muck dep 15:30',  
    'Eigg arr 16:00',  
    'Eigg dep 16:30',  
    'Morar arr 17:30'
  ];

  eiggRumTimes = [
    'Morar dep 11:00',
    'Eigg arr 12:00', 
    'Eigg dep 12:30', 
    'Rum arr 13:30',  
    'Rum dep 15:30',  
    'Eigg arr 16:00',  
    'Eigg dep 16:30',  
    'Morar arr 17:30'
  ];

  rumTimes = [
    'Morar dep 11:00',
    'Rum arr 12:45',
    'Rum dep 15:45',
    'Morar arr 17:30',
    // '&nbsp;',
    // '&nbsp;',
    // '&nbsp;',
    // '&nbsp;'
  ];

  constructor() { }

  ngOnInit() {
  }

}
