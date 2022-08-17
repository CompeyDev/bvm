import getPlatform from '../utils/getPlatform';
import axios from 'axios';

export async function fetchVersions(): Promise<any> {
    const res = await axios.get(`https://api.github.com/repos/oven-sh/bun/releases`);
    const json = await res.data;
    let finalAr: string[] = [];
    for (let x = 0; x < json.length; x++) {
        const tag = json[x].tag_name;
        if (!tag) return;
        finalAr.push(tag)
    }
    return finalAr
}

export async function fetchLatestVersion(): Promise<any> {
    const res = await axios.get(`https://api.github.com/repos/oven-sh/bun/releases/latest`);
    const json = await res.data;
    const tag = json.tag_name;
    if (!tag) return;
    return tag
}