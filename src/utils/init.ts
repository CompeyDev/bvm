import fs from 'fs';
import path from 'path';
import logger from './logger';

export default function main() {
    fs.mkdir(`${process.env.HOME}/.bvm/`, (err) => {
        if (err) {
            return logger.error(err.message)
        }
        logger.info("Initialied bvm.")
    });
}