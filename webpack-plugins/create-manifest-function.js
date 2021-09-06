const fs = require('fs');
const path = require('path');

function CreateManifestFunction() {};

// A: one function
// CreateManifestFunction.prototype.apply = (compiler) => {
//     compiler.hooks.done.tap(
//         "CreateManifestFunction",
//         (stats) => {
//             fs.writeFileSync(
//                 path.join(__dirname, '../dist/manifest.json'),
//                 JSON.stringify(stats.toJson().assetsByChunkName)
//             );
//         },
//     );
// };


// B: two functions
CreateManifestFunction.prototype.apply = function(compiler) {
    compiler.hooks.done.tap(
        "CreateManifestFunction",
        this.writeManifest,
    );
};
CreateManifestFunction.prototype.writeManifest = function(stats) {
    fs.writeFileSync(
        path.join(__dirname, '../dist/manifest.json'),
        JSON.stringify(stats.toJson().assetsByChunkName)
    );
};


module.exports = CreateManifestFunction