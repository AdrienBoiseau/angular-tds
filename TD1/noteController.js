angular.module("FirstApp").controller("MainController",function(){
    var self=this;
    this.message="Hello";
    this.getMsg=function() {
        return self.message;
    };
});

