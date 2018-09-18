// eslint-disable-next-line
import { mount } from '@vue/test-utils';
import Avatar from './Avatar.vue';

describe('Tests for Avatar component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Avatar);
  });

  /** @test * */
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
