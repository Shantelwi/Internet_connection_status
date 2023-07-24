//VARIABLES
const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor(){
    bgColor.classList.add("wifi_connect")
}


async function connectionStatus() {
    try {
        const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WiFi_Logo.svg/1024px-WiFi_Logo.svg.png?time='
        + (new Date()).getTime());
        image.src = "./images/wifi_connect.jpg";
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300;
    } catch (error) {
        // console.log(error);
        statusDisplay.textContent = "OOPS!!! Something went wrong";
        image.src = "./images/no-wifi.jpg";
        bgColor.classList.remove("wifi_connect");
    }
}

//MONITOR THE CONNECTION

setInterval(async () => {
    const result = await connectionStatus();
    if (result) {
        statusDisplay.textContent = "You are connected and ONLINE!!";
        setColor();
    }
}, 5000);

// check connection when the page loads

window.addEventListener("load", async(event) => {
    if (connectionStatus()) {
        statusDisplay.textContent = "You are ONLINE!!";
    } else {
        statusDisplay.textContent = "You are OFFLINE!!";
    }
})