/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import { ControlGroup, FormBuilder } from 'angular2/common';

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
            .subscribe(x => console.log(x));
    }
}
