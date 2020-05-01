export function getTimeInUTCFormat(unixTimestamp) {
    let dateInUTC = new Date(unixTimestamp * 1000);
    return `${dateInUTC.getUTCHours()}:${dateInUTC.getUTCMinutes()}:${dateInUTC.getUTCSeconds()} ${dateInUTC.toDateString()}`;
}