function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(() => {
    console.log(getRandomInt(1,6));
}, 500);