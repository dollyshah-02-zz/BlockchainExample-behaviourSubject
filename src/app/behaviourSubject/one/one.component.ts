import { Component, OnInit } from '@angular/core';
import { BehaviourSubjectService } from 'src/app/behaviour-subject.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  public us: string;
  constructor(private bs: BehaviourSubjectService) { }

  ngOnInit() {
    this.bs.editUser('shah').subscribe(u => {
      console.log("u", u)
    });
    //   this.bs.cast.subscribe((user) => {
    //     this.us = user;
    //   })
  }

}
