import Ember from 'ember';

export default Ember.Controller.extend({
    gitModel: null,

    gitResult: Ember.computed('gitModel', function(){
        return this.get('gitModel');
    })
});
