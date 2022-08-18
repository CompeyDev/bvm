// import packageJson from '../../package.json'
const packageJson = require('../../package.json')
export const VERSION = packageJson.version;
export const HELP_MENU = `
Bun Version Manager (v${1})

Note: <version> refers to any version-like string bvm understands.


Usage:
    bvm --help                                  Show this message
    bvm --version                               Show version
    bvm --list                                  List all available versions
    bvm --latest                                Show latest version
    bvm install [<version>]                     Install a version
    bvm uninstall [<version>]                   Uninstall a version
    bvm update                                  Update all installed versions
`
