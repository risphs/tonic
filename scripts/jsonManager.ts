const fs = require('fs');

function generateFiles() {
    fs.writeFileSync('tonic.json', JSON.stringify('{}'));
}


function addPackageData(packageName: String, id: String, version: Number, dev: Boolean, verified: Boolean) {
    const data = {
        packageName: {
            "version": version,
            "verified": verified,
            "id": id,
            "dev": dev
        }
    }
}

function appendJsonData(additionalData: String) {
    const parsedData = JSON.parse(fs.readFileSync('tonic.json', 'utf8')).slice(1, -1);
    const newData = '{' + parsedData + ', ' + additionalData + '}';
    console.log(newData);
    fs.writeFileSync('tonic.json', newData);
}

export { generateFiles, addPackageData, appendJsonData };