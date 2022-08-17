import { HELP_MENU, VERSION } from './utils/constants';
import listVersions from './commands/listVersions';
import { fetchVersions } from './lib/fetchVersions';

const args = process.argv.slice(2);
const command = args[0];

async function main() {
    if (!command) {
        console.log(HELP_MENU);
        process.exit(0);
    }
    switch (command) {
        case "--help":
            console.log("Zero");
            process.exit(0);
        case "--version":
            console.log(`Bun Version Manager (v${VERSION})`);
            process.exit(0);
        case "--list":
            const versions = await fetchVersions();
            console.log("Versions available:")
            versions.forEach((version: String) => {
                version = version.replace('bun-', '');
                process.stdout.write(version + "");
                if (version == versions[versions.length - 1].toString().replace('bun-', '')) {
                    process.stdout.write(". ");
                } else {
                    process.stdout.write(", ")
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
            console.log(HELP_MENU)
            process.exit(0)
    }
}

main()