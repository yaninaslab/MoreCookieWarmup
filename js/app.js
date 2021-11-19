

var master_username = "bestuser";
var master_password = "password";

function alert_user() {
    alert("I am alerting you!");
}

function inject_p_tag() {
    var injected_p_tag = document.createElement('p');
    injected_p_tag.innerText = "I was injected";
    document.body.appendChild(injected_p_tag);
}

function try_login(event_details) {
    //login_button.removeEventListener('click', try_login);
    //this.removeEventListener('click', try_login);

    var my_form = this.parentNode;
    //my_form.style.border = "1px solid black";

    var username_input = document.getElementById("username_input");
    var username_value = username_input.value;

    var password_input = document.getElementById("password_input");
    var password_value = password_input.value;

    var login_status = document.getElementById('status_message')
    if (master_username === username_value && master_password === password_value) {

        login_status.innerText = "Login Successful!";
    } else {

        login_status.innerText = "Login Failed!";
    }
}

function try_login_mock() {
    setTimeout(try_login, 1000);
}

var login_button = document.getElementById("login_button");
login_button.addEventListener('click', try_login_mock);

//setTimeout(alert_user, 10000);
var inject_interval = setInterval(inject_p_tag, 2000);
setTimeout(function(){ clearInterval(inject_interval) }, 15100);