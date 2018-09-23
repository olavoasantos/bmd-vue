import * as components from '@/components';

export function install(Vue) {
  Vue.component('Card', components.Card);
  Vue.component('Badge', components.Badge);
  Vue.component('Avatar', components.Avatar);
  Vue.component('Button', components.Button);
}

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use({ install });
}

export default { install };
