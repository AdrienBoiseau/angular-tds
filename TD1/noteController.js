angular.module("NoteApp").controller("NoteController",function(){
    var self=this;
    this.message="Hello";
    this.getMsg=function() {
        return self.message;
    };
});

