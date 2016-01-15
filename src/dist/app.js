"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _data = require("./shared/data");

var _angular = require("angular");

var _angular2 = _interopRequireDefault(_angular);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _gsap = require("gsap");

var _gsap2 = _interopRequireDefault(_gsap);

var _uiRouter = require("ui-router");

var _uiRouter2 = _interopRequireDefault(_uiRouter);

var _about = require("./about/about.component");

var _about2 = _interopRequireDefault(_about);

var _grid = require("./grid/grid.component");

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var app = exports.app = _angular2.default.module('app', [_uiRouter2.default, _about2.default, _grid2.default]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('index', {
        url: '/'
    }).state('home', {
        url: '/home',
        templateUrl: 'src/components/home/home.html'
    }).state('about', {
        url: '/about',
        templateUrl: 'src/components/about/about.html',
        controller: _about.AboutController + " as aboutCtrl"
    }).state('grid', {
        url: '/grid',
        templateUrl: 'src/components/grid/grid.html',
        controller: _grid.GridController + " as gridCtrl"
    });

    $urlRouterProvider.otherwise('/');
});

var mainTemplate = "\n<div> This is the main div</div>\nThis is my template.\n\n";

var MainController = function MainController($q) {
    _classCallCheck(this, MainController);

    this.name = "Hello world from constructor!";

    this.deferredName = $q.defer();
    this.promiseName = this.deferredName.promise;

    this.deferredName.resolve(this.name);
};

MainController.$inject = ['$q'];
app.controller("MainController", MainController);

app.directive("main", function () {
    return {
        restrict: "AE",
        scope: true,
        bindToController: {
            main: "@"
        },
        link: function link(scope, element, attrs, ctrl) {

            (0, _jquery2.default)(element).hover(function () {
                _gsap2.default.to(element, 2, { "border-color": "green" });
            }, function () {
                _gsap2.default.to(element, 2, { "border-color": "orange" });
            });

            ctrl.promiseName.then(function (name) {

                ctrl.main = ctrl.main || "nowhere!";

                (0, _jquery2.default)(element).html(name + "<br>Click to go to " + ctrl.main);
            });
        },
        template: mainTemplate,
        controller: "MainController as mainCtrl"
    };
});

_angular2.default.element(document).ready(function () {
    _angular2.default.bootstrap(document, ['app']);
});
//# sourceMappingURL=src/dist/app.js.map
