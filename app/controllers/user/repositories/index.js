import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        goToRepo(repository) {
            this.transitionToRoute('user.repositories.repository', repository.name);
        }
    }
});
