import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'app-feature',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.scss']
})

export class FeatureComponent implements OnInit {
    @Input() imgpath: String;
    @Input() title: String;
    @Input() description:String;

    constructor() { }

    ngOnInit() {
    }

}
