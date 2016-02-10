import {Component} from 'angular2/core';
import {Auction} from '../interfaces/auction';
import {AuctionService} from '../services/auction.service';

@Component({
    selector: 'auctions',
    template: `<ul class="heroes">
                <li *ngFor="#auction of auctions">
                  <span class="badge">{{auction.id}}</span>
                  <span> {{auction.name}} </span>
                </li>
              </ul>`,
    providers: [AuctionService]
})
export class AuctionsComponent implements OnInit{
  auctions: Auction[];

  constructor(private _auctionService: AuctionService) {}

  getAuctions() {
    // this.auctions = [
    //     {"id": 0, "name": "truck", "price": 1000, "open": true},
    //     {"id": 1, "name": "car", "price": 800, "open": true}
    // ];
    this._auctionService.getAuctions().then(auctions => this.auctions = auctions);
  }

  ngOnInit() {
    this.getAuctions();
  }
}
