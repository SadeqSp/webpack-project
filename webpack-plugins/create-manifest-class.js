class CreateManifestClass {
    apply(compiler) {
        compiler.hooks.done.tap(
            "CreateManifestPlugin",
            (stats) => {
                require('fs').writeFileSync(
                    require('path').join(__dirname, '../dist/manifest.json'),
                    JSON.stringify(stats.toJson().assetsByChunkName)
                );
            },
        );
    };
}

module.exports = CreateManifestClass;