import {Component} from 'angular2/core';
import {AuctionService} from '../services/auction.service';
import {FirebaseEventPipe} from './firebasepipe';


@Component({
    selector: 'nav-bar',
    template: `<nav class="navbar">
                <p class="navbar-item is-centered">
                  <a class="link is-info" href="#">Home</a>
                </p>
                <p class="navbar-item is-centered">
                <img src="/images/logo.png" alt="" style="height: 33px;">
                </p>
                <p class="navbar-item is-centered">
                  <a class="link is-info" [hidden]="!isLoggedIn" href="#">Account</a>
                  <a class="link is-info" [hidden]="isLoggedIn" (click)="authWithTwitter()">Sign in with Twitter</a>
                </p>
              </nav>`,
    providers: [AuctionService],
    pipes: [FirebaseEventPipe]
})
export class NavBarComponent {
  auctionsRef: Firebase;
  authData: any;
  isLoggedIn: boolean;

  constructor(private _AuctionService: AuctionService) {
    this.auctionsRef = this._AuctionService.auctionsRef;
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
}
