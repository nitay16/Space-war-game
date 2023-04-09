// for each page get it in variable
RegisterPage = document.getElementById("RegisterPage");
WelcomePage = document.getElementById("WelcomePage");
ConfigurationPage = document.getElementById("Configuration")
LoginPage = document.getElementById("LoginPage")
GamePage = document.getElementById("GameScreen")

//func that hide the welcome page and reveal the Register page
function Show_register() {
    WelcomePage.classList.add('hidden');
    WelcomePage.style.display = 'none';
    RegisterPage.classList.add('reveal');
    RegisterPage.style.display = 'block';
}
//func that hide the welcome page and reveal the Login page
function Show_login() {
    WelcomePage.classList.add('hidden');
    WelcomePage.style.display = 'none';
    LoginPage.classList.add('reveal');
    LoginPage.style.display = 'block';
}
// func that show the Configuration page from the Welcome page
function show_configuration() {
    LoginPage.classList.add('hidden');
    LoginPage.style.display = 'none';
    ConfigurationPage.classList.add('reveal');
    ConfigurationPage.style.display = 'block';
}
// func for the Back button to return from Login page to Welcome page
function Show_WelcomePage_from_login(){
    LoginPage.classList.add('hidden');
    LoginPage.style.display = 'none';
    WelcomePage.classList.add('reveal');
    WelcomePage.style.display = 'block';
}
// func for the Back button to return from Register page to Welcome page

function Show_WelcomePage_from_register(){
    RegisterPage.classList.add('hidden');
    RegisterPage.style.display = 'none';
    WelcomePage.classList.add('reveal');
    WelcomePage.style.display = 'block';
}
// func that reveal the game screen from the configuration screen
function show_game_screen() {
    ConfigurationPage.classList.add('hidden');
    ConfigurationPage.style.display = 'none';
    GamePage.classList.add('reveal');
    GamePage.style.display = 'block';
    start_game_after_config()
}
// func that create error message on the page with Back button
// get String of the error message like "Not correct Password"
function show_error_in_div(error_message) {
    div_error = document.createElement('div');
    div_error.classList.add('Error');
    message = document.createTextNode(error_message);
    div_error.appendChild(message);
    error_button = document.createElement('button');
    error_button_text = document.createTextNode('Back');
    error_button.classList.add('Error_button');
    error_button.appendChild(error_button_text);
    error_button.addEventListener('click', function () {
        div_error.classList.add('hidden');
        div_error.remove();
    });
    div_error.appendChild(error_button);
    document.body.appendChild(div_error)
}
// pop up div for get key code of the fire key
// TODO need to fix and add "if already the div is exist then dont create again
function Show_select_fire_key(){
    div_chose_key = document.createElement('div_key');
    div_chose_key.classList.add('chose_key');
    message = document.createTextNode("Click On Fire Key");
    div_chose_key.appendChild(message);
    div_chose_key.addEventListener('keydown', function () {
        div_chose_key.classList.add('hidden');
        div_chose_key.remove();
        FireKey = event.keyCode;
    });
    document.body.appendChild(div_chose_key)
}
