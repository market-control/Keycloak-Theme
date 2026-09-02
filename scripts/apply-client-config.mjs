/* eslint-env node */
import fs from 'fs';

const primaryColor = process.env.PRIMARY_COLOR;
const backgroundPath = process.env.BACKGROUND_IMAGE_PATH;

if (!primaryColor) {
    console.error('Falta PRIMARY_COLOR');
    process.exit(1);
}

const template = fs.readFileSync('src/login/main.css.template', 'utf8');
fs.writeFileSync('src/login/main.css', template.replace('__PRIMARY_COLOR__', primaryColor));

if (backgroundPath) {
    fs.copyFileSync(backgroundPath, 'src/login/assets/background.png');
}

console.log('Client config applied:', primaryColor, backgroundPath || '(without custom image)');