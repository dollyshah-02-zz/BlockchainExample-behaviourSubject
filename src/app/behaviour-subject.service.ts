import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectService {

  public user = new BehaviorSubject<string>("Dolly");
  public cast = this.user.asObservable();

  private editUser(name) {
    this.user.next(name);
  }
  constructor() { }
}
