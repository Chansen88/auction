import {Component} from 'angular2/core';
import {NavBarComponent} from './navbar.component';
import {AuctionsComponent} from './auctions.component';

@Component({
    selector: 'my-app',
    template: `<nav-bar></nav-bar>
              <auctions></auctions>`,
    directives: [NavBarComponent, AuctionsComponent],
})

export class AppComponent { }
