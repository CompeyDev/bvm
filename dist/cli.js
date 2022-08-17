"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./utils/constants");
const fetchVersions_1 = require("./lib/fetchVersions");
const args = process.argv.slice(2);
const command = args[0];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!command) {
            console.log(constants_1.HELP_MENU);
            process.exit(0);
        }
        switch (command) {
            case "--help":
                console.log("Zero");
                process.exit(0);
            case "--version":
                console.log(`Bun Version Manager (v${constants_1.VERSION})`);
                process.exit(0);
            case "--list":
                const versions = yield (0, fetchVersions_1.fetchVersions)();
                console.log("Versions available:");
                versions.forEach((version) => {
                    version = version.replace('bun-', '');
                    process.stdout.write(version + "");
                    if (version == versions[versions.length - 1].toString().replace('bun-', '')) {
                        process.stdout.write(". ");
                    }
                    else {
                        process.stdout.write(", ");
                    }
                });
                process.exit(0);
                process.exit(0);
            case "--latest":
                console.log('Show latest version');
                process.exit(0);
            case "install":
                console.log('Install a version');
                process.exit(0);
            case "uninstall":
                console.log('Uninstall a version');
                process.exit(0);
            default:
                console.log(constants_1.HELP_MENU);
                process.exit(0);
        }
    });
}
main();
