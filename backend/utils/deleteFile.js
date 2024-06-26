const path = require('path');
const fs = require('fs');

module.exports = (imageFolder, filename) => {
    try{
        const filePath = path.join(__dirname, `../public/${imageFolder}/` + filename);
        fs.unlinkSync(filePath);
    }
    catch(err){
        console.log(`Non è stato possibile eliminare la foto ${filename}.`);
    }
}