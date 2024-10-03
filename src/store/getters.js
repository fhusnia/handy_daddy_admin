//Appliancegetters
export const applianceGetters = {
  appliances: (state) => state.appliances,

  getAppliance: (state) => (id) => {
    const endvalue =
      state.appliances.find((appliance) => appliance.id === id) || null
    return endvalue
  },
}

//BlogGetters

export const blogGetters = {
  blogs: (state) => state.blogs,

  getBlog: (state) => (id) => {
    const endvalue = state.blogs.find((blog) => blog.id === id) || null
    return endvalue
  },
}

//CONTACT

export const contactGetters = {
  contacts: (state) => state.contacts,

  getContact: (state) => (id) => {
    const endvalue = state.contacts.find((contact) => contact.id === id) || null
    return endvalue
  },
}

//ContactForm

export const contactformGetters = {
  contactforms: (state) => state.contactforms,

  getContactform: (state) => (id) => {
    const endvalue =
      state.contactforms.find((contactform) => contactform.id === id) || null
    return endvalue
  },
}

///FAQ

export const faqGetters = {
  faqs: (state) => state.faqs,

  getFaq: (state) => (id) => {
    const endvalue = state.faqs.find((faq) => faq.id === id) || null
    return endvalue
  },
}

//HOMEWHYUS

export const homewhyusGetters = {
  homewhyuss: (state) => state.homewhyuss,

  getHomewhyus: (state) => (id) => {
    const endvalue =
      state.homewhyuss.find((homewhyus) => homewhyus.id === id) || null
    return endvalue
  },
}

//JOIN

export const joinGetters = {
  joins: (state) => state.joins,

  getJoin: (state) => (id) => {
    const endvalue = state.joins.find((join) => join.id === id) || null
    return endvalue
  },
}

//Lottery

export const lotteryGetters = {
  lotteries: (state) => state.lotteries,

  getLottery: (state) => (id) => {
    const endvalue =
      state.lotteries.find((lottery) => lottery.id === id) || null
    return endvalue
  },
}

//LotteryImage

export const lotteryImageGetters = {
  lotteryImages: (state) => state.lotteryimages,

  getlotteryImage: (state) => (id) => {
    const endvalue =
      state.lotteryimages.find((lotteryimage) => lotteryimage.id === id) || null
    return endvalue
  },
}

//Order

export const orderGetters = {
  orders: (state) => state.orders,

  getorder: (state) => (id) => {
    const endvalue = state.orders.find((order) => order.id === id) || null
    return endvalue
  },
}

//Privacy
export const privacyGetters = {
  privacies: (state) => state.privacies,

  getprivacy: (state) => (id) => {
    const endvalue =
      state.privacies.find((privacy) => privacy.id === id) || null
    return endvalue
  },
}

//whyus

export const whyusGetters = {
  whyuss: (state) => state.whyuss,

  getwhyus: (state) => (id) => {
    const endvalue = state.whyuss.find((whyus) => whyus.id === id) || null
    return endvalue
  },
}

//Review

export const reviewGetters = {
  reviews: (state) => state.reviews,

  getreview: (state) => (id) => {
    const endvalue = state.reviews.find((review) => review.id === id) || null
    return endvalue
  },
}

//SLIDERIMG

export const SliderImageGetters = {
  sliderImages: (state) => state.sliderimages,

  getSliderImage: (state) => (id) => {
    const endvalue =
      state.sliderimages.find((sliderimage) => sliderimage.id === id) || null
    return endvalue
  },
}
