import Ember from 'ember';

export default Ember.Route.extend({
    user: this.modelFor('user'),
    model(params) {
        var url = "https://api.github.com/repos/" + this.get("user").login + "/" +params.reponame;
        return Ember.$.getJSON(url);
    }
});
