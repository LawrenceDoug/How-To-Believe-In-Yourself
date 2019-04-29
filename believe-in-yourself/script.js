var app = angular.module('myApp', ['ngRoute']);

var pageIndex = 0;
var link = document.getElementsByClassName('nav-item');

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/page1.html',
            controller: 'appController'
        })
        .when('/page2', {
            templateUrl: 'pages/page2.html',
            controller: 'page2Controller'
        })
        .when('/page3', {
            templateUrl: 'pages/page3.html',
            controller: 'page3Controller'
        })
        .when('/page4', {
            templateUrl: 'pages/page4.html',
            controller: 'page4Controller'
        })
        .when('/page5', {
            templateUrl: 'pages/page5.html',
            controller: 'page5Controller'
        })
        .when('/page6', {
            templateUrl: 'pages/page6.html',
            controller: 'page6Controller'
        })
        .when('/page7', {
            templateUrl: 'pages/page7.html',
            controller: 'page7Controller'
        })
        .when('/page8', {
            templateUrl: 'pages/page8.html',
            controller: 'page8Controller'
        })
        .when('/page9', {
            templateUrl: 'pages/page9.html',
            controller: 'page9Controller'
        })
        .when('/page10', {
            templateUrl: 'pages/page10.html',
            controller: 'page10Controller'
        })
});

app.controller('appController', function ($scope) {
    pageIndex = 1;
    $scope.message = 'How to Believe in Yourself - The Online Flipbook';
    $scope.image = '../images/page1.jpg';
    $scope.links = {
        pages: [{
                linkname: 'Home',
                actuallink: '#!/'
            },
            {
                linkname: 'Step 1',
                actuallink: '#!page2'
            },
            {
                linkname: 'Step 2',
                actuallink: '#!page3'
            },
            {
                linkname: 'Step 3',
                actuallink: '#!page4'
            },
            {
                linkname: 'Step 4',
                actuallink: '#!page5'
            },
            {
                linkname: 'Step 5',
                actuallink: '#!page6'
            },
            {
                linkname: 'Step 6',
                actuallink: '#!page7'
            },
            {
                linkname: 'Step 7',
                actuallink: '#!page8'
            },
            {
                linkname: 'Step 8',
                actuallink: '#!page9'
            },
            {
                linkname: 'Step 9',
                actuallink: '#!page10'
            }
        ]
    };

    $scope.changePage = function (num) {
        if (num == -1 && pageIndex == 2) {
            location.href = '/#!';
        } else if (num == -1 && pageIndex == 1) {
            pageIndex = 11;
            location.href = '/#!/page' + (pageIndex + num);
        } else if (num == 1 && pageIndex == 10) {
            pageIndex = 1;
            location.href = '/#!';
        } else {
            location.href = '/#!/page' + (pageIndex + num);
        }
    };

    if (link.length > 3) {
        for (var i = 0; i < link.length; i++) {
            link[i].classList.remove('active');
        }
        link[0].classList.add('active');
    }
});

app.controller('page2Controller', function ($scope) {
    pageIndex = 2;
    $scope.message = 'Step 1: Learn to Love Yourself';
    $scope.image = '../images/page2.jpg';

    for (var i = 0; i < link.length; i++) {
        link[i].classList.remove('active');
    }
    link[1].classList.add('active');
});

app.controller('page3Controller', function ($scope) {
    pageIndex = 3;
    $scope.message = 'Step 2: Find Purpose';
    $scope.image = '../images/page3.jpg';

    for (var i = 0; i < link.length; i++) {
        link[i].classList.remove('active');
    }
    link[2].classList.add('active');
});

app.controller('page4Controller', function ($scope) {
    pageIndex = 4;
    $scope.message = "Step 3: Eliminate Words Like CAN'T, NEVER, and IMPOSSIBLE";
    $scope.image = '../images/page4.jpg';

    for (var i = 0; i < link.length; i++) {
        link[i].classList.remove('active');
    }
    link[3].classList.add('active');
});

app.controller('page5Controller', function ($scope) {
    pageIndex = 5;
    $scope.message = 'Step 4: Build Your Self-Confidence';
    $scope.image = '../images/page5.jpg';

    for (var i = 0; i < link.length; i++) {
        link[i].classList.remove('active');
    }
    link[4].classList.add('active');
});

app.controller('page6Controller', function ($scope) {
    pageIndex = 6;
    $scope.message = 'Step 5: Develop Discipline';
    $scope.image = '../images/page6.jpg';

    for (var i = 0; i < link.length; i++) {
        link[i].classList.remove('active');
    }
    link[5].classList.add('active');
});

app.controller('page7Controller', function ($scope) {
    pageIndex = 7;
    $scope.message = 'Step 6: Set Goals For Yourself';
    $scope.image = '../images/page7.jpg';

    for (var i = 0; i < link.length; i++) {
        link[i].classList.remove('active');
    }
    link[6].classList.add('active');
});

app.controller('page8Controller', function ($scope) {
    pageIndex = 8;
    $scope.message = "Step 7: Strive to Complete Those Goals Even If They're Impossible";
    $scope.image = '../images/page8.jpg';

    for (var i = 0; i < link.length; i++) {
        link[i].classList.remove('active');
    }
    link[7].classList.add('active');
});

app.controller('page9Controller', function ($scope) {
    pageIndex = 9;
    $scope.message = 'Step 8: Reward Yourself For All Your Hard Work';
    $scope.image = '../images/page9.jpg';

    for (var i = 0; i < link.length; i++) {
        link[i].classList.remove('active');
    }
    link[8].classList.add('active');
});

app.controller('page10Controller', function ($scope) {
    pageIndex = 10;
    $scope.message = "Step 9: Congratulations! You Now Hold a Strong Belief in Yourself That Wasn't There Before";
    $scope.image = '../images/page10.png';

    for (var i = 0; i < link.length; i++) {
        link[i].classList.remove('active');
    }
    link[9].classList.add('active');
});