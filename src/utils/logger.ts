// import os from 'os';
import kleur from 'kleur'; 
// import logUpdate from 'log-update';

let divider: string
function setLineLength () {
  divider = Array(process.stdout.columns || 32).join('-')
}
setLineLength()
process.stdout.on('resize', setLineLength)

const progressStyle = kleur.bold().inverse
const errorStyle = kleur.black().bold().bgRed
const statusStyle = kleur.green().italic
const warningStyle = kleur.black().bold().bgYellow
const downloadStyle = kleur.blue().bold
const downloadedStyle = kleur.bold().green
const unzippedStyle = kleur.bold().magenta
const uninstalledStyle = kleur.bold().red

const cmdDirStyle = kleur.blue
const cmdCmdStyle = kleur.green
const cmdArrowStyle = kleur.magenta

function progress (message: string) {
  console.log(progressStyle("INFO") + ' ' + message)
}

function info (message: string) {
  console.log(statusStyle("INFO") + ' ' + message)
}

function error (message: string) {
  console.error(errorStyle("ERROR") + ' ' + message)
}

function warn (message: string) {
  console.warn(warningStyle("WARN") + ' ' + message)
}

function download (name: string, version: string) {
  console.log(downloadStyle("Downloading:") + ' ' + name + '@' + version + '.')
}

function downloaded (name: string, version: string) {
  console.log(downloadedStyle("Downloaded:") + ' ' + name + '@' + version + '.')
}

function unzipped (name: string, version: string) {
  console.log(unzippedStyle("Unzipped:") + ' ' + name + '@' + version + '.')
}

function uninstalled (pkgname: any) {
  console.log(uninstalledStyle("Uninstalled ") + pkgname + " from the packages directory.")
}

function pkgjsonremove (pkgname: any) {
  console.log(uninstalledStyle("Removed ") + pkgname + " from packages.json.")
}

function pkgjsonerr (pkgname: any) {
  console.log(uninstalledStyle('Package ') + pkgname + uninstalledStyle(' not found in package.json.'))
}


// function updateStatus (projectUpdateStatus) {
//  const statusLines = Object.values(projectUpdateStatus).map(entry =>
//    `${kleur.bold(entry.name)} (${entry.ref}): ${kleur.green().italic(entry.phase)}`
//  )
//  logUpdate(statusLines.join(os.EOL))
// }

function command (dir: any, cmd: any, args: any[]) {
  console.log(divider)
  if (dir)
    console.log(cmdDirStyle(dir))
  console.log(`${cmdArrowStyle('>')} ${cmdCmdStyle(cmd)} ${args.join(' ')}`)
}

export = {
  progress,
  info,
  error,
  warn,
  command,
  download,
  downloaded,
  unzipped,
  uninstalled,
  pkgjsonremove,
  pkgjsonerr
} 
