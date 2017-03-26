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

//        var startDates = [];
//        var startDate = new Date(); //assuming today for simplicity
//
//        for (var day = -2; day <=2; day++) {
//            var date = new Date(
//                startDate.getFullYear(),
//                startDate.getMonth(),
//                startDate.getDate() + day);
//                startDates.push(date);
//        }
//
//        Observable
//            .fromArray(startDates)
//            .map(date => {
//                console.log("Getting deals for date: " + date)
//                return [1, 2, 3];
//            })
//
//            .subscribe(x => console.log(x));

//        var observable = Observable.interval(15000);
//        observable.flatMap(x => {
//            console.log("calling server:");
//            return Observable.of([1, 2, 3]);
//        })
//        .subscribe(x => console.log(x));

//        var userStream = Observable.of({
//            userId:     1,
//            username:   'mosh'
//        }).delay(2000);
//
//        var tweetsStream = Observable.of([1, 2, 3]).delay(1500);
//
//        Observable
//            .forkJoin(userStream, tweetsStream)
//            .map(joined => 
//                 new Object({user: joined[0], tweets: joined[1]})
//                )
//            .subscribe(result => console.log(result));
           
//            var observable = Observable.throw(
//            new Error("Something went wrong.")
//        );
//
//        observable.subscribe(
//            x => console.log(x),
//            error => console.error(error)
//        );

//        var counter = 0;
//
//        var gregObservable = Observable.interval(3000);
//        gregObservable.subscribe(
//            x => console.log(x),
//            console.log("wth"));
//
//
//        var ajaxCall = Observable.of('url')
//            .flatMap(() => {
//                if (++counter < 2)
//                    return Observable.throw(new Error("Request failed!"));
//                return Observable.of([1, 2, 3]);
//            })
//
//        ajaxCall.retry().subscribe(
//            x => console.log(x),
//            error => console.error(error)
//        );

//        var remoteDataStream = Observable.throw(new Error("something went wrang!"));

//        var remoteDataStream = Observable.of([4, 5, 6]);
//
//        remoteDataStream
//            .catch(err => {
//                var localDataStream = Observable.of([1, 2, 3]);
//                return localDataStream
//            })
//            .subscribe(x => console.log(x));

        var remoteDataStream = Observable.of([1, 2, 3]).delay(10000);

        remoteDataStream
            .timeout(5000)
            .subscribe(
                x => console.log(x)
                error => console.log(error)
            );

    }
}
