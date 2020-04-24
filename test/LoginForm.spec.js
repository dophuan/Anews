import { mount } from '@vue/test-utils'
import LoginForm from '@/components/Login'

describe('Login Form', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LoginForm, {
      propsData: {
        dialogVisible: true
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
