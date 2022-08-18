import logger from '../utils/logger';
import stream from 'got';
import fs from 'fs';
import { createWriteStream } from 'fs';
import { execSync } from 'child_process';
import zlib from 'zlib';
import unzip from 'unzip-stream';
import path from 'path'
import updatePath from '../lib/updatePath';

export default function main(version: String, platform: String, arch: String) {
    const url = `https://github.com/oven-sh/bun/releases/download/bun-v${version}/bun-${platform}-${arch}.zip`
    const start = () => {
        const download = stream(url, { isStream: true }).pipe(createWriteStream(`./${process.env.HOME}/bun-${platform}-${arch}.zip`));
        download.on("finish", () => {
            logger.download(platform.toString(), version.toString())
            fs.createReadStream(`./${process.env.HOME}/bun-${platform}-${arch}.zip`)
            .pipe(unzip.Extract({ path: `./${process.env.HOME}/bun-${version}` }))
            .on("finish", () => {
                updatePath(`bun-${version}/bun-${platform}-${arch}`)              
                logger.unzipped(platform.toString(), version.toString())
            })
        });
    };



    start();
}