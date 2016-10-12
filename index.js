/* jshint node: true */
'use strict';

module.exports = {
  name: 'bodymovin',

  included: function(app) {
    this._super.included(app);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      this.ui.writeLine("Let's get bodymovin!");
      app.import('vendor/bodymovin.js');
    }
  },

  isDevelopingAddon: function() {
    return true;
  }
};
