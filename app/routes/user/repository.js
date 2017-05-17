import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        var user = this.modelFor('user');
        var url = "https://api.github.com/repos/" + user.login + "/" +params.reponame;
        return Ember.$.getJSON(url).then(function(data){
            return {
                repository: data,
                user: user
            }
        });
    }
});
