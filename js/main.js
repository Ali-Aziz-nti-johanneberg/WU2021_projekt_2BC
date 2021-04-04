document.querySelector(".fade-layer").addEventListener("click",showMenu)

document.querySelector(".hamburger-menu").addEventListener("click",showMenu)

function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show")

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}   

function initMap() {
    var location = {lat: -25.363, lng:131.044};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    }); 
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

                                                                        