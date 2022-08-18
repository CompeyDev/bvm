import { fetchVersions } from "../lib/fetchVersions";
import install from "../lib/downloadVersion";
import platform from '../utils/getPlatform'
import arch from '../utils/getArch';

export default async function main(version: String): Promise<void|string|undefined> {
    const versions: Array<String>|undefined = await fetchVersions();
    (versions)?.forEach((fetched: String) => {
        if (fetched == version) {
            install(version, platform(), arch());
        } else {
            return "Version not found."
        }
    })
}