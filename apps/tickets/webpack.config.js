const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  shared: {},
  // shared: {
  //   ...shareAll({
  //     singleton: true,
  //     strictVersion: true,
  //     requiredVersion: 'auto',
  //   }),
  // },
  // sharedMappings: ['@flight-demo/shared/util-auth'],
});
