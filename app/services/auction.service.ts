import {Injectable} from 'angular2/core';
import {Auction} from '../interfaces/auction';
import {AUCTIONS} from './mock-auctions';

@Injectable()
export class AuctionService {
  firebaseUrl: string;
  auctionsRef: Firebase;
  isLoggedIn: boolean;
  auctionData: Object;
  activeAuctionData: Object;
	authData: any;

  constructor() {
    this.firebaseUrl = "https://popping-heat-8485.firebaseio.com/auctions";
    this.auctionsRef = new Firebase(this.firebaseUrl);
    this.auctionsRef.onAuth((user) => {
			if (user) {
				this.authData = user;
				this.isLoggedIn = true;
			}
		});
  }

  getAuctions() {
    this.auctionsRef.on('child_changed', (snapshot) => {
      this.auctionData = snapshot.val()
    });
    return this.auctionData
  }

  newAuction(auction){
    auction['startPrice'] = auction.price
    auction['owner'] = this.authData.twitter.username
    auction['open'] = true
    auction['bids'] = [{'bid':auction.price, 'user':auction.owner}]
    var newPostRef = this.auctionsRef.push(auction)
    auction['id'] = newPostRef.key()
    this.auctionsRef.child(newPostRef.key()).set(auction)
  }

  addBid(data, id){
    var auctionData = this.getAuction(id)
    if (data.bid > auctionData.bids[0].bid) {
      auctionData.bids.unshift(data)
      auctionData.price = data.bid
      this.auctionsRef.child(id).set(auctionData)
    }
  }

  getAuction(id) {
    this.auctionsRef.child(id).on('value', (snapshot) => {
      this.activeAuctionData = snapshot.val()
    });
  }
}
