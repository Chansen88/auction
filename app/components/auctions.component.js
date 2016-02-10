System.register(['angular2/core', '../services/auction.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, auction_service_1;
    var AuctionsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auction_service_1_1) {
                auction_service_1 = auction_service_1_1;
            }],
        execute: function() {
            AuctionsComponent = (function () {
                function AuctionsComponent(_auctionService) {
                    this._auctionService = _auctionService;
                }
                AuctionsComponent.prototype.getAuctions = function () {
                    var _this = this;
                    this._auctionService.getAuctions().then(function (auctions) { return _this.auctions = auctions; });
                };
                AuctionsComponent.prototype.ngOnInit = function () {
                    this.getAuctions();
                };
                AuctionsComponent = __decorate([
                    core_1.Component({
                        selector: 'auctions',
                        template: "<table class=\"table\">\n      <thead>\n        <tr>\n          <th>Item</th>\n          <th>Price</th>\n          <th>Open</th>\n        </tr>\n      </thead>\n      <tfoot>\n        <tr>\n          <th>Item</th>\n          <th>Price</th>\n          <th>Open</th>\n        </tr>\n      </tfoot>\n      <tbody>\n        <tr *ngFor=\"#auction of auctions\">\n          <td>{{auction.name}}</td>\n          <td>{{auction.price}}</td>\n          <td>{{auction.open}}</td>\n        </tr>\n      </tbody>\n    </table>",
                        providers: [auction_service_1.AuctionService]
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