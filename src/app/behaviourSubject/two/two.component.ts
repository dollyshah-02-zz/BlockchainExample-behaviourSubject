import { Component, OnInit } from '@angular/core';
import { BehaviourSubjectService } from 'src/app/behaviour-subject.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  public us:string;
  constructor(private bs:BehaviourSubjectService) { }

  ngOnInit() {
    this.bs.cast.subscribe((user)=>{
      this.us=user;
    })
  }

}
