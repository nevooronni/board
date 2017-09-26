import Ember from 'ember';

export default Ember.Component.extend({
  addNeWQuestion: false,
    actions: {
      questionFormShow() {
        this.set('addNeWQuestion', true);
      },

      saveQuestion1() {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.set('addNeWQuestion', false);
      this.sendAction('saveQuestion12', params);
    }
  }
});
