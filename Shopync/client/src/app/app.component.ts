import { Component, OnInit } from "@angular/core";
import { Client } from "./client";
import Database from '../assets/database.json';

@Component({
    styleUrls: ["./app.component.css"],
    templateUrl: "./app.component.html",
    selector: "app-root",
})

export class AppComponent implements OnInit {
    public message: string;
    public readonly title: string = "LOG2990";
    public client :Client = {location:{x : 41.5, y : 26.8}, 
    listGrocery :[{"name": "Milk",
    "price": "99999999999",
    "category": "Food" },
    {"name": "Chips",
    "price": "99999999999",
    "category": "Food" }], productsLocations: [] };
    public constructor() {
     }

     public getLowestPrice() {
       console.log(this);
       debugger;
       for(let k = 0; k < this.client.listGrocery.length; k++)
       {
        for(let i = 0; i < Database.Stores.length; i++)
        {
          for(let j = 0; j < Database.Stores[i].products.length; j++)
          {
            if(this.client.listGrocery[k].name === Database.Stores[i].products[j].name)
              {
                if(this.client.listGrocery[k].price > Database.Stores[i].products[j].price)
                {
                  this.client.listGrocery[k].price = Database.Stores[i].products[j].price.toString();
                  this.client.productsLocations[k] = (Database.Stores[i].storeName);
                }
              }
          }
        }
        console.log(this.client.productsLocations[k]);
     }
    }
    public ngOnInit(): void {
      this.getLowestPrice();
     }
}