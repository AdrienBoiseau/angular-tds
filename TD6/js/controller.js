angular.module("sampleApp").controller("RouteController",["$routeParams", function($routeParams){
    this.content1="Contenu du template de route1";
    this.params=$routeParams;
}]);