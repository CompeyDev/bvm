"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HELP_MENU = exports.VERSION = exports.packageJson = void 0;
exports.packageJson = require('../../package.json');
exports.VERSION = exports.packageJson.version;
exports.HELP_MENU = `
Bun Version Manager (v${exports.VERSION})

Note: <version> refers to any version-like string bvm understands.


Usage:
    bvm --help                                  Show this message
    bvm --version                               Show version
    bvm --list                                  List all available versions
    bvm --latest                                Show latest version
    bvm install [<version>]                     Install a version
    bvm uninstall [<version>]                   Uninstall a version
    bvm update                                  Update all installed versions
`;
