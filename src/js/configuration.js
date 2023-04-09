// get the select ship
space_ship = document.querySelectorAll('.Spaceship_select');
active_spaceship = null;
// event listener to the select of one ship
space_ship.forEach((ship) =>{
    ship.addEventListener('click', function () {
        if (active_spaceship){
            active_spaceship.classList.remove('SpaceShip_chosen');
        }
        ship.classList.add('SpaceShip_chosen');
        active_spaceship = ship;
    });
});

// TODO need to fix this and understand of to config the fire key for now is space
var FireKey = 49;

function selected_key() {
    Show_select_fire_key();
}

key = document.getElementById("key_config");
key.addEventListener('keydown', function () {
    if(key.length === 1){
        FireKey = key;
        key.placeholder = "Key set to " + FireKey;
    }
});
// func to get the right img of the space ship that selected
function get_spaceship() {
    if (active_spaceship === null){
        return null
    }
    if (active_spaceship.id === "Spaceship_1"){
        return "Resource/imgs/spaceship/spaceship_1.png"
    }
    if (active_spaceship.id === "Spaceship_2"){
        return "Resource/imgs/spaceship/spaceship_2.png"
    }
    if (active_spaceship.id === "Spaceship_3"){
        return "Resource/imgs/spaceship/spaceship_3.png"
    }
    if (active_spaceship.id === "Spaceship_4"){
        return "Resource/imgs/spaceship/spaceship_4.png"
    }

}

function startgame() {
    if (FireKey === undefined)
    {
        show_error_in_div("Need to chose FireKey");
        return;
    }
    if (get_spaceship() === null){
        show_error_in_div("Need to chose SpaceShip");
        return;
    }
    show_game_screen()
}