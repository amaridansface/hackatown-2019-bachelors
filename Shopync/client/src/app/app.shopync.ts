import { Message } from "../../../common/communication/message";
import { Component, OnInit } from "@angular/core";
@Component({
    styleUrls: ["./app.component.css"],
    templateUrl: "./app.component.html",
    selector: "app-root",
})

export class AppShopync implements OnInit {
    public message: string;
    public readonly title: string = "LOG2990";


    public constructor() { }
    public ngOnInit(): void { }
}