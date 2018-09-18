import * as components from '@/components';

export function install(Vue) {
  Vue.component('Avatar', components.Avatar);
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
