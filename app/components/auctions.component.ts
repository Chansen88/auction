import {Component, Pipe} from 'angular2/core';
import {Auction} from '../interfaces/auction';
import {AuctionService} from '../services/auction.service';
import {FirebaseEventPipe} from './firebasepipe';

@Component({
  selector: 'auctions',
  templateUrl: './partials/auctions.html',
  providers: [AuctionService],
  pipes: [FirebaseEventPipe]
})



export class AuctionsComponent {
  firebaseUrl: string;
  auctionsRef: Firebase;
  newBid: Object = {};
  currentAuction: Object;
  currentAuctionBids: Array<number>;
  authData: any;
  isLoggedIn: boolean;

  constructor(private _AuctionService: AuctionService) {
    this.firebaseUrl = this._AuctionService.firebaseUrl;
    this.auctionsRef = this._AuctionService.auctionsRef;
    this.currentAuction = this._AuctionService.activeAuctionData;
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

  submitBid() {
    console.log(this.newBid)
    this.newBid['user'] = this.authData.twitter.username;
    this._AuctionService.addBid(this.newBid, this.currentAuction.id)
    this.newBid = {};
    this.currentAuction = null;
  }

  moreInfo(id) {
    this.newBid = {};
    this._AuctionService.getAuction(id);
    console.log(this.currentAuction)
  }
}
