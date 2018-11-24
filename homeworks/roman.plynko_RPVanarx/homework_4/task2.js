const path = 'https://kwork.ru/pics/t3/85/427668-1534523285.jpg';
function loadImage(file, url, progressCallback) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open('GET', url);

        request.onloadstart = () => {
            console.log('upload begin');
        };

        request.upload.onprogress = event => progressCallback(event);

        request.onload = () => {
            if (request.status === 200) {
                console.log('end upload');
                resolve(request.response);
            } else {
                reject(request.statusText);
            }
        };

        request.send(file);
    });
}

function progress(event) {
    return new Promise((resolve, reject) => {
        if (event.lengthComputable) {
            console.log(`${event.loadedDate / event.totalDate * 100}%`);
            resolve();
        } else {
            console.log('100%');
            reject();
        }
    });
}

loadImage({}, path, progress).then().catch(err => console.log(err));
