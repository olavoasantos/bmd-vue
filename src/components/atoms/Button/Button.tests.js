// eslint-disable-next-line
import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Tests for Button component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Button);
  });

  /** @test * */
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
