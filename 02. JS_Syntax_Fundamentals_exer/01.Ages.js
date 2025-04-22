function ages(number) {
    if (number < 0) {
        console.log("out of bounds");
    } else if (number >= 0 && number < 3) {
        console.log("baby");
    } else if (number >= 3 && number <= 13) {
        console.log("child");
    } else if (number >= 14 && number < 20) {
        console.log("teenager");
    } else if (number >= 20 && number <= 65) {
        console.log("adult");
    } else if (number >= 66) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
}