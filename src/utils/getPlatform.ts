export default function main(): string {
    const platform = process.platform;
    if (platform === 'darwin') {
        return 'mac';
    } else if (platform === 'win32') {
        return 'win';
    } else if (platform === 'linux') {
        return 'linux';
    } else {
        return 'unknown';
    }
}