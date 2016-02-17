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
    var AuctionComponent;
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
            AuctionComponent = (function () {
                function AuctionComponent(_AuctionService) {
                    this._AuctionService = _AuctionService;
                    this.auction = Object;
                    this.firebaseUrl = this._AuctionService.firebaseUrl;
                    this.auctionsRef = this._AuctionService.auctionsRef;
                    this.auction = this._AuctionService.activeAuctionData;
                }
                AuctionComponent.prototype.testFunction = function (data) {
                    console.log(data);
                };
                AuctionComponent = __decorate([
                    core_1.Component({
                        selector: 'auction',
                        template: "<h1>sdfsdsdsdf</h1>\n              <br>\n              <div *ngIf=\"auction\">\n              <h1>{{auction}}</h1>\n              <ul>\n                <li>\n                  {{auction.description}}\n                </li>\n                <li>\n                  <h4>\n                    {{auction.price}}\n                  </h4>\n                </li>\n                <li>\n                hello\n                </li>\n                <li>\n                  <form>\n                      <label for=\"amount\">new Bid</label>\n                      <input id=\"amount\" type=\"text\" class=\"form-control\" value='{{auction.price + 10}}' required>\n                    <button type=\"submit\" class=\"btn btn-default\">Place Bid</button>\n                  </form>\n                </li>\n              </ul>\n              </div>\n    ",
                        providers: [auction_service_1.AuctionService],
                        pipes: [firebasepipe_1.FirebaseEventPipe]
                    }), 
                    __metadata('design:paramtypes', [auction_service_1.AuctionService])
                ], AuctionComponent);
                return AuctionComponent;
            })();
            exports_1("AuctionComponent", AuctionComponent);
        }
    }
});
//# sourceMappingURL=auction.component.js.map