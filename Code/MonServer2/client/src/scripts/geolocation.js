export function getPositionAsync() {
    // retourne une promesse avec un objet {lat,long};
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((result) => {
            resolve({ lat: result.coords.latitude, long: result.coords.longitude });
        }, (err) => {
            reject(err);
        });
    });
}
