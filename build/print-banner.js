import packageInfo from '../package.json' assert { type: 'json' };
import bannerText from './banner.json' assert { type: 'json' };

process.stdout.write(bannerText.text.replace('${version}', packageInfo.version))
process.stdin.pipe(process.stdout)
