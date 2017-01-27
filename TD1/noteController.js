angular.module("NoteApp").controller("NoteController",function(){
    this.messageNote="";

    this.count=function() {
        var compteur = 100 - this.messageNote.length;
    };
});

