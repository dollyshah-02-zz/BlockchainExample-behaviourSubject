import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { StoreModule } from '@ngrx/store';
import { addCoinReducer } from './reducers/blockchain.reducer';
import { DisplayComponent } from './display/display.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OneComponent } from './behaviourSubject/one/one.component';
import { TwoComponent } from './behaviourSubject/two/two.component';
import { BehaviourSubjectService } from './behaviour-subject.service';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    DisplayComponent,
    NavigationComponent,
    OneComponent,
    TwoComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({blockchain:addCoinReducer})
  ],
  providers: [BehaviourSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
