import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectService {

  public user = new BehaviorSubject<string>("Dolly");
  public cast = this.user.asObservable();
  u;

  public editUser(name): Observable<any> {
    this.u=this.user.next(name);
    return this.u;
  }
  constructor() { }
}
