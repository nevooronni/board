import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    edit(question) {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        image: this.get('image')
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, params);
    }
  }
});
