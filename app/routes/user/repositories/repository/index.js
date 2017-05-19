import Ember from 'ember';

export default Ember.Route.extend({
    breadCrumb: Ember.computed("crumbConfig", function () {
        return this.get("crumbConfig");
    }),
    model() {
        let repository = this.modelFor("user.repositories.repository");
        this.set("crumbConfig", { title: repository.name });
        return repository;
    }
});
