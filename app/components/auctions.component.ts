import {Component, Pipe} from 'angular2/core';
import {Auction} from '../interfaces/auction';
import {AuctionService} from '../services/auction.service';
import {FirebaseEventPipe} from './firebasepipe';

@Component({
    selector: 'auctions',
    template: `<button [hidden]="isLoggedIn" class="twitter" (click)="authWithTwitter()">Sign in with Twitter</button>
    <table class="table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Open</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Open</th>
        </tr>
      </tfoot>
      <tbody>
        <tr *ngFor="#auction of firebaseUrl | firebaseevent:'value'">
          <td>{{auction.name}}</td>
          <td>{{auction.price}}</td>
          <td>{{auction.open}}</td>
        </tr>
      </tbody>
    </table>`,
    providers: [AuctionService],
    pipes: [FirebaseEventPipe]
})

export class AuctionsComponent {
  firebaseUrl: string;
  auctionsRef: Firebase;
  authData: any;
  isLoggedIn: boolean;

  constructor(private _AuctionService: AuctionService) {
    this.firebaseUrl = this._AuctionService.firebaseUrl;
    this.auctionsRef = this._AuctionService.auctionsRef;
    this.auctionsRef.onAuth((user) => {
			if (user) {
				this.authData = user;
				this.isLoggedIn = true;
			}
		});
  }

  authWithTwitter() {
		this.auctionsRef.authWithOAuthPopup("twitter", (error) => {
			if (error) {
				console.log(error);
			}
		});
  }
}
