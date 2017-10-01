import Ember from 'ember';

export default Ember.Component.extend({
  display: Ember.computed('answer.name', 'answer.content', function() {
      return this.get('answer.name') + '-' + this.get('answer.content');
  }),
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
