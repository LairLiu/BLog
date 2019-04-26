"use strict";
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("username:", username, "password:", password);
    var user = { "username": username, "password": password };
    // post(window.location.origin + "/login", value, function (data: any) {
    //     console.log(data);
    // })
    var url = window.location.origin + "/login";
    var value = "?username=" + user.username + "&password=" + user.password;
    // jq get
    // $.get(url + value, data => {
    //     console.log(data);
    // });
    // jq post
    $.post(url, JSON.stringify(user), function (data) {
        console.log("post");
        console.log(data);
    });
    // xml
    // reqGet(url, value);
}
function reqGet(url, value) {
    var xmlHttp = null;
    try { // Firefox, Opera 8.0+, Safari, IE7
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) { // Old IE
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {
            alert("Your browser does not support XMLHTTP!");
            return;
        }
    }
    url = url + value;
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
}
