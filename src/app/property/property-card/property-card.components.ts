import { Component } from "@angular/core";

@Component({
selector:'app-property-card',
templateUrl:"property-card.component.html",
styleUrl:"property-card.components.css"
})


export class PropertyCardComponant{
    Property:any={
        "ID":1,
        "Name":"Biral hostal",
        "Type":"House",
        "Price":1200
    }

}