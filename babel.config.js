module.exports = {
  sourceType: 'unambiguous',
  presets: [
    ["@babel/preset-env",
      {
        "targets": {
          "esmodules": true,
        },
        "modules": false,
      }
    ],
    "@babel/preset-typescript"
  ],
  // plugins: ["external-helpers"]
}
