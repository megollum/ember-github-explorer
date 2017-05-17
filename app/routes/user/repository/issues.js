import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var repositoryModel = this.modelFor('user.repository');
        var url = repositoryModel.repository.issues_url.replace('{/number}','')
        return Ember.$.getJSON(url);
    }
});
