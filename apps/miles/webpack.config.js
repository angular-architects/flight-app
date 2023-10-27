const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'miles',

  exposes: {
    './Component': './apps/miles/src/app/app.component.ts',
  },

  shared: {
    // package.json > depenencies
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },

  // skip: [
  //   '@angular/common/testing'
  // ]
});
