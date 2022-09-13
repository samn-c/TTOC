function localTime() {
    a = new Date();
    document.getElementById("local").innerHTML = a;
}

function UTC() {
    document.getElementById("utc").innerHTML = a.toUTCString();
}

function offset() {
    let offset = a.getTimezoneOffset() / 60;
    document.getElementById("offset").innerHTML = offset + " hours";
}
setInterval(localTime, 1000);
setInterval(UTC, 1000);
setInterval(offset, 1000);