angular.module('udAPP', [])
    .controller('UserCtrl', function($scope, $http) {
        // This function is called by clicking a specific card
        $scope.toggle = function() {
            if (!this.user.expand) {
                this.user.expand = true;
            } else {
                this.user.expand = false;
            }
        }
        // Fetching the data from the json file
        $http.get('https://giocodes.github.io/user-directory/users.json')
            .then(function(res) {
                $scope.allUsers = res.data;
            });
    });
