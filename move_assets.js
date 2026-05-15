const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
    console.log('--- Created /public directory! ---');
}

const filesToMove = ['cinama.mp4', 'kissfm.mp4', 'food.mp4'];

filesToMove.forEach((filename) => {
    const source = path.join(__dirname, 'src', filename);
    const dest = path.join(__dirname, 'public', filename);
    
    try {
        if (fs.existsSync(source)) {
            fs.copyFileSync(source, dest);
            console.log(`SUCCESS: ${filename} relocated to public!`);
        } else {
            console.log(`SKIPPED: ${filename} not found in src.`);
        }
    } catch (err) {
        console.log(`ERROR copying ${filename}:`, err.message);
    }
});
