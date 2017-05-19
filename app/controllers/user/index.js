import Ember from 'ember';

export default Ember.Controller.extend({
    sortedRepos: Ember.computed.sort('repositories', 'sortDefinition'),
    popularRepos: Ember.computed("sortedRepos", function () {
        return this.get("sortedRepos").slice(0, 6);
    }),
    sortDefinition: ['stargazers_count:desc'],
    actions: {
        goToRepo(repository) {
            this.transitionToRoute('user.repositories.repository', repository.name);
        },
        goToGitRepo(url) { 
            window.open(url, '_blank');
        }
    }
});
