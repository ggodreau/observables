/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import { ControlGroup, FormBuilder } from 'angular2/common';
import { Observable } from 'rxjs/Rx';
//import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
        <form [ngFormModel]="form">
            <input type="text" ngControl="search">
        </form>
    `
})
export class AppComponent {
    
    form: controlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            search: []
        });

        var search = this.form.find('search');
        search.valueChanges
//            .map(str    =>  (<string>str).replace(' ',  '-'))
//            .debounceTime(400)
            .subscribe(x => console.log(x));

        var startDates = [];
        var startDate = new Date(); //assuming today for simplicity

        for (var day = -2; day <=2; day++) {
            var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day);
                startDates.push(date);
        }

        Observable
            .fromArray(startDates)
            .map(date => {
                console.log("Getting deals for date: " + date)
                return [1, 2, 3];
            })

            .subscribe(x => console.log(x));

    }
}
