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
    var AuctionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auction_service_1_1) {
                auction_service_1 = auction_service_1_1;
            }],
        execute: function() {
            AuctionComponent = (function () {
                function AuctionComponent(_auctionService) {
                    this._auctionService = _auctionService;
                }
                AuctionComponent.prototype.getAuctions = function () {
                    var _this = this;
                    this._auctionService.getAuctions().then(function (auctions) { return _this.auctions = auctions; });
                };
                AuctionComponent.prototype.ngOnInit = function () {
                    this.getAuctions();
                };
                AuctionComponent = __decorate([
                    core_1.Component({
                        selector: 'new-auction',
                        template: "<div *ngFor=\"#auction of auctions\">\n                <input type=\"string\">{{auction.name}}/>\n                <input type=\"number\">{{auction.price}}/>\n              </div>",
                        providers: [auction_service_1.AuctionService]
                    }), 
                    __metadata('design:paramtypes', [auction_service_1.AuctionService])
                ], AuctionComponent);
                return AuctionComponent;
            })();
            exports_1("AuctionComponent", AuctionComponent);
        }
    }
});
//# sourceMappingURL=newAuction.component.js.map