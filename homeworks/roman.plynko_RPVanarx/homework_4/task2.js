const path = 'https://kwork.ru/pics/t3/85/427668-1534523285.jpg';
function loadImage(url, progressCallback) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open('GET', url);

        request.onloadstart = () => {
            console.log('upload begin');
        };

        request.upload.onprogress = progressCallback;

        request.onload = () => {
            console.log('end upload');
            resolve(request.statusText);
        };

        request.onerror = () => {
            console.log('error');
            reject(request.statusText);
        };

        request.send();
    });
}

function progress(event) {
    if (event.lengthComputable) {
        console.log(`${event.loadedDate / event.totalDate * 100}%`);
    } else {
        console.log('100%');
    }
}

loadImage(path, progress).then().catch(err => console.log(err));
