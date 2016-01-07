"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AboutController = undefined;

var _angular = require("angular");

var _angular2 = _interopRequireDefault(_angular);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _gsap = require("gsap");

var _gsap2 = _interopRequireDefault(_gsap);

var _about = require("./about.service");

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var aboutComponentModule = _angular2.default.module("about.component", [_about2.default]);

var AboutController = function AboutController($q, AboutService) {
    _classCallCheck(this, AboutController);
};

AboutController.$inject = ['$q', 'AboutService'];
aboutComponentModule.controller("AboutController", AboutController);

aboutComponentModule.directive("firstDirective", function (AboutService) {
    return {
        restrict: "AE",
        scope: true,
        bindToController: {},
        link: function link(scope, element, attrs, ctrl) {},
        template: '<div>First directive</div>',
        controller: function controller() {},
        controllerAs: "firstDirectiveCtrl"
    };
});

aboutComponentModule.directive("secondDirective", function (AboutService) {
    return {
        restrict: "AE",
        scope: true,
        bindToController: {},
        link: function link(scope, element, attrs, ctrl) {},
        template: '<div>Second directive</div>',
        controller: function controller() {},
        controllerAs: "secondDirectiveCtrl"
    };
});

var aboutCtrl = "AboutController";
exports.AboutController = aboutCtrl;
exports.default = "about.component";
//# sourceMappingURL=../src/dist/about/about.component.js.map
