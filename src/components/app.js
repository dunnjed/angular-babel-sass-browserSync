import { greeting } from "./shared/data";
import angular from "angular";
import $ from "jquery";
import TweenMax from "gsap";
import uiRouter from "ui-router";
import aboutComponentModule, { AboutController } from "./about/about.component";
import gridComponentModule, { GridController } from "./grid/grid.component";


export let app = angular.module('app', [
    uiRouter,
    aboutComponentModule,
    gridComponentModule
]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('index', {
            url: '/'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'src/components/home/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'src/components/about/about.html',
            controller: `${AboutController} as aboutCtrl`    
        })
        .state('grid', {
            url: '/grid',
            templateUrl: 'src/components/grid/grid.html',
            controller: `${GridController} as gridCtrl`    
        });

    $urlRouterProvider.otherwise('/');
});


let mainTemplate =
`
<div> This is the main div</div>
This is my template.

`;

class MainController {
    constructor($q) {
        this.name = "Hello world from constructor!";

        this.deferredName = $q.defer();
        this.promiseName = this.deferredName.promise;

        this.deferredName.resolve(this.name);
        
        
    }
}
MainController.$inject = ['$q'];
app.controller("MainController", MainController);



app.directive("main", function () {
    return {
        restrict: "AE",
        scope: true,
        bindToController: {
            main: "@"
        },
        link: function (scope, element, attrs, ctrl) {
            
            $(element).hover(function () {
                TweenMax.to(element, 2, {"border-color": "green"});
            }, function () {
                TweenMax.to(element, 2, {"border-color": "orange"});
            });
            
            ctrl.promiseName.then(function (name) {
                
                ctrl.main = ctrl.main || "nowhere!";
                
                $(element).html(`${name}<br>Click to go to ${ctrl.main}`);
            });
        },
        template: mainTemplate,
        controller: "MainController as mainCtrl"
    }
});


angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});

