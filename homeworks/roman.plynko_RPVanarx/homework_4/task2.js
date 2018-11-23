const EventEmitter = require('events');

function doSomeAsync(timeout, cb) {
    const ee = new EventEmitter();
    const state = {
        progress: 0,
    };

    function loop() {
        if (state.progress === 8) return cb(null, state);
        if (state.progress === 'canceled') return cb(new Error('Action canceled'));
        if (state.progress * 1000 > timeout) return cb(new Error('Action timed out'));
        state.progress++;
        ee.emit('progress', state);
        return setTimeout(loop, 1000);
    }

    loop();

    return ee;
}

function timeAction(actions = {}) {
    const maxTime = 8000;
    return new Promise((res, rej) => {
        const actProg = doSomeAsync(maxTime, (err, result) => (err ? rej : res)(err || result));
        actProg.on('progress', actions.progress);
    });
}

timeAction({
    progress: (state) => {
        const objState = state;
        console.log('state:', objState.progress);
        if (objState.progress === 7) { objState.progress = 'canceled'; }
    },
}).then(
    res => console.log('state: ready', res),
    err => console.log('state:', err),
);
