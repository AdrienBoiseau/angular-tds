##**TD d'AngularJS**

#TD1
Le but du TD1 était de créer une application qui permettait de saisir une note, afficher le nombre de caractères restants,
enregistrer, effacer le contenu, afficher les messages d'info, gérer les changements de classe CSS sur l'affichage d'info.
Dans ce TD j'ai appris la création d'un module et d'un controlleur, utiliser quelques directives comme ng-app, ng-change,
ng-controller, ng-click, ng-model, ng-bind et ng-class. J'ai aussi appris à utiliser un service externe, ici ($cookies).
Ce service m'a permis de sauvegarder le message en un cookie pour le navigateur. Le controller était assez basique,
il comprenait trois fonctions, une de sauvegarde, une pour effacer et une pour compter le nombre de caractères.

#TD2
Le TD2 était la création d'une application de gestion de service. Cette application permettait trois choses,
sélectionner/désélectionner des services, Calculer le montant et afficher le nombre de services sélectionnés.
Dans cette application j'ai appris comment mettre en oeuvre le Data-binding et j'ai consolider mes compétences sur
la création de module/controller angular et sur l'utilisation de directives angular. Notament : ng-controller,
ng-click, ng-repeat, ng-class, ng-pluralize et {{contenus}}. Le controller était déjà plus complet il comprenait des services
ainsi que cinq fonctions. J'ai pu apprendre à utiliser toggleActive() qui permet de changer le status d'un service.

#TD3
Le TD3 consister à la mise en place d'une application de choix multiples, le but était de lister les produits
et de pouvoir les ajouter tous ou un seul/les retirer, valider les choix et revenirs au choix des produits.
Ce TD3 a de nouveau consolider mes compétences sur la création de module/controller et l'utilisation de directive angular.
J'ai pu utiliser ces directives pour pouvoir créer l'application ng-repeat, ng-options, ng-pluralize, ng-click, ng-dblclick
et ng-src. J'ai rencontrer des difficultés sur la mise en place du contenu des produits ainsi que de pouvoir les passer
d'un côté à un autre. Notament sur l'utilisation de addToIncluded, addToIncluded, RemoveFromIncluded et RemoveAllFromIncluded.
Il a fallu utiliser aussi le service "$http", function(http) pour ce faire il a fallu apprendre comment celui-ci fonctionnait.

#TD4
Le TD4 avait pour but de mettre en place une application de gestion de contact, cette application permettait
d'obtenir la liste des contacts et la filtrer, d'ajouter un contact dans la liste, de modifier un contact existant
et de supprimer un contact. Cette application m'a permis d'apprendre à bien utiliser la direction ng-repeat,
a utiliser la validation des formulaires et a créer des directives simples. Le controller était très complet et utiliser
différentes fonction comme toUpdate, toAdd, Add, update, delete. J'ai notament pu apprendre à utiliser ng-pluralize.

#TD5
Le TD5 consister à la création d'un convertisseur de devise, le but du TD était de pouvoir saisir un montant dans une devise source,
sélectionner la devise cible, calculer la conversion à partir des taux courants et effectuer l'opération inverse. Ce TD m'a permis
d'apprendre à utiliser des services Angular existants et mettre en oeuvre l'injection de dépendance. J'ai aussi appris a
utiliser une API externe en JSON pour pouvoir récuperer les taux de change. J'ai aussi pu utiliser la directive ng-keypress.

#TD6
Le TD6 consister à apprendre la mise en place du routage et de créer un squelette de projet multi-modules. Dans ce TD
j'ai appris à utiliser les patrons de conception notament factory ainsi que d'utiliser le service AuthService et DAOService
afin de mettre en place le routage. J'ai aussi pu apprendre à mettre en place le routage en utilisant Browserify ainsi
que NodeJS. Les difficultés de ce TD était surtout de comprend la structure de l'application en utilisant le patron
de conception factory et d'ensuite mettre en place le routage. Il a fallu comprendre comment chaque fichier
interagissez entre eux. 
