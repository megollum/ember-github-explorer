import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let user = this.modelFor('user');
        return Ember.$.getJSON(user.repos_url);
    },
    setupController(controller, model) {
        controller.set('model', model);
        controller.set('user', this.modelFor('user'));
    }
});
