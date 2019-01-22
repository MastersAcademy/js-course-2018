function nowIsTuesday() {
    const today = new Date().getDay();
    return today === 1;
}

module.exports = { nowIsTuesday };
