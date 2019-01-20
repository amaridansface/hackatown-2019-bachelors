import { Product } from "./product";
import { Point } from "./point";

export class Client {
    public location: Point;
    public listGrocery: Product[] =[];
    public constructor() {

        this.location.x = 41.5;
        this.location.y = 26.8;
     }
     public productsLocations: string[] = [];
  }