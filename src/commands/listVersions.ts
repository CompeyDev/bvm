import { fetchVersions } from '../lib/fetchVersions';

export default async function main() {
    const versions: any = await fetchVersions();
    console.log("Versions available:")
    versions.forEach((version: String) => {
        version = version.replace('bun-', '');
        let res = version + ""
        if (version == versions[versions.length - 1].toString().replace('bun-', '')) {
            res += "."
        } else {
            res += ", "
        }
        return res
    });
}