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
    var NavBarComponent;
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
            NavBarComponent = (function () {
                function NavBarComponent(_AuctionService) {
                    var _this = this;
                    this._AuctionService = _AuctionService;
                    this.createForm = false;
                    this.vm = {};
                    this.auctionsRef = this._AuctionService.auctionsRef;
                    this.auctionsRef.onAuth(function (user) {
                        if (user) {
                            _this.authData = user;
                            _this.isLoggedIn = true;
                        }
                    });
                }
                NavBarComponent.prototype.authWithTwitter = function () {
                    this.auctionsRef.authWithOAuthPopup("twitter", function (error) {
                        if (error) {
                            console.log(error);
                        }
                    });
                };
                NavBarComponent.prototype.createItem = function () {
                    this._AuctionService.newAuction(this.vm);
                    this.createForm = false;
                    this.vm = {};
                };
                NavBarComponent = __decorate([
                    core_1.Component({
                        selector: 'nav-bar',
                        template: "<nav class=\"navbar\">\n                <p class=\"navbar-item is-centered\">\n                  <a class=\"link is-info\" href=\"#\">Home</a>\n                </p>\n                <p class=\"navbar-item is-centered\">\n                <img src=\"/images/logo.png\" alt=\"\" style=\"height: 33px;\">\n                </p>\n                <p class=\"navbar-item is-centered\">\n                  <a class=\"link is-info\" [hidden]=\"!isLoggedIn\" (click)=\"createForm=true\">New Item</a>\n                  <a class=\"link is-info\" [hidden]=\"isLoggedIn\" (click)=\"authWithTwitter()\">Sign in with Twitter</a>\n                </p>\n              </nav>\n\n              <div class=\"container\" [hidden]=\"!createForm\">\n                <div class=\"column is-4\">\n                <form  #f=\"ngForm\" (ngSubmit)=\"createItem()\">\n                  <p class=\"control\">\n                    <input class=\"input\" type=\"text\" placeholder=\"Item Name\" [(ngModel)]=\"vm.name\" required>\n                  </p>\n                  <p class=\"control\">\n                    <input class=\"input\" type=\"string\" placeholder=\"Image Url\" [(ngModel)]=\"vm.imageUrl\">\n                  </p>\n                  <p class=\"control\">\n                    <input class=\"input\" type=\"number\" placeholder=\"Item Price\" [(ngModel)]=\"vm.price\" required>\n                  </p>\n                  <p class=\"control\">\n                    <textarea class=\"textarea\" placeholder=\"Description\" [(ngModel)]=\"vm.description\" required></textarea>\n                  </p>\n                  <p class=\"control\">\n                    <button class=\"button is-primary\" [disabled]=\"!f.valid\">Submit</button>\n                    <button class=\"button\" (click)=\"createForm=false\">Cancel</button>\n                  </p>\n                  </form>\n                </div>\n              </div>\n              ",
                        providers: [auction_service_1.AuctionService],
                        pipes: [firebasepipe_1.FirebaseEventPipe]
                    }), 
                    __metadata('design:paramtypes', [auction_service_1.AuctionService])
                ], NavBarComponent);
                return NavBarComponent;
            })();
            exports_1("NavBarComponent", NavBarComponent);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map