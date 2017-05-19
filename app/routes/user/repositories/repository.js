import Ember from 'ember';

export default Ember.Route.extend({
    breadCrumb: Ember.computed("crumbConfig", function () {
        return this.get("crumbConfig");
    }),
    model(params) {
        let user = this.modelFor("user");
        let url = "https://api.github.com/repos/" + user.login + "/" + params.reponame;
        return Ember.$.getJSON(url);
    },
    afterModel(model) {
        this.set("crumbConfig", { title: model.name });

    }
});
