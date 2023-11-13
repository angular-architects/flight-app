const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'miles',

  exposes: {
    './Routes': './apps/miles/src/app/app.routes.ts',
    './Miles': './apps/miles/src/app/miles/miles.component.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
