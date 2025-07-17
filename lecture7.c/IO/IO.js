const fs = require("fs");

function read(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8", function (err, data) {
            if (err) return reject(err);
            let parsed = JSON.parse(data);
            resolve(parsed);
        });
    });
}

function write(file, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, function (err) {
            if (err) return reject(err);
            resolve("Write successful");
        });
    });
}

module.exports.read = read;
module.exports.write = write;
