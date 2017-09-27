import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    questions: this.store.findAll('question'),
    answers: this.store.findAll('answers')
  });
},

  actions: {
  saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answers', params);
      newAnswer.save();
      this.transitionTo('index');
    }
 }
});
