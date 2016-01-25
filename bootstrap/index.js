var app = {
    config: null,
    env: null,
    rootPath: null
};

function start() {
    console.log(this);
};

module.exports = {
    app: app,
    start: start
};
