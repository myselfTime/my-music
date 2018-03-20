import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './css/app.css'
import { Swipe, SwipeItem ,Button} from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(MintUI);
Vue.use(VueRouter);

const routes = [
  {
    path:'*',
    redirect:'/'
  }
];
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
