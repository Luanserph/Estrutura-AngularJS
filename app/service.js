angular.module("teste-angularjs").service("teste-angularjs", function($http)
{
    this.get = function(url)
    {
        return $http.get(url, function(response)
        {
            return response.data
        })
    };

    this.post = function(url,data)
    {
        return $http.post(url,data, function(response)
        {
            return response.data
        })
    };

    this.put = function(url,data)
    {
        return $http.put(url,data, function(response)
        {
            return response.data
        })
    };

    this.delete = function(url,data)
    {
        return $http.delete(url,data, function(response)
        {
            return response.data
        })
    };
})
