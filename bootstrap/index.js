var app = {
    config: null,
    env: null,
    rootPath: null
};

function start() {
    this.configPathSet();
    var app = this;
    var fs = require('fs');

    fs.readdir(this.app.config.path.vendors + '/', function(err, vendors) {
        if (vendors) {
            for (var i in vendors) {
                var vendor = require(this.app.config.path.vendors + '/' + vendors[i]);
                vendor.autoload(app);
            }
        }
    });
};

function configPathSet() {
    for (var i in this.app.config.path) {
        if (this.app.config.path[i]) {
            this.app.config.path[i] = this.app.rootPath + this.app.config.path[i];
        }
    }
};

module.exports = {
    app: app,
    start: start,
    configPathSet: configPathSet
};
