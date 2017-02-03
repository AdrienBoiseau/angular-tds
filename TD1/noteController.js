var NoteApp = angular.module('NoteApp',['ngCookies']);
NoteApp.controller('NoteController',['$cookies', function($cookies){
    this.messageNote=$cookies.get('message');
    this.info = "";
    this.status="";
    this.save = function(){
        if (this.messageNote != ''){
            this.info = "Note sauvegardée";
            $cookies.put('message', this.messageNote);
        }
    };
    this.reset = function(){
        this.messageNote="";
        this.info="";
    };
    this.count = function(){
        var nb= 100 - this.messageNote.length;
        if(nb<50 && nb>=20)
            this.status="alert-warning";
        else if(nb<20)
            this.status="alert-danger";
        else
            this.status="alert-info";

        return nb;

    };
}]);