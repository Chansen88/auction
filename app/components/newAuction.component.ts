import {Component} from 'angular2/core';
import {Auction} from '../interfaces/auction';
import {AuctionService} from '../services/auction.service';

@Component({
    selector: 'new-auction',
    template: `<div *ngFor="#auction of auctions">
                <input type="string">{{auction.name}}/>
                <input type="number">{{auction.price}}/>
              </div>`,
    providers: [AuctionService]
})
export class AuctionComponent implements OnInit{
  auctions: Auction[];

  constructor(private _auctionService: AuctionService) {}

  getAuctions() {
    this._auctionService.getAuctions().then(auctions => this.auctions = auctions);
  }

  ngOnInit() {
    this.getAuctions();
  }
