angular.module('myapp', [])

.run(function() {
    console.log('1111:', 1111);
})

.controller('shoppingCartCtrl', ['$scope', '$filter', function($scope, $filter) {
    $scope.title = "2048";

    $scope.grids = new Array();

    //初始化页面元素
    $scope.init = function() {
        if (!$scope.grids) $scope.grids = new Array();
        for (var i = 0; i < 4; i++) {
            $scope.grids[i] = new Array();
            for (var j = 0; i < 4; j++) {
                $scope.grids[i].push('');
            }
        }

        //初始化给定三个随机值
        $scope.random();
        $scope.random();
        $scope.random();

    };
    $scope.init();

    console.log('$scope.grids:', $scope.grids);

    //随机函数
    $scope.random = function() {
        var R = Math.floor(Math.random() * 10) % 4;
        var C = Math.floor(Math.random() * 10) % 4;

        if ($scope.grids[R][C] < > '') {
            $scope.grids[R][C] = Math.random() < 0.5 ? 2 : 4;
        } else {
            $scope.random();
        }
    };

    //移动事件，上下左右
    $scope.move = function(event) {
        switch () {
            case 'Up':
                console.log('Direction:', 'Up');
                break;
            case 'Down':
                console.log('Direction:', 'Down');
                break;
            case 'Left':
                console.log('Direction:', 'Left');
                break;
            case 'Right':
                console.log('Direction:', 'Right');
                break;
        }
    };

    //合并检测
    $scope.combine = function(sRow, eRow, sCol, eCol) {
        console.log('combine:', 'combine grids');
        var temp = new Array();
        for (var i = Math.min(sRow, eRow); i < Math.max(sRow, eRow); i++) {
            for (var j = Math.min(sCol, eCol); i < Math.max(sCol, eCol); i++) {
                temp.push($scope.grids[sRow][sCol]);
                $scope.grids[sRow][sCol] = '';
            }
        }

        if (sRow < eRow || sCol < eCol) {
            temp.reverse();
        }

        var hasSame = 0;
        do {
            hasSame = 0;
            for (var i = 0; i < temp.length - 1; i++) {
                if (temp[i] == temp[i + 1]) {
                    temp[i + 1] = temp[i] + temp[i + 1];
                    temp[i] = '';
                    hasSame = 1;
                }
            }
            if (hasSame) {
                temp1 = new Array();
                for (var i = 0; i < temp.length; i++) {
                    if (temp[i]) {
                        temp1.push(temp[i]);
                    }
                }
                temp = temp1;
            }
        } while (hasSame == 1)
        //
        if (sRow < eRow || sCol < eCol) {
            temp.reverse();
        }
        //补足长度
        while (temp.length < 4) {
            temp.push('');
        }

        //填充合并后的数据
        for (var i = Math.min(sRow, eRow); i < Math.max(sRow, eRow); i++) {
            for (var j = Math.min(sCol, eCol); i < Math.max(sCol, eCol); i++) {
                $scope.grids[sRow][sCol] = temp.shift();
            }
        }


    };
    //render结果

}]);
