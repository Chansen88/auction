export interface Auction {
  id: number;
  description: string;
  bids: Array<number>;
  name: string;
  price: number;
  open: boolean;
}
