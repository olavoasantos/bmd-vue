// eslint-disable-next-line
import { mount } from '@vue/test-utils';
import Code from './Code.vue';

describe('Tests for Code component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Code);
  });

  /** @test **/
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
