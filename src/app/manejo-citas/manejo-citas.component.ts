import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ScheduleModule} from 'primeng/schedule';


@Component({
  selector: 'app-manejo-citas',
  templateUrl: './manejo-citas.component.html',
  styleUrls: ['./manejo-citas.component.css']
})

export class ManejoCitasComponent implements OnInit {
events: any[];
headerConfig: any;
header: any;

  constructor( private eventService: EventService, private router: Router) { }
var = 10;

  ngOnInit() {
    this.eventService.getEvents().then(events => {this.events = events;});

        this.header = {
            left: 'prev,next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
  }

  newEvent() {
// let usuarios = new User();
// this.userService.setter(usuarios);
    this.router.navigate(['/agregarCita']);
  }

  notificaciones() {

  }
}
export class MyEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  allDay: boolean = true;
}

