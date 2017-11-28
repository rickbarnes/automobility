(function () {
    'use strict';
    angular
        .module(AppName)
        .factory('mainService', mainService);

    mainService.$inject = ['$http', '$q'];

    function mainService($http, $q) {

        return {
            post: _post,
            postById: _postById,
            get: _get,
            getById: _getById,
            put: _put,
            delete: _delete,
            truncate: _truncate,
        };

        // POST
        function _post(apiendpoint, data, header) {
            var headers = {
                'Authorization': 'Basic base64(d0d419a5-ca7d-4e34-9fd4-cccf4bddd33f:2ee05bc8-f40c-4868-984d-6cf76facf3d2)',
                'Content-Type': "application/x-www-form-urlencoded"
            }
            return $http({ /*.post(apiendpoint, data, headers)*/
                method: 'POST',
                url: apiendpoint,
                data: data,
                headers: header
                })
                .then(_postComplete)
                .catch(_postFailed);

            function _postComplete(res) {
                console.log("Post Complete", res);
                return res;
            }

            function _postFailed(err) {
                console.log("Post Failed", err);
                return $q.reject(err);
            }
        }

        // POST BY ID
        function _postById(apiendpoint, id, data) {
            return $http.post(apiendpoint + id, data)
                .then(_postByIdComplete)
                .catch(_postByIdFailed);

            function _postByIdComplete(res) {
                console.log("Post by id complete", res);
                return res;
            }

            function _postByIdFailed(err) {
                console.log("Post by id failed", err);
                return $q.reject(err);
            }
        }

        // GET
        function _get(apiendpoint) {
            return $http.get(apiendpoint)
                .then(_getComplete)
                .catch(_getFailed);

            function _getComplete(res) {
                console.log("Get Complete", res);
                return res;
            }

            function _getFailed(err) {
                console.log("Get Failed", err);
                return $q.reject(err);
            }
        }

        // GET BY ID
        function _getById(apiendpoint, id) {
            return $http.get(apiendpoint + id)
                .then(_getByIdComplete)
                .catch(_getByIdFailed);

            function _getByIdComplete(res) {
                console.log("Get by id success", res);
                return res;
            }

            function _getByIdFailed(err) {
                console.log("Get by id failed", err);
                return $q.reject(err);
            }
        }

        // PUT
        function _put(apiendpoint, id, data) {
            return $http.put(apiendpoint + id, data)
                .then(_putComplete)
                .catch(_putFailed);

            function _putComplete(res) {
                console.log("Put Complete", res);
                return res;
            }

            function _putFailed(err) {
                console.log("Put Failed", err);
                return $q.reject(err);
            }
        }

        // DELETE BY ID
        function _delete(apiendpoint, id) {
            return $http.delete(apiendpoint + id)
                .then(_deleteComplete)
                .catch(_deleteFailed);

            function _deleteComplete(res) {
                console.log("Delete Complete", res);
                return res;
            }

            function _deleteFailed(err) {
                console.log("Delete Failed", err);
                return $q.reject(err);
            }
        }

        // TRUNCATE
        function _truncate(apiendpoint) {
            return $http.delete(apiendpoint)
                .then(_truncateComplete)
                .catch(_truncateFailed);

            function _truncateComplete(res) {
                console.log("Truncate Complete", res);
                return res;
            }

            function _truncateFailed(err) {
                console.log("Truncate Failed", err);
                return $q.reject(err);
            }
        }
    }
})();