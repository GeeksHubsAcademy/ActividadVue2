import Vue from 'vue'
import App from './App.vue'

Vue.directive('debug', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
        console.dir(el);
    }
});
Vue.filter('queEmpiezanConJota', function(v) {
  return v.length && v.filter(i => typeof(i)==='string' &&  i[0].toLowerCase() === 'j');
});

new Vue({
  el: '#app',
  render: h => h(App)
})
