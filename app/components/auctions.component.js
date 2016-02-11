System.register(['angular2/core', '../services/auction.service', './firebasepipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, auction_service_1, firebasepipe_1;
    var AuctionsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auction_service_1_1) {
                auction_service_1 = auction_service_1_1;
            },
            function (firebasepipe_1_1) {
                firebasepipe_1 = firebasepipe_1_1;
            }],
        execute: function() {
            AuctionsComponent = (function () {
                function AuctionsComponent(_AuctionService) {
                    var _this = this;
                    this._AuctionService = _AuctionService;
                    this.firebaseUrl = this._AuctionService.firebaseUrl;
                    this.auctionsRef = this._AuctionService.auctionsRef;
                    this.auctionsRef.onAuth(function (user) {
                        if (user) {
                            _this.authData = user;
                            _this.isLoggedIn = true;
                        }
                    });
                }
                AuctionsComponent.prototype.authWithTwitter = function () {
                    this.auctionsRef.authWithOAuthPopup("twitter", function (error) {
                        if (error) {
                            console.log(error);
                        }
                    });
                };
                AuctionsComponent = __decorate([
                    core_1.Component({
                        selector: 'auctions',
                        template: "<button [hidden]=\"isLoggedIn\" class=\"twitter\" (click)=\"authWithTwitter()\">Sign in with Twitter</button>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Item</th>\n          <th>Price</th>\n          <th>Open</th>\n        </tr>\n      </thead>\n      <tfoot>\n        <tr>\n          <th>Item</th>\n          <th>Price</th>\n          <th>Open</th>\n        </tr>\n      </tfoot>\n      <tbody>\n        <tr *ngFor=\"#auction of firebaseUrl | firebaseevent:'value'\">\n          <td>{{auction.name}}</td>\n          <td>{{auction.price}}</td>\n          <td>{{auction.open}}</td>\n        </tr>\n      </tbody>\n    </table>",
                        providers: [auction_service_1.AuctionService],
                        pipes: [firebasepipe_1.FirebaseEventPipe]
                    }), 
                    __metadata('design:paramtypes', [auction_service_1.AuctionService])
                ], AuctionsComponent);
                return AuctionsComponent;
            })();
            exports_1("AuctionsComponent", AuctionsComponent);
        }
    }
});
//# sourceMappingURL=auctions.component.js.map