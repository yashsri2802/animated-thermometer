const tempLoad = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "#f8b627";
    setTimeout(() => {          //syntax:setTimeout(function, time)
        temp.innerHTML = "&#xf2ca";
    }, 1000);     //changes after 1 second
    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
    }, 2000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
    }, 3000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "red";
    }, 4000);
}
tempLoad();
setInterval(tempLoad, 5000)   //for infinite duration