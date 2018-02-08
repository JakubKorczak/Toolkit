"use strict";
angular.module('toolkit', ['ui.bootstrap', 'ngAnimate'])
  .controller('MainCtrl', MainCtrl)
  .factory('mainService', mainService);

function mainService(){
  return {
    data: function() {
      return [
          {
              "category": "aliqua",
              "link": [
                  {
                      "name": "adipisicing"
                  },
                  {
                      "name": "sit"
                  },
                  {
                      "name": "ad"
                  },
                  {
                      "name": "qui"
                  },
                  {
                      "name": "consectetur"
                  }
              ]
          },
          {
              "category": "voluptate",
              "link": [
                  {
                      "name": "adipisicing"
                  },
                  {
                      "name": "sunt"
                  },
                  {
                      "name": "do"
                  },
                  {
                      "name": "ut"
                  },
                  {
                      "name": "id"
                  },
                  {
                      "name": "non"
                  },
                  {
                      "name": "exercitation"
                  },
                  {
                      "name": "occaecat"
                  }
              ]
          },
          {
              "category": "nisi",
              "link": [
                  {
                      "name": "non"
                  },
                  {
                      "name": "do"
                  },
                  {
                      "name": "veniam"
                  },
                  {
                      "name": "tempor"
                  },
                  {
                      "name": "cupidatat"
                  },
                  {
                      "name": "Lorem"
                  }
              ]
          },
          {
              "category": "elit",
              "link": [
                  {
                      "name": "excepteur"
                  },
                  {
                      "name": "non"
                  },
                  {
                      "name": "enim"
                  },
                  {
                      "name": "mollit"
                  },
                  {
                      "name": "culpa"
                  },
                  {
                      "name": "exercitation"
                  },
                  {
                      "name": "voluptate"
                  }
              ]
          },
          {
              "category": "tempor",
              "link": [
                  {
                      "name": "culpa"
                  },
                  {
                      "name": "sunt"
                  },
                  {
                      "name": "proident"
                  },
                  {
                      "name": "non"
                  },
                  {
                      "name": "pariatur"
                  },
                  {
                      "name": "veniam"
                  },
                  {
                      "name": "qui"
                  }
              ]
          },
          {
              "category": "consequat",
              "link": [
                  {
                      "name": "do"
                  },
                  {
                      "name": "veniam"
                  },
                  {
                      "name": "ut"
                  },
                  {
                      "name": "sit"
                  },
                  {
                      "name": "anim"
                  },
                  {
                      "name": "ex"
                  },
                  {
                      "name": "laboris"
                  },
                  {
                      "name": "sit"
                  }
              ]
          }
      ]
    }
  }
};

function MainCtrl($scope, mainService) {
    $scope.data = mainService.data();
};
