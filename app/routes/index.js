import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            devs: [
                { login: 'robconery', name:'Rob Conery' },
                { login: 'shanselman', name:'Scott Hanselman' },
                { login: 'tomdale', name:'Tom Dale' },
                { login: 'wycats', name:'Yehuda Katz' },
                { login: 'jongalloway', name:'Jon Galloway' },
                { login: 'haacked', name:'Phil Haack' }
            ],
            todaysDate: Ember.computed(function(){
                return new Date();
            })
        };
    },
    actions: {
        clickMe() {
            alert("Don't click me");
        }
    }
});
