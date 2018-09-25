import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private http: Http) { }

  getEvents() {
    return this.http.get('showcase/resources/data/scheduleevents.json')
                .toPromise()
                .then(res => <any[]> res.json().data)
                .then(data => { return data; });
}
}
