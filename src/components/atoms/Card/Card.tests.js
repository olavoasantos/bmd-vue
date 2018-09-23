// eslint-disable-next-line
import { mount } from '@vue/test-utils';
import Card from './Card.vue';

describe('Tests for Card component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Card);
  });

  /** @test **/
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
