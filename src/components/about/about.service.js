import angular from "angular";
import $ from "jquery";
import TweenMax from "gsap";
import co from "co";

let aboutServiceModule = angular.module("about.service", []);


class AboutService {

    constructor($q, $timeout) {
        
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

  
    getPromises() {
        
        let prom1 = this.promise1;
        let prom2 = this.promise2;
        
        return co(function* getPromises() {
            var val1 = yield prom1;
            var val2 = yield prom2;

            console.log(val1 + " " + val2);

        });


    }

}
AboutService.$inject = ['$q', '$timeout'];
aboutServiceModule.service("AboutService", AboutService);





export default "about.service";