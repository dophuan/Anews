import {createLocalVue, mount} from '@vue/test-utils'
import NewsItem from '@/components/TopHeadlines/Item'
import moment from 'moment'
import ElementUI from 'element-ui'
import lodash from 'lodash-es'

describe('News Item', () => {
  test('is a Vue instance', () => {
    let localVue = createLocalVue()
    localVue.use(ElementUI)
    localVue.use(moment)
    localVue.use(lodash)

    const wrapper = mount(NewsItem, {
      propsData: {
        item: {
          author:"Edmund DeMarche",
          content:"Joe Biden, the likely Democratic presidential candidate predicted Thursday that President Trump will work to delay the election amid the coronavirus outbreak, according to a pool report. \nCLICK HERE FOR THE LATEST ON THE CORONAVIRUS  \nBiden’s reported comment… [+1912 chars]",
          description:"Joe Biden, the likely Democratic presidential candidate predicted Thursday that Trump will work to delay the election amid the coronavirus outbreak, according to a pool report.",
          publishedAt:"2020-04-24T05:50:45Z",
          source:Object,
          title:"Joe Biden predicts that Trump will try and delay 2020 election - Fox News",
          url:"https://www.foxnews.com/politics/joe-biden-predicts-that-trump-will-try-and-delay-2020-election",
          urlToImage:"https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/636a1977-7e02-4372-99e9-9298408c5647/dbfa66a1-bbdb-4f6a-a53a-ed1b97741cfb/1280x720/match/image.jpg",
        }
      },
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
