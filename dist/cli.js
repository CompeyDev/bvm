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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchVersions_1 = require("./lib/fetchVersions");
const version_1 = __importDefault(require("./commands/version"));
const help_1 = __importDefault(require("./commands/help"));
const args = process.argv.slice(2);
const command = args[0];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!command) {
            console.log((0, help_1.default)());
            process.exit(0);
        }
        switch (command) {
            case "--help":
                console.log((0, help_1.default)());
                process.exit(0);
            case "-h":
                console.log((0, help_1.default)());
                process.exit(0);
            case "--version":
                (0, version_1.default)();
                process.exit(0);
            case "-v":
                (0, version_1.default)();
                process.exit(0);
            case "--list":
                try {
                    const versions = yield (0, fetchVersions_1.fetchVersions)();
                    console.log("Versions available:");
                    versions === null || versions === void 0 ? void 0 : versions.forEach((version) => {
                        version = version.replace('bun-', '');
                        process.stdout.write(version + "");
                        if (version == versions[versions.length - 1].toString().replace('bun-', '')) {
                            process.stdout.write(". ");
                        }
                        else {
                            process.stdout.write(", ");
                        }
                    });
                }
                catch (e) {
                    console.log("Failed to fetch available versions.");
                }
                process.exit(0);
            case "--latest":
                console.log("Latest version available:");
                console.log(yield (0, fetchVersions_1.fetchLatestVersion)());
                process.exit(0);
            case "install":
                console.log('Install a version');
                process.exit(0);
            case "uninstall":
                console.log('Uninstall a version');
                process.exit(0);
            default:
                (0, help_1.default)();
                process.exit(0);
        }
    });
}
main();
