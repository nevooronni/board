import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    edit(question, params) {
      this.sendAction('edit', question, params);
    },
    delete(question) {
     if (confirm('Are you sure you want to delete this question?')) {
       this.sendAction('destroyQuestion', question);
     }
   }
  }
});
