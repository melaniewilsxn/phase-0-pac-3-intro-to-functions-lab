function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return string = "I can\'t hear you!";
    }
    else {
        (string === "Let\'s have dinner together!") ? (string = "I would love to!") : (string = "YES INDEED!");
        
        return string;
    }
}