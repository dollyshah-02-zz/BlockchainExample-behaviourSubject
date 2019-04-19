import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blockchain } from '../blockchain/blockchain.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  coins: Observable<Blockchain[]>;
  name:string
  constructor(private store: Store<AppState>) {
    console.log(this.store.select(state => state.blockchain));
    this.coins = this.store.select(state => state.blockchain);
  }
  deleteCoin(index: number) {
    this.store.dispatch({
      type: 'DELETE_COIN',
      payload: index
    })
  }

  ngOnInit() {
  }

}
