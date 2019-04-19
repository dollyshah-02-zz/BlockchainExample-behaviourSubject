import { Component, OnInit } from '@angular/core';
import { Blockchain } from './blockchain.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  name: string;
  addCoin(name: string, value: number) {
    this.name = name;
    this.store.dispatch({
      type: 'ADD_COIN',
      payload: <Blockchain>{
        name: name,
        price: value
      }
    })
    console.log("add coin", name, value);
    this.store.subscribe((response) => {
      console.log("Store:::::::", response)
    })
  }
}

