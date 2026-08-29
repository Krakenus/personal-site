/**
 * Renders design/og-image.html to static/og-image.png at exactly 1200x630.
 *
 *     npm run og:image
 *
 * Uses a Chrome/Chromium already installed on the machine — there is no build-time
 * dependency on it, and nothing runs this automatically. Set CHROME to override:
 *
 *     CHROME=/path/to/chrome npm run og:image
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'design', 'og-image.html');
const output = path.join(root, 'static', 'og-image.png');

const WIDTH = 1200;
const HEIGHT = 630;

const CANDIDATES = [
	'google-chrome',
	'google-chrome-stable',
	'chromium',
	'chromium-browser',
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	'/Applications/Chromium.app/Contents/MacOS/Chromium',
	'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
];

function usable(binary) {
	try {
		// Resolves both absolute paths and bare names found on PATH.
		execFileSync(binary, ['--version'], { stdio: 'ignore' });
		return true;
	} catch {
		return false;
	}
}

function findChrome() {
	// An explicit override is honoured or fails — never silently replaced by
	// whatever else happens to be installed.
	if (process.env.CHROME) {
		if (usable(process.env.CHROME)) return process.env.CHROME;
		throw new Error(`CHROME is set to "${process.env.CHROME}", which is not runnable.`);
	}

	for (const candidate of CANDIDATES) {
		if (usable(candidate)) return candidate;
	}
	throw new Error(
		'No Chrome or Chromium found. Install one, or point CHROME at the binary:\n' +
			'    CHROME=/path/to/chrome npm run og:image'
	);
}

const chrome = findChrome();
console.log(`Rendering ${path.relative(root, source)} with ${chrome}`);

execFileSync(
	chrome,
	[
		'--headless',
		'--disable-gpu',
		'--hide-scrollbars',
		'--force-device-scale-factor=1',
		`--window-size=${WIDTH},${HEIGHT}`,
		// The fonts are local, but Chrome still needs a tick to lay them out.
		'--virtual-time-budget=5000',
		`--screenshot=${output}`,
		source
	],
	{ stdio: ['ignore', 'ignore', 'pipe'] }
);

if (!existsSync(output)) throw new Error(`Chrome did not write ${output}`);

// Verify the PNG header rather than trusting the exit code: a wrong-sized preview
// image is rejected or badly cropped by the crawlers this file exists for.
const png = readFileSync(output);
const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!png.subarray(0, 8).equals(signature)) throw new Error('Output is not a PNG');

const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
if (width !== WIDTH || height !== HEIGHT) {
	throw new Error(`Expected ${WIDTH}x${HEIGHT}, got ${width}x${height}`);
}

const kb = (statSync(output).size / 1024).toFixed(0);
console.log(`Wrote ${path.relative(root, output)} — ${width}x${height}, ${kb} kB`);
