import {Component} from 'angular2/core';
import {Auction} from '../interfaces/auction';
import {AuctionService} from '../services/auction.service';

@Component({
    selector: 'auctions',
    template: `<table class="table">
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
        <tr *ngFor="#auction of auctions">
          <td>{{auction.name}}</td>
          <td>{{auction.price}}</td>
          <td>{{auction.open}}</td>
        </tr>
      </tbody>
    </table>`,
    providers: [AuctionService]
})
export class AuctionsComponent implements OnInit{
  auctions: Auction[];

  constructor(private _auctionService: AuctionService) {}

  getAuctions() {
    this._auctionService.getAuctions().then(auctions => this.auctions = auctions);
  }

  ngOnInit() {
    this.getAuctions();
  }
}
