import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateB from '@/views/Blog/CreateB.vue'
import BlogS from '@/views/Blog/BlogS.vue'
import ApplianCesView from '@/views/Appliances/Index.vue'
import AppliancesCreate from '@/views/Appliances/Create.vue'
import JoinIndex from '@/views/Join/Index.vue'
import OxU from '@/views/Join/OxU.vue'
import PrivacyIndex from '@/views/Privacy/Index.vue'
import PrivacyCreate from '@/views/Privacy/Create.vue'
import FaQ from '@/views/FAQ/Index.vue'
import FaqCreaTe from '@/views/FAQ/CreaTe.vue'
import ContactForm from '@/views/ContactForm/Index.vue'
import ReAd from '@/views/ContactForm/ReAd.vue'
import ContactIndex from '@/views/Contact/Index.vue'
import ContactCreate from '@/views/Contact/Create.vue'
import WhyUs from '@/views/WhyUs/Index.vue'
import CreateWhy from '@/views/WhyUs/Create.vue'
import ReviewIndex from '@/views/Review/Index.vue'
import ReviewCreaTe from '@/views/Review/CreaTe.vue'
import HomeWhyUs from '@/views/HomeWhyUs/HomeWhyUs.vue'
import HomeWhyUsCreate from '@/views/HomeWhyUs/Create.vue'
import OrdeR from '@/views/Order/Index.vue'
import OrderCreate from '@/views/Order/Create.vue'
import LLotteryIndex from '@/views/Lottery/Index.vue'
import Lotterycreate from '@/views/Lottery/Create.vue'
import LotteryImageIndex from '@/views/LotteryImage/Index.vue'
import LotteryImageCreate from '@/views/LotteryImage/Create.vue'
import SliderImageCreate from '@/views/Slider/Create.vue'
import SliderIndex from '@/views/Slider/Index.vue'
import Login from '@/views/LogIn/Index.vue'
import { auth } from '@/middleware/auth'
import { log } from '@/middleware/log'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: '/',
  //   component: CreateB,
  //   meta: {
  //     middlware: log
  //   }
  // },
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      middlware: log,
    },
  },
  {
    path: '/blogitem/:id?',
    name: 'CreateB',
    component: CreateB,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/blogs',
    name: 'Blog',
    component: BlogS,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/appliances',
    name: 'Appliances',
    component: ApplianCesView,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/item/:id?',
    name: 'AppliancesCreate',
    component: AppliancesCreate,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/create',
    name: 'AppliancesCreate',
    component: AppliancesCreate,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/join',
    name: 'JoinIndex',
    component: JoinIndex,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/joinitem/:id?',
    name: 'OxU',
    component: OxU,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/privacy',
    name: 'PrivacyIndex',
    component: PrivacyIndex,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/privacyitem/:id?',
    name: 'PrivacyCreate',
    component: PrivacyCreate,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/faq',
    name: 'Faq',
    component: FaQ,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/faqitem/:id?',
    name: 'FaqCreaTe',
    component: FaqCreaTe,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/contactform',
    name: 'ContactForm',
    component: ContactForm,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/contactformitem/:id?',
    name: 'ReAd',
    component: ReAd,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/contact',
    name: 'ContactIndex',
    component: ContactIndex,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/contactitem/:id?',
    name: 'ContactCreate',
    component: ContactCreate,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/whyus',
    name: 'WhyUs',
    component: WhyUs,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/whyusitem/:id?',
    name: 'CreateWhy',
    component: CreateWhy,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/homewhyus',
    name: 'HomeWhyUs',
    component: HomeWhyUs,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/homewhyitem/:id?',
    name: 'HomeWhyUsCreate',
    component: HomeWhyUsCreate,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/order',
    name: 'Order',
    component: OrdeR,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/orderitem/:id?',
    name: 'Ordercreate',
    component: OrderCreate,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/lottery',
    name: 'LoTTery',
    component: LLotteryIndex,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/lotteryitem/:id?',
    name: 'Lotterycreate',
    component: Lotterycreate,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/lotteryimage',
    name: 'llotteryimage',
    component: LotteryImageIndex,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/lotteryimageitem/:id?',
    name: 'llotterycreateimage',
    component: LotteryImageCreate,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/sliderimage',
    name: 'sliderimage',
    component: SliderIndex,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/sliderimageitem/:id?',
    name: 'sliderimagecreate',
    component: SliderImageCreate,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/review',
    name: 'Review',
    component: ReviewIndex,
    meta: {
      middlware: auth,
    },
  },
  {
    path: '/reviewitem/:id?',
    name: 'Review',
    component: ReviewCreaTe,
    meta: {
      middlware: auth,
    },
  },
]

const router = new VueRouter({
  routes,
})

export default router
