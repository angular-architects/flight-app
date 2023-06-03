const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "miles-app",

  exposes: {
    "./Routes": "./projects/miles-app/src/app/app.routes.ts",
    "./Miles": "projects/miles-app/src/app/miles/miles.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
