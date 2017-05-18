import Ember from 'ember';

export default Ember.Controller.extend({
    _collapsed: null,
    extended: Ember.computed("_collapsed", function(){
        return !this.get("_collapsed");
    }),
    actions: {
        searchCall(value){
            let url= "https://api.github.com/search/users?q="+value;
            return Ember.$.getJSON(url);
        },
        navigateToUser(login){
            this.transitionToRoute("user", login);
        },
        toggleNavbar(value){
            this.set('_collapsed', value);
        }     
    }
});
