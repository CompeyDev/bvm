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
exports.fetchLatestVersion = exports.fetchVersions = void 0;
const axios_1 = __importDefault(require("axios"));
function fetchVersions() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield axios_1.default.get(`https://api.github.com/repos/oven-sh/bun/releases`);
        const json = yield res.data;
        let finalAr = [];
        for (let x = 0; x < json.length; x++) {
            const tag = json[x].tag_name;
            if (!tag)
                return;
            finalAr.push(tag);
        }
        return finalAr;
    });
}
exports.fetchVersions = fetchVersions;
function fetchLatestVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield axios_1.default.get(`https://api.github.com/repos/oven-sh/bun/releases/latest`);
        const json = yield res.data;
        const tag = json.tag_name;
        if (!tag)
            return;
        return tag;
    });
}
exports.fetchLatestVersion = fetchLatestVersion;
