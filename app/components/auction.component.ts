import {Component, Pipe} from 'angular2/core';
import {Auction} from '../interfaces/auction';
import {AuctionService} from '../services/auction.service';
import {FirebaseEventPipe} from './firebasepipe';

@Component({
    selector: 'auction',
    template: `<h1>sdfsdsdsdf</h1>
              <br>
              <div *ngIf="auction">
              <h1>{{auction}}</h1>
              <ul>
                <li>
                  {{auction.description}}
                </li>
                <li>
                  <h4>
                    {{auction.price}}
                  </h4>
                </li>
                <li>
                hello
                </li>
                <li>
                  <form>
                      <label for="amount">new Bid</label>
                      <input id="amount" type="text" class="form-control" value='{{auction.price + 10}}' required>
                    <button type="submit" class="btn btn-default">Place Bid</button>
                  </form>
                </li>
              </ul>
              </div>
    `,
    providers: [AuctionService],
    pipes: [FirebaseEventPipe]
})

export class AuctionComponent {
  firebaseUrl: string;
  auctionsRef: Firebase;
  activeAuction: string;
  auction = Object;

  constructor(private _AuctionService: AuctionService) {
    this.firebaseUrl = this._AuctionService.firebaseUrl;
    this.auctionsRef = this._AuctionService.auctionsRef;
    this.auction = this._AuctionService.activeAuctionData;
  }

  testFunction(data) {
    console.log(data)
  }


}
