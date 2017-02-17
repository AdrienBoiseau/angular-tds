/**
 * Created by Adrien on 17/02/2017
 */
var gestion = angular.module("gestionContact", []);
gestion.controller("gestionController", function($scope){
    $scope.tabContacts=
        [
            {
                "name" : "Boiseau",
                "surname" : "Adrien",
                "mail" : "boiseauadrien@gmail.com"
            },
            {
                "name" : "Savary",
                "surname" : "Lucas",
                "mail" : "lucas.savary@hotmail.fr"
            },
            {
                "name" : "Fleury",
                "surname" : "Yoann",
                "mail" : "yoyo.fleury@hotmail.fr"
            },
            {
                "name" : "Leplanquois",
                "surname" : "Maxime",
                "mail" : "maxime.leplanquois@gmail.com"
            }
        ];

    $scope.removeContact = function (item) {
        var index = $scope.tabContacts.indexOf(item);
        $scope.tabContacts.splice(index, 1);
        $scope.removed = 'Contact supprimé.';
    };
    $scope.resetTableau = function() {
        location.reload();
    };

});