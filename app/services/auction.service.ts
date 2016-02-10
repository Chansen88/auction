import {Injectable} from 'angular2/core';
import {Auction} from '../interfaces/auction';
import {AUCTIONS} from './mock-auctions';


@Injectable()
export class AuctionService {
  getAuctions() {
    return Promise.resolve(AUCTIONS);
  }
}
