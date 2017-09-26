import Ember from 'ember';

var questions = [{
  id: 1,
  name: "Veruca alvus",
  content: "San Francisco"
}, {
  id: 2,
  name: "eprupioupoi",
  content: "wopripoweu"
}, {
  id: 3,
  name: "wk;jrewj;",
  content: ";lasfdkhaskjf"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
