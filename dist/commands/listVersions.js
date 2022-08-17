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
const fetchVersions_1 = require("../lib/fetchVersions");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const versions = yield (0, fetchVersions_1.fetchVersions)();
        console.log("Versions available:");
        versions.forEach((version) => {
            version = version.replace('bun-', '');
            let res = version + "";
            if (version == versions[versions.length - 1].toString().replace('bun-', '')) {
                res += ".";
            }
            else {
                res += ", ";
            }
            return res;
        });
    });
}
exports.default = main;
