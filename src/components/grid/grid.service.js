import angular from "angular";
import $ from "jquery";
import TweenMax from "gsap";
import co from "co";

let gridServiceModule = angular.module("grid.service", []);


class GridService {

    constructor() {
        this.text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo ac elit facilisis porttitor eu eget augue. Sed malesuada est orci, quis interdum lorem suscipit eu. Mauris molestie, velit sit amet feugiat malesuada, odio nibh pharetra nisl, sit amet varius erat magna ac magna. Aliquam vulputate libero in ex dapibus, at commodo lorem interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent rutrum iaculis efficitur. Quisque in sagittis odio. Proin ultricies, purus eu ultricies maximus, velit mi blandit velit, non blandit orci urna vel dui. Ut sollicitudin augue et enim dictum, quis bibendum dolor mattis. Ut sit amet placerat nibh, sed aliquam augue. Fusce congue iaculis venenatis. Pellentesque sagittis mauris quis orci faucibus sagittis.

Praesent mollis, quam nec lacinia commodo, tellus diam hendrerit enim, quis vulputate nulla ex quis est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut vestibulum purus id magna tempor malesuada. Praesent in consequat dolor. Suspendisse lacinia faucibus purus, vel commodo orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis vehicula justo ante, vel efficitur dui malesuada at. Vestibulum ante justo, congue ac lobortis nec, consequat at erat. Praesent nec ultrices ipsum, ut bibendum libero. Maecenas nec tellus mi. Vestibulum bibendum quam elementum euismod bibendum. Quisque vel tellus ac diam faucibus euismod. Nunc a aliquam nisi, et auctor enim. Nunc in dolor ante. Aliquam vitae eleifend est. Nulla facilisi.
        `;
    }
}
GridService.$inject = [];
gridServiceModule.service("GridService", GridService);





export default "grid.service";