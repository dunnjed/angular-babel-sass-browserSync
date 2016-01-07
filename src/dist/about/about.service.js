"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = require("angular");

var _angular2 = _interopRequireDefault(_angular);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _gsap = require("gsap");

var _gsap2 = _interopRequireDefault(_gsap);

var _co = require("co");

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var aboutServiceModule = _angular2.default.module("about.service", []);

var AboutService = (function () {
    function AboutService($q, $timeout) {
        _classCallCheck(this, AboutService);

        this.resolveFunc = function (data) {
            return data;
        };

        this.promise1 = new Promise(function (resolveFunc, reject) {

            $timeout(function () {
                resolveFunc("Hello");
            }, 3000);
        });

        this.promise2 = new Promise(function (resolve, reject) {
            resolve("World");
        });

        this.getPromises();
    }

    _createClass(AboutService, [{
        key: "getPromises",
        value: function getPromises() {

            var prom1 = this.promise1;
            var prom2 = this.promise2;

            return (0, _co2.default)(regeneratorRuntime.mark(function getPromises() {
                var val1, val2;
                return regeneratorRuntime.wrap(function getPromises$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return prom1;

                            case 2:
                                val1 = _context.sent;
                                _context.next = 5;
                                return prom2;

                            case 5:
                                val2 = _context.sent;

                                console.log(val1 + " " + val2);

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, getPromises, this);
            }));
        }
    }]);

    return AboutService;
})();

AboutService.$inject = ['$q', '$timeout'];
aboutServiceModule.service("AboutService", AboutService);

exports.default = "about.service";
//# sourceMappingURL=../src/dist/about/about.service.js.map
