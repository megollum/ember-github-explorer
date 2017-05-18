import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        searchCall(value){
            console.log(value);
            let url= "https://api.github.com/search/users?q="+value;
            return Ember.$.getJSON(url);
        },
        navigateToUser(login){
            this.transitionToRoute("user", login);
        }        
    }
});
