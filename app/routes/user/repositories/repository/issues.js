import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var repository = this.modelFor("user.repositories.repository");
        var url = repository.issues_url.replace("{/number}", "");
        return Ember.$.getJSON(url);
    },
    setupController(controller, model){
        controller.set("model", model);
        controller.set("repository", this.modelFor("user.repositories.repository"));
        controller.set("user", this.modelFor("user"));
    }
});
