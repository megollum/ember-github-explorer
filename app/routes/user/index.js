import Ember from 'ember';

export default Ember.Route.extend({
    breadCrumb: Ember.computed("crumbConfig", function () {
        return this.get("crumbConfig");
    }),
    model() {
        let user = this.modelFor("user");
        this.set("crumbConfig", { title: user.login });
        return user;
    },
    setupController(controller, model) {
        Ember.$.getJSON(model.repos_url).then((data) => {
            controller.set('repositories', data);
        })
    }
});
