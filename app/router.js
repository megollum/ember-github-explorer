import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('user', { path: '/user/:login' }, function() {
    this.route('repositories');
    this.route('repository', {path: '/repository/:reponame'}, function() {
      this.route('issues');
      this.route('forks');
      this.route('commits');
    });
  });
});

export default Router;
