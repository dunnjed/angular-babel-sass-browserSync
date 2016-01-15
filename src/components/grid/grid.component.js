import angular from "angular";
import $ from "jquery";
import TweenMax from "gsap";
import gridServiceModule from "./grid.service";

let gridComponentModule = angular.module("grid.component", [
    gridServiceModule
]);


class GridController {
    constructor($q, GridService) {
        
        console.log(GridService);
        this.text = GridService.text;
    }
}
GridController.$inject = ['$q', 'GridService'];
gridComponentModule.controller("GridController", GridController);




let gridCtrl = "GridController";
export { gridCtrl as GridController };
export default "grid.component";