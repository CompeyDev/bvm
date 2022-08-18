import { fetchVersions } from "../lib/fetchVersions";

export default async function main(version: String): Promise<void|string|undefined> {
    const versions: Array<String>|undefined = await fetchVersions();
    (versions)?.forEach((fetched: String) => {
        if (fetched == version) {
            // Install it
        } else {
            return "Version not found."
        }
    })
}