import Ember from 'ember';
import _ from 'underscore';

export default Ember.Component.extend({
    filteredModel: Ember.computed('model', 'value', function () {
        if (this.value) {
            return _.filter(this.model, (item) => item[this.filterField].toLowerCase().indexOf(this.value.toLowerCase()) !== -1);
        } else {
            return this.model;
        }
    })
});
