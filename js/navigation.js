// var adminurl = "http://blazen.io/";
// var adminurl = "http://104.199.151.75:82/";
//var adminurl = "http://104.154.89.21:85/";
var adminurl = "http://localhost:1337/";
// var adminurl = "http://104.197.77.171:1337/";
// var imgurl = "http://146.148.4.222/upload/";
var imgpath = adminurl + "upload/readFile";
var uploadurl = adminurl + "upload/";
// var imgpath = imgurl + "readFile";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Artist Collaboration",
        classis: "active",
        link: "#/page/viewArtistCollaboration",
        subnav: []
    // }, {
    //     name: "Charity/Ngo Campaign",
    //     classis: "active",
    //     link: "#/page/viewCharityNgoCampaign",
    //     subnav: []
    // }, {
    //     name: "Chef Collaboration",
    //     classis: "active",
    //     link: "#/page/viewChefCollaboration",
    //     subnav: []
    // }, {
    //     name: "Foodie Collaboration",
    //     classis: "active",
    //     link: "#/page/viewFoodieCollaboration",
    //     subnav: []
    }, {
        name: "Nutritionist Collaboration",
        classis: "active",
        link: "#/page/viewNutritionistCollaboration",
        subnav: []
    }, {
        name: "Personal Campaign",
        classis: "active",
        link: "#/page/viewPersonalCampaign",
        subnav: []
    }, {
        name: "Restaurant On YFL",
        classis: "active",
        link: "#/page/viewRestaurantOnYfl",
        subnav: []
    }, {
        name: "Sell On YFL",
        classis: "active",
        link: "#/page/viewSellOnYfl",
        subnav: []
    // }, {
    //     name: "Studio Listing",
    //     classis: "active",
    //     link: "#/page/viewStudioListing",
    //     subnav: []
    // }, {
    //     name: "StudioPartnership",
    //     classis: "active",
    //     link: "#/page/viewStudioPartnership",
    //     subnav: []
    }, {
        name: "Instructor/Teacher Collaboration",
        classis: "active",
        link: "#/page/viewTeacherCollaboration",
        subnav: []
    // }, {
    //     name: "Yoga Enthusiast",
    //     classis: "active",
    //     link: "#/page/viewYogaEnthusiast",
    //     subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        saveApi: function(data, apiName, successCallback, errorCallback) {
            $http.post(adminurl + apiName, data).success(successCallback).error(errorCallback);
        },
        deleteProject: function(data, successCallback, errorCallback) {
            $http.post(adminURL + "project/delete", data).success(successCallback).error(errorCallback);
        },
        findProjects: function(apiName, pagination, successCallback, errorCallback) {
            $http.post(adminurl + apiName, pagination).success(successCallback).error(errorCallback);
        },
        findOneProject: function(apiName, urlParams, successCallback, errorCallback) {
            console.log(adminurl + apiName);
            $http.post(adminurl + apiName, urlParams).success(successCallback).error(errorCallback);
        },
        sideMenu1: function(apiName, pagination, successCallback, errorCallback) {
            $http.post(adminurl + apiName, pagination).success(successCallback).error(errorCallback);
        },
        submitLogin: function(data, successCallback, errorCallback) {
            $http.post(adminurl + "register/login", data).success(successCallback).error(errorCallback);
        },
        deleteApi: function(data, successCallback, errorCallback) {
            $http.post(adminURL + "api/delete", data).success(successCallback).error(errorCallback);
        },
        getDropDown: function(apiName, successCallback, errorCallback) {
            $http.post(adminurl + apiName).success(successCallback).error(errorCallback);
        },
        logout: function(successCallback, errorCallback) {
            $http.post(adminurl + "register/logout").success(successCallback).error(errorCallback);
        },

    };
});
