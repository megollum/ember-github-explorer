import Ember from 'ember';

export default Ember.Controller.extend({
    loading: false,
    gitModel: null,

    showSpinner: Ember.computed('loading', function () {
        return this.get('loading');
    }),

    gitResult: Ember.computed('gitModel', function(){
        return this.get('gitModel');
    })
});
