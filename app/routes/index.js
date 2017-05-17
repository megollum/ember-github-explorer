import Ember from 'ember';

export default Ember.Route.extend({
    spinner: Ember.inject.service('spinner'),
    beforeModel() {
        if (this.controller) {
            this.set('controller.gitModel', null);
        }
    },
    actions: {
        performSearch(value) {
            this.set('controller.gitModel', null);
            if (value) {
                this.get('spinner').show('123');
                Ember.run.debounce(this, this._doSearch, { searchTerm: value }, 1000);
            }
        }
    },
    _doSearch: function (args) {
        let self = this;
        if (args.searchTerm) {
            Ember.$.getJSON("https://api.github.com/search/users?q=" + args.searchTerm).then(function (data) {
                self.set('controller.gitModel', data);
                self.get('spinner').hide('123');                
            });
        }
    }

});
