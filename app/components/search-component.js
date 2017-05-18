import Ember from 'ember';

export default Ember.Component.extend({
    spinner: Ember.inject.service('spinner'),
    actions: {
        performSearch(value) {
            this.set("result", undefined);
            if (value) {
                Ember.run.debounce(this, this._doSearch, { value: value }, 1000);
            } else {
                this.onSearchComplete(null);
            }
        }
    },
    _doSearch: function (args) {
        this.get('spinner').show('search-component');
        this.onSearch(args.value).then((data) => {
            this.onSearchComplete(data);
            this.set('result', data);
            this.get('spinner').hide('search-component');
        });
    }
});
