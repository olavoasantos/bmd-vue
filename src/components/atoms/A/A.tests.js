// eslint-disable-next-line
import { mount } from '@vue/test-utils';
import A from './A.vue';

describe('Tests for A component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(A);
  });

  /** @test **/
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
