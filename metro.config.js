// const { getDefaultConfig } = require("@expo/metro-config");

// const defaultConfig = getDefaultConfig(__dirname);
// defaultConfig.resolver.assetExts.push("cjs");

// module.exports = getDefaultConfig(__dirname);

const { getDefaultConfig } = require("metro-config");
const {
  getDefaultConfig: getDefaultExpoConfig,
} = require("@expo/metro-config");

module.exports = (async () => {
  const defaultMetroConfig = await getDefaultConfig();
  const defaultExpoConfig = getDefaultExpoConfig(__dirname);

  // Combine resolver config from both snippets
  const resolverConfig = {
    assetExts: [
      ...defaultMetroConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
      "cjs", // Add "cjs" to assetExts
    ],
    sourceExts: [
      ...defaultMetroConfig.resolver.sourceExts,
      "svg", // Add "svg" to sourceExts
    ],
  };

  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: resolverConfig,
  };
})();
