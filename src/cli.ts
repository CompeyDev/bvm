import { HELP_MENU, VERSION } from './utils/constants';
import listVersions from './commands/listVersions';
import { fetchVersions, fetchLatestVersion } from './lib/fetchVersions';
import getVersion from './commands/version';
import helpMenu from './commands/help'
import install from './commands/install';
const args = process.argv.slice(2);
const command = args[0];
const param = args[1];

async function main() {
    if (!command) {
        console.log(helpMenu());
        process.exit(0);
    }
    switch (command) {
        case "--help":
            console.log(helpMenu());
            process.exit(0);
        case "-h":
            console.log(helpMenu());
            process.exit(0);
        case "--version":
            getVersion()
            process.exit(0);
        case "-v":
            getVersion()
            process.exit(0);    
        case "--list":
            try {
                const versions = await fetchVersions();
                console.log("Versions available:")
                versions?.forEach((version: String) => {
                    version = version.replace('bun-', '');
                    process.stdout.write(version + "");
                    if (version == versions[versions.length - 1].toString().replace('bun-', '')) {
                        process.stdout.write(". ");
                    } else {
                        process.stdout.write(", ")
                    }
                });
            } catch (e) {
                console.log("Failed to fetch available versions.")
            }
            process.exit(0);
        case "--latest":
            console.log("Latest version available:")
            console.log(await fetchLatestVersion())
            process.exit(0);
        case "install":
            console.log(`Installing version ${param}...`)
            install(param);
            process.exit(0);
        case "uninstall":
            console.log('Uninstall a version');
            process.exit(0);

        default:
            helpMenu();
            process.exit(0);
    }
}

main();