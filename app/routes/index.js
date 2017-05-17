import Ember from 'ember';
import _ from 'underscore';

export default Ember.Route.extend({
    beforeModel() {
        if (this.controller) {
            this.set('controller.loading', false);
            this.set('controller.gitModel', null);
        }
    },
    actions: {
        performSearch(value) {
            if (value) {
                this.set('controller.loading', true);
                Ember.run.debounce(this, this._doSearch, { searchTerm: value }, 1000);
            } else {
                this.set('controller.loading', false);
                this.set('controller.gitModel', null);
            }
        }
    },
    _doSearch: function (args) {
        let self = this;
        if (args.searchTerm) {
            Ember.$.getJSON("https://api.github.com/search/users?q=" + args.searchTerm).then(function (data) {
                self.set('controller.loading', false);
                self.set('controller.gitModel', data);
            });
        }
    }

});
