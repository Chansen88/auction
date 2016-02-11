import {Injectable} from 'angular2/core';
import {Auction} from '../interfaces/auction';
import {AUCTIONS} from './mock-auctions';

@Injectable()
export class AuctionService {
  firebaseUrl: string;
  auctionsRef: Firebase;
  isLoggedIn: boolean;
	authData: any;

  constructor() {
    this.firebaseUrl = "https://popping-heat-8485.firebaseio.com/auctions";
    this.auctionsRef = new Firebase(this.firebaseUrl);
    console.log('%%%%%%%%%%%%%%%%%%%%%%');
    console.log(this.auctionsRef);
    this.auctionsRef.onAuth((user) => {
			if (user) {
				this.authData = user;
				this.isLoggedIn = true;
			}
		});
  }

  getAuctions() {
    return Promise.resolve(this.auctionsRef);
  }
}
