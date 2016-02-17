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
                  <a class="link is-info" [hidden]="!isLoggedIn" (click)="createForm=true">New Item</a>
                  <a class="link is-info" [hidden]="isLoggedIn" (click)="authWithTwitter()">Sign in with Twitter</a>
                </p>
              </nav>

              <div class="container" [hidden]="!createForm">
                <div class="column is-4">
                <form  #f="ngForm" (ngSubmit)="createItem()">
                  <p class="control">
                    <input class="input" type="text" placeholder="Item Name" [(ngModel)]="vm.name" required>
                  </p>
                  <p class="control">
                    <input class="input" type="string" placeholder="Image Url" [(ngModel)]="vm.imageUrl">
                  </p>
                  <p class="control">
                    <input class="input" type="number" placeholder="Item Price" [(ngModel)]="vm.price" required>
                  </p>
                  <p class="control">
                    <textarea class="textarea" placeholder="Description" [(ngModel)]="vm.description" required></textarea>
                  </p>
                  <p class="control">
                    <button class="button is-primary" [disabled]="!f.valid">Submit</button>
                    <button class="button" (click)="createForm=false">Cancel</button>
                  </p>
                  </form>
                </div>
              </div>
              `,
    providers: [AuctionService],
    pipes: [FirebaseEventPipe]
})
export class NavBarComponent {
  auctionsRef: Firebase;
  authData: any;
  isLoggedIn: boolean;
  createForm = false;
  vm: Object = {};

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


  createItem() {
    this._AuctionService.newAuction(this.vm);
    this.createForm = false;
    this.vm = {};
  }
}
