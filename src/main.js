import Vue from 'vue';
import App from './App.vue';
import { Form, FormItem, Input, Button, Popover, Menu, MenuItem, Select, Option, Switch, Table, TableColumn } from 'element-ui';

import 'normalize.css';
import './styles/common.css';

Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false;

Vue
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Button)
  .use(Popover)
  .use(Menu)
  .use(MenuItem)
  .use(Select)
  .use(Option)
  .use(Switch)
  .use(Table)
  .use(TableColumn)


new Vue({
  render: h => h(App),
}).$mount('#app')
