import fs from 'fs';

export default function main(dirName: String) {
    const someFile = `${process.env.HOME}/.bashrc`;
    fs.readFile(someFile, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var result = data.replace(/.bun/g, `.bvm/${dirName}`);

        fs.writeFile(someFile, result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}