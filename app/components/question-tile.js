import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  favoriteQuestions: Ember.inject.service(),

  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    addToFavorite(question) {
      this.get('favoriteQuestions').add(question);
    }
  }
});
