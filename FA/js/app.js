var app = angular.module('myApp', ['ui.router']);

// app.controller('TableController', function($scope, $http) {
//     $http.get("messages.json").then(function(response) {
//         $scope.myData = response.data.users;
//     });
// });

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    //$locationProvider.html5Mode({enabled:false});
    $urlRouterProvider.otherwise("/main")

    // States
    $stateProvider
      .state('main', {
        url: "/main",
        views: {
          'view': {
            templateUrl: "skill.html"
          }
        }
      })
      .state('main.freshers', {
        url: "/main/freshers",
        views: {
          'view': {
            templateUrl: "skill.html",
          },
          'freshers': {
            templateUrl: "freshers.html"
          }
        }
      })
      .state('contents', {
        url: "/freshers/content-skill",
        views: {
          'view': {
            templateUrl: "content.html"
          }
        }
      })
      .state('Add_Skill', {
        url: "/Add_Skill",
        views: {
          'view': {
            templateUrl: "addskill.html"
          }
        }
      })
      // .state('list', {
      //   url: "/main/danhsachlichhen/{ListId}",
      //   views: {
      //     'view': {
      //       templateUrl: "schedule.html",
      //       controller: "LayTTbenhnhanCtrl"
      //     },
      //     'lists': {
      //       templateUrl: "schedule.list.html",
      //       controller: function($scope, $firebaseObject, $stateParams){
      //                   const ref = firebase.database().ref('LichHen');
      //                   ref.orderByChild("id").equalTo($stateParams.ListId).on("child_added", function(data){
      //                   $scope.tt = data.val();
      //                   });
      //       }
      //     }

      //   }
      // })
    //$urlRouterProvider.deferIntercept();
  }
  
]);

// app.run(['$urlRouter', '$timeout', '$state',
//   function ($urlRouter, $timeout, $state) {

//     $timeout(function () {

//       //$urlRouter.sync();
//       //$urlRouter.listen();

//       //$state.go("parent.child");
//     }, 1000)

//   }]);



// API
app.controller('getskillcontroller',function($scope,$http){  
  var successCallBack1 = function(response){
      $scope.demo1 = response.data;
      console.log($scope.demo1);
      
  };
      $http({
          method:'POST',
          url:'https://interproject.appspot.com/rest/getFormBySkillname',
          data:{id:'string', nameSkill:'Java'},
      }).then(successCallBack1)

});