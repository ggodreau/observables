/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/common', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            //import { Observable } from 'rxjs/Observable';
            AppComponent = (function () {
                function AppComponent(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    var search = this.form.find('search');
                    search.valueChanges
                        .subscribe(function (x) { return console.log(x); });
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
                    //        var remoteDataStream = Observable.of([1, 2, 3]).delay(10000);
                    //
                    //        remoteDataStream
                    //            .timeout(5000)
                    //            .subscribe(
                    //                x => console.log(x)
                    //                error => console.log(error)
                    //            );
                    //        var observable = Observable.throw(new Error("feck!"));
                    var observable = Rx_1.Observable.fromArray([1, 2, 3]);
                    observable.subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error)(); }, console.log("completed"));
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <input id=\"search\" type=\"text\" class=\"form-control\">\n        <form [ngFormModel]=\"form\">\n            <input type=\"text\" ngControl=\"search\">\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map