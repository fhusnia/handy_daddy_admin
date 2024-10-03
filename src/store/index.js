import Vue from 'vue'
import Vuex from 'vuex'
import { Appliances } from './modules/appliances'
import { Blog } from './modules/blog'
import { Contact } from './modules/contact'
import { ContactForm } from './modules/contactform'
import { Faq } from './modules/faq'
import { HomeWhyUS } from './modules/homewhyus'
import { Join } from './modules/join'
import { Lottery } from './modules/lottery'
import { LotteryImage } from './modules/lotteryimage'
import { Order } from './modules/order'
import { Privacy } from './modules/privacy'
import { WhyuS } from './modules/whyus'
import { Review } from './modules/review'
import { SliderImage } from './modules/slider'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    appliances: Appliances,
    blogs: Blog,
    contacts: Contact,
    contactforms: ContactForm,
    faqs: Faq,
    homewhyuss: HomeWhyUS,
    joins: Join,
    lotteries: Lottery,
    lotteryimages: LotteryImage,
    orders: Order,
    privacies: Privacy,
    whyuss: WhyuS,
    reviews: Review,
    sliderimages: SliderImage,
  },
})

export default store
