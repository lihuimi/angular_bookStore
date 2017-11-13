/**
 * Created by Administrator on 2017/11/10.
 */
angular.module('bookStoreApp', ['ui.router', 'ngGrid', 'bookListModule', 'bookDetailModule', 'addBookModule'])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/index')
    $stateProvider
      .state('index', {
        url: '/index',
        templateUrl: 'templates/login.html',
        // controller: 'bookStoreLoginCtrl'
      })
      .state('booklist', {
        url: '/{bookType:[0-9]{1,4}}',
        views: {
          '': {
            templateUrl: 'templates/booklist.html'
          },
          'booktype@booklist': {
            templateUrl: 'templates/booktype.html'
          },
          'bookgrid@booklist': {
            templateUrl: 'templates/bookgrid.html'
          }
        }
      })
      .state('bookdetail', {
        url: '/bookdetail/:bookId',
        templateUrl: 'templates/bookdetail.html'
      })
      .state('addbook', {
        url: '/addbook',
        templateUrl: 'templates/addbook.html'
      })
  }])
