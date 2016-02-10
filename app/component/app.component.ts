import {Component} from 'angular2/core';
import {NavBarComponent} from './navbar.component';
import {AuctionsComponent} from './auctions.component';
import {AuctionComponent} from './auction.component';


@Component({
    selector: 'my-app',
    template: `<nav-bar></nav-bar>
              <auctions></auctions>
              <auction></auction>`,
    directives: [NavBarComponent, AuctionsComponent, AuctionComponent],
})

export class AppComponent { }s 
