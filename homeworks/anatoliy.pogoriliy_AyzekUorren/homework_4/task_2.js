function uploadProgress() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://i1.wp.com/sunvery.com.ua/wp-content/uploads/2017/11/nodejs-wallpaper-1_0.jpg?${new Date().getTime()}`);
    xhr.onprogress = (element) => {
        if (element.lengthComputable) {
            console.log(`${Math.round(element.loaded / element.total * 100)}%`);
        }
    };
    xhr.onloadstart = () => {
        console.log('Starting upload...');
    };
    xhr.onloadend = () => {
        console.log('Upload was eneded.');
    };
    xhr.send();
}

uploadProgress();
