const fs = require('fs');
const path = require('path');

const componentsDir = path.resolve(__dirname, 'src/components');
const outputFile = path.resolve(__dirname, 'src/globalStyles/main-alligo.scss');

const imports = fs.readdirSync(componentsDir)
    .filter(dir => fs.existsSync(path.join(componentsDir, dir, `${dir}.scss`)))
    .map(dir => `@import './components/${dir}/${dir}.scss';`)
    .join('\n');

fs.writeFileSync(outputFile, imports);
console.log('Generated main.scss with component imports!');
