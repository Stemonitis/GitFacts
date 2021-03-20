const isTest = String(process.env.NODE_ENV) === "test";
module.exports = {
  presets: [
    ["env", { modules: isTest ? "commonjs" : false }],
    "react",
    "@babel/preset-react",
    "@babel/preset-env",
  ],
  plugins: [
    "syntax-dynamic-import",
    "transform-class-properties",
    "transform-object-rest-spread",
    "@babel/plugin-syntax-jsx",
    isTest ? "dynamic-import-node" : null,
  ].filter(Boolean),
};
