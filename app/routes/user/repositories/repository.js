import Ember from 'ember';

export default Ember.Route.extend({
    breadCrumb: Ember.computed("crumbConfig", function () {
        return this.get("crumbConfig");
    }),
    model(params) {
        return params
    },
    afterModel(model) {
        this.set("crumbConfig", { title: model.reponame });

    }
});
