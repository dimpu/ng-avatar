angular.module('ngAvatar',['angular-md5'])
.controller('AppCtrl',['$scope','md5',function($scope,md5){
  var vm = this;
  this.email = '';

  $scope.$watch(function(){
    return vm.email
  },function(){
    vm.avatar = md5.createHash(vm.email || '');
  });

}]);
