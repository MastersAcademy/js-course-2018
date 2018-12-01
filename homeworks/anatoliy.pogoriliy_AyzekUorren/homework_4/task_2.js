function uploadProgress(obj, urlFile) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${urlFile}?${new Date().getTime()}`);
        xhr.onprogress = (element) => {
            if (element.lengthComputable) {
                // Here can add function to log or detect changes
                console.log(`${Math.round(element.loaded / element.total * 100)}%`);
            }
        };
        xhr.onloadstart = () => {
            console.log('Starting upload...');
        };
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Upload was eneded.');
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.send(obj);
    });
}

uploadProgress(null, 'https://i1.wp.com/sunvery.com.ua/wp-content/uploads/2017/11/nodejs-wallpaper-1_0.jpg').then(console.log).catch(console.error);
