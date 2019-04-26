function login() {
    let username = (<HTMLInputElement>document.getElementById("username")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
    console.log("username:", username, "password:", password);

    let user = { "username": username, "password": password }
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
    $.post(url, JSON.stringify(user), data => {
        console.log("post");
        console.log(data);
    })

    // xml
    // reqGet(url, value);
}

function reqGet(url: string, value: string) {
    var xmlHttp = null;
    try {// Firefox, Opera 8.0+, Safari, IE7
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {// Old IE
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
