import { Input, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @Input() path:String;
    @Input() name:String;
    @Input() country:String;
    @Input() location:String;
    @Input() rooms:String;
    @Input() area:String;
    @Input() price:String;


    constructor() { }

    ngOnInit() {
    }

}
