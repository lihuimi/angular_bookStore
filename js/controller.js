/**
 * Created by Administrator on 2017/11/10.
 */
var loginModule = angular.module('loginModule', []);
loginModule.controller('loginCtrl', ['$scope', '$state', function ($scope, $state) {
  $scope.userInfo = {};
  $scope.submitForm = function () {
    $state.go('booklist', {bookType:0});
  }
}])

var bookListModule = angular.module('bookListModule', []);
bookListModule.controller('bookListCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

  // 从后台获取数据
  $scope.myData = [{
    "bookId":"1",
    "index": "1",
    "name": "用AngularJS开发下一代WEB应用",
    "author": "大漠穷秋",
    "pubTime": "2014-01-01",
    "price":"35"
  }, {
    "bookId":"2",
    "index": "2",
    "name": "Ext江湖",
    "author": "大漠穷秋",
    "pubTime": "2014-01-01",
    "price":"35"
  }, {
    "bookId":"3",
    "index": "3",
    "name": "ActionScript3.0游戏设计基础（第二版）",
    "author": "大漠穷秋",
    "pubTime": "2014-01-01",
    "price":"35"
  }, {
    "bookId":"4",
    "index": "4",
    "name": "用AngularJS开发下一代WEB应用",
    "author": "大漠穷秋",
    "pubTime": "2014-01-01",
    "price":"35"
  }, {
    "bookId":"5",
    "index": "5",
    "name": "Ext江湖",
    "author": "大漠穷秋",
    "pubTime": "2014-01-01",
    "price":"35"
  }]
  // 设置每列字段
  $scope.columnTitle = [{
    field: 'index',
    displayName: '序号',
    width: 60,
    pinnable: false,
    sortable: false
  }, {
    field: 'name',
    displayName: '书名',
    enableCellEdit: true
  }, {
    field: 'author',
    displayName: '作者',
    enableCellEdit: true,
    width: 220
  }, {
    field: 'pubTime',
    displayName: '出版日期',
    enableCellEdit: true,
    width: 120
  }, {
    field: 'price',
    displayName: '定价',
    enableCellEdit: true,
    width: 120,
    cellFilter: 'currency:"￥"'
  }, {
    field: 'bookId',
    displayName: '操作',
    enableCellEdit: false,
    sortable: false,
    pinnable: false,
    cellTemplate: '<div><a ui-sref="bookdetail({bookId:row.getProperty(col.field)})" id="{{row.getProperty(col.field)}}">详情</a></div>'
  }]

  $scope.filterOptions = {
    filterText: "",
    useExternalFilter: true
  };
  $scope.totalServerItems = 0;
  $scope.pagingOptions = {
    pageSizes: [5, 10, 20],
    pageSize: 5,
    currentPage: 1
  };


  $scope.gridOptions = {
    data: 'myData',
    enablePaging: true,
    showFooter: true,
    totalServerItems: 'totalServerItems',
    pagingOptions: $scope.pagingOptions,
    filterOptions: $scope.filterOptions,
    columnDefs: $scope.columnTitle
  }
  }])


var bookDetailModule = angular.module('bookDetailModule', []);
bookDetailModule.controller('bookDetailCtrl', ['$rootScope','$scope', function ($rootScope, $scope) {
  // $rootScope.books = [];
}])

var addBookModule = angular.module('addBookModule', []);
addBookModule.controller('addBookCtrl', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
  $scope.addBook = function () {
    if (!$scope.book) {
      alert('请输入信息');
      return;
    }
    localStorage.setItem('book', $scope.book);
    $state.go('booklist')
  }
  $scope.clearForm = function () {
    $scope.book = null;
  }
}])