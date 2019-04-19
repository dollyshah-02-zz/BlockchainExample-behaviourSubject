import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Blockchain } from '../blockchain/blockchain.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user: string = "GUEST";
  constructor(private store: Store<AppState>) {
    this.store.subscribe((response) => {
      for (let i = 0; i < response.blockchain.length; i++) {
        this.user = response.blockchain[i].name;
      }
      if (response.blockchain[0] == null) {
        this.user = "GUEST"
      }
    })
  }
  ngOnInit() {
  }

}
