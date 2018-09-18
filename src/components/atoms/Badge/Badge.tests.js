// eslint-disable-next-line
import { mount } from '@vue/test-utils';
import Badge from './Badge.vue';

describe('Tests for Badge component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Badge);
  });

  /** @test **/
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
