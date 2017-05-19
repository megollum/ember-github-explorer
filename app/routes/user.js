import Ember from 'ember';

export default Ember.Route.extend({
    breadCrumb: Ember.computed("crumbConfig", function () {
        return this.get("crumbConfig");
    }),
    model(params) {
        return Ember.$.getJSON("https://api.github.com/users/" + params.login);
    },
    afterModel(model) {
        this.set("crumbConfig", { title: model.login });
    }
});
