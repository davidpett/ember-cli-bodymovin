import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['bodymovin'],

  bodymovin: null,
  path: null,
  loop: true,
  autoplay: true,
  prerender: true,
  autoloadSegments: true,
  renderType: "svg",

  setupBodymovin: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      let animation = bodymovin.loadAnimation({
        container: document.getElementById(this.get('elementId')),
        autoloadSegments: this.get('autoloadSegments'),
        renderer: this.get('renderType'),
        prerender: this.get('prerender'),
        autoplay: this.get('autoplay'),
        loop: this.get('loop'),
        path: (!this.get('external')) ? `animations/${this.get('path')}.json` : this.get('path')
      });
      this.set('bodymovin', animation);
      this.sendAction('onReady', animation);
    })
  }),

  teardownBodymovin: Ember.on('willDestroyElement', function() {
    let bodymovin = this.get('bodymovin');
    if (bodymovin) {
      bodymovin.destroy();
      this.set('bodymovin', null);
    }
  })

});
