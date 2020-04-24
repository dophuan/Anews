import { mount } from '@vue/test-utils'
import TopHeadlinesHeader from '../components/TopHeadlines/Header'
import { createLocalVue } from "@vue/test-utils"
import ElementUI from 'element-ui'

describe('Top Header', () => {
  test('Match snapshot', () => {
    let localVue = createLocalVue()
    localVue.use(ElementUI)
    const wrapper = mount(TopHeadlinesHeader, {
      propsData: {
        news: [{
          urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/200424015649-dak-prescott-file-super-tease.jpg",
          url: "https://www.cnn.com/2020/04/24/us/jace-prescott-cowboys-quarterback-brother-dies-spt-trnd/index.html",
          source: {
            id: "cnn",
            name: "CNN",
          },
          publishedAt: "2020-04-24T06:54:52Z",
          description: "Jace Prescott, the older brother of Dallas Cowboys quarterback Dak Prescott, died Thursday, the team said in a statement.",
        }],
      },
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
