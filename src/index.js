import AutoDrag from './core';

/* istanbul ignore next */
AutoDrag.install = function(Vue) {
  Vue.component(AutoDrag.name, AutoDrag);
};
 
export default AutoDrag;