System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AuctionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AuctionService = (function () {
                function AuctionService() {
                    var _this = this;
                    this.firebaseUrl = "https://popping-heat-8485.firebaseio.com/auctions";
                    this.auctionsRef = new Firebase(this.firebaseUrl);
                    this.auctionsRef.onAuth(function (user) {
                        if (user) {
                            _this.authData = user;
                            _this.isLoggedIn = true;
                        }
                    });
                }
                AuctionService.prototype.getAuctions = function () {
                    var _this = this;
                    this.auctionsRef.on('child_changed', function (snapshot) {
                        _this.auctionData = snapshot.val();
                    });
                    return this.auctionData;
                };
                AuctionService.prototype.newAuction = function (auction) {
                    auction['startPrice'] = auction.price;
                    auction['owner'] = this.authData.twitter.username;
                    auction['open'] = true;
                    auction['bids'] = [{ 'bid': auction.price, 'user': auction.owner }];
                    var newPostRef = this.auctionsRef.push(auction);
                    auction['id'] = newPostRef.key();
                    this.auctionsRef.child(newPostRef.key()).set(auction);
                };
                AuctionService.prototype.addBid = function (data, id) {
                    var auctionData = this.getAuction(id);
                    if (data.bid > auctionData.bids[0].bid) {
                        auctionData.bids.unshift(data);
                        auctionData.price = data.bid;
                        this.auctionsRef.child(id).set(auctionData);
                    }
                };
                AuctionService.prototype.getAuction = function (id) {
                    var _this = this;
                    this.auctionsRef.child(id).on('value', function (snapshot) {
                        _this.activeAuctionData = snapshot.val();
                    });
                };
                AuctionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AuctionService);
                return AuctionService;
            })();
            exports_1("AuctionService", AuctionService);
        }
    }
});
//# sourceMappingURL=auction.service.js.map