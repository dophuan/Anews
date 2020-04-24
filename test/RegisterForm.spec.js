import { mount } from '@vue/test-utils'
import RegisterForm from '@/components/Register'

describe('Register Form', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(RegisterForm, {
      propsData: {
        dialogVisible: true
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
