import angular from "angular";
import $ from "jquery";
import TweenMax from "gsap";
import aboutServiceModule from "./about.service";

let aboutComponentModule = angular.module("about.component", [
    aboutServiceModule
]);


class AboutController {
    constructor($q, AboutService) {
    }
}
AboutController.$inject = ['$q', 'AboutService'];
aboutComponentModule.controller("AboutController", AboutController);


aboutComponentModule.directive("firstDirective", function (AboutService) {
    return {
        restrict: "AE",
        scope: true,
        bindToController: {

        },
        link: function (scope, element, attrs, ctrl) {
     
           
        },
        template: '<div>First directive</div>',
        controller: function () {
            
        },
        controllerAs: "firstDirectiveCtrl"
    }
});

aboutComponentModule.directive("secondDirective", function (AboutService) {
    return {
        restrict: "AE",
        scope: true,
        bindToController: {

        },
        link: function (scope, element, attrs, ctrl) {
            
        },
        template: '<div>Second directive</div>',
        controller: function () {
            
        },
        controllerAs: "secondDirectiveCtrl"
    }
});

let aboutCtrl = "AboutController";
export { aboutCtrl as AboutController };
export default "about.component";