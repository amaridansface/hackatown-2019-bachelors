import { Product } from "./product";
import { Point } from "./point";

export class Store {
    name: string;
    category: string; // À revoir!
    list: Product[];
    position: Point;
  }