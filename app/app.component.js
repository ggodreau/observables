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
                    var startDates = [];
                    var startDate = new Date(); //assuming today for simplicity
                    for (var day = -2; day <= 2; day++) {
                        var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
                        startDates.push(date);
                    }
                    Rx_1.Observable
                        .fromArray(startDates)
                        .map(function (date) {
                        console.log("Getting deals for date: " + date);
                        return [1, 2, 3];
                    })
                        .subscribe(function (x) { return console.log(x); });
                    var observable = Rx_1.Observable.interval(15000);
                    observable.flatMap(function (x) {
                        console.log("calling server:");
                        return Rx_1.Observable.of([1, 2, 3]);
                    })
                        .subscribe(function (x) { return console.log(x); });
                    //        observable.subscribe(x => console.log(x));
                    //        console.log("observable = ", observable);
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