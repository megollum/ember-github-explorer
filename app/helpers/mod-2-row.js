import Ember from 'ember';

export function mod2Row(index) {
  return index%2==0;
}

export default Ember.Helper.helper(mod2Row);
