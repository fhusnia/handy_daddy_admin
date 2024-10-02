//Appliancemutations
export const appliancesMutations = {
  SET_APPLIANCES(state, appliance) {
    state.appliances = appliance;
  },

  ADD_APPLIANCE(state, appliance) {
    state.appliances.push(appliance);
  },

  UPDATE_APPLIANCE(state, updatedAppliance) {
    const index = state.appliances.findIndex(
      (appliance) => appliance.id === updatedAppliance.id,
    );
    if (index !== -1) {
      state.appliances.splice(index, 1, updatedAppliance);
    }
  },

  GETID_APPLIANCES(state, appliance) {
    state.appliance = appliance;
  },

  DELETE_APPLIANCE(state, id) {
    state.appliances = state.appliances.filter(
      (appliance) => appliance.id !== id,
    );
  },
};

//BlogMutations

export const BlogMutations = {
  SET_BLOG(state, blog) {
    state.blogs = blog;
  },
  ADD_BLOG(state, blog) {
    state.blogs.push(blog);
  },
  UPDATE_BLOG(state, updateBlog) {
    const index = state.blogs.findIndex((blog) => blog.id === updateBlog.id);
    if (index !== -1) {
      state.blogs.splice(index, 1, updateBlog);
    }
  },
  GET_BLOG_ID(state, blog) {
    state.blog = blog;
  },
  DELETE_BLOG(state, id) {
    state.blogs = state.blogs.filter((blog) => blog.id !== id);
  },
};

//CONTACT

export const ContactMutations = {
  SET_CONTACT(state, contact) {
    state.contacts = contact;
  },
  ADD_CONTACT(state, contact) {
    state.contacts.push(contact);
  },
  EDIT_CONTACT(state, updateContact) {
    const index = state.contacts.findIndex(
      (contact) => contact.id === updateContact.id,
    );
    if (index !== -1) {
      state.contacts.splice(index, 1, updateContact);
    }
  },
  GET_CONTACT_ID(state, contact) {
    state.contact = contact;
  },
  DELETE_CONTACT(state, id) {
    state.contacts = state.contacts.filter((contact) => contact.id !== id);
  },
};

//CONTACTFORM

export const ContactFormMutations = {
  SET_CONTACTFORM(state, contactform) {
    state.contactforms = contactform;
  },
  GET_CONTACTFORM_ID(state, contactform) {
    state.contactform = contactform;
  },
  DELETE_CONTACTFORM(state, id) {
    state.contactforms = state.contactforms.filter(
      (contactform) => contactform.id !== id,
    );
  },
};

//FAQ

export const FaqMutations = {
  SET_FAQ(state, faq) {
    state.faqs = faq;
  },
  ADD_FAQ(state, faq) {
    state.faqs.push(faq);
  },
  EDIT_FAQ(state, updateFaq) {
    const index = state.faqs.findIndex((faq) => faq.id === updateFaq.id);
    if (index !== -1) {
      state.faq.splice(index, 1, updateFaq);
    }
  },
  GET_FAQ_ID(state, faq) {
    state.faq = faq;
  },
  DELETE_FAQ(state, id) {
    state.faqs = state.faqs.filter((faq) => faq.id !== id);
  },
};

//HOMEWHYUS

export const HOMEWHYUSMutations = {
  SET_HOMEWHYUS(state, homewhyus) {
    state.homewhyuss = homewhyus;
  },
  ADD_HOMEWHYUS(state, homewhyus) {
    state.homewhyuss.push(homewhyus);
  },
  EDIT_HOMEWHYUS(state, updateHomewhyus) {
    const index = state.homewhyuss.findIndex(
      (homewhyus) => homewhyus.id === updateHomewhyus.id,
    );
    if (index !== -1) {
      state.homewhyus.splice(index, 1, updateHomewhyus);
    }
  },
  GET_HOMEWHYUS_ID(state, homewhyus) {
    state.homewhyus = homewhyus;
  },
  DELETE_HOMEWHYUS(state, id) {
    state.homewhyuss = state.homewhyuss.filter(
      (homewhyus) => homewhyus.id !== id,
    );
  },
};

//JOIN

export const JOINMutations = {
  SET_JOIN(state, join) {
    state.joins = join;
  },
  GET_JOIN_ID(state, join) {
    state.join = join;
  },
  DELETE_JOIN(state, id) {
    state.joins = state.joins.filter((join) => join.id !== id);
  },
};

//LOTTERY

export const LOTTERYMutations = {
  SET_LOTTERY(state, lottery) {
    state.lotteries = lottery;
  },
  ADD_LOTTERY(state, lottery) {
    state.lotteries.push(lottery);
  },
  EDIT_LOTTERY(state, updateLottery) {
    const index = state.lotteries.findIndex(
      (lottery) => lottery.id === updateLottery.id,
    );
    if (index !== -1) {
      state.lottery.splice(index, 1, updateLottery);
    }
  },
  GET_LOTTERY_ID(state, lottery) {
    state.lottery = lottery;
  },
  DELETE_LOTTERY(state, id) {
    state.lotteries = state.lotteries.filter((lottery) => lottery.id !== id);
  },
};

//LOTTERYIMAGE
export const LOTTERYIMAGEMutations = {
  SET_LOTTERYIMAGE(state, lotteryimage) {
    state.lotteryimages = lotteryimage;
  },
  ADD_LOTTERYIMAGE(state, lotteryimage) {
    state.lotteryimages.push(lotteryimage);
  },
  EDIT_LOTTERYIMAGE(state, updateLottery) {
    const index = state.lotteryimages.findIndex(
      (lotteryimage) => lotteryimage.id === updateLottery.id,
    );
    if (index !== -1) {
      state.lotteryimages.splice(index, 1, updateLottery);
    }
  },
  GET_LOTTERYIMAGE_ID(state, lotteryimage) {
    state.lotteryimage = lotteryimage;
  },
  DELETE_LOTTERYIMAGE(state, id) {
    state.lotteryimages = state.lotteryimages.filter(
      (lotteryimage) => lotteryimage.id !== id,
    );
  },
};

//ORDER

export const OrderMutations = {
  SET_ORDER(state, order) {
    state.orders = order;
  },
  GET_ORDER_ID(state, order) {
    state.order = order;
  },
  DELETE_ORDER(state, id) {
    state.orders = state.orders.filter((order) => order.id !== id);
  },
};

//PRIVACY

export const PrivacyMutations = {
  SET_PRIVACY(state, privacy) {
    state.privacies = privacy;
  },
  ADD_PRIVACY(state, privacy) {
    state.privacies.push(privacy);
  },
  EDIT_PRIVACY(state, updatePrivacy) {
    const index = state.privacies.findIndex(
      (privacy) => privacy.id === updatePrivacy.id,
    );
    if (index !== -1) {
      state.privacy.splice(index, 1, updatePrivacy);
    }
  },
  GET_PRIVACY_ID(state, privacy) {
    state.privacy = privacy;
  },
  DELETE_PRIVACY(state, id) {
    state.privacies = state.privacies.filter((privacy) => privacy.id !== id);
  },
};

//WHYUS

export const WhyusMutations = {
  SET_WHYUS(state, whyus) {
    state.whyuss = whyus;
  },
  ADD_WHYUS(state, whyus) {
    state.whyuss.push(whyus);
  },
  EDIT_WHYUS(state, updateWhyus) {
    const index = state.whyuss.findIndex(
      (whyus) => whyus.id === updateWhyus.id,
    );
    if (index !== -1) {
      state.lottery.splice(index, 1, updateWhyus);
    }
  },
  GET_WHYUS_ID(state, whyus) {
    state.whyus = whyus;
  },
  DELETE_WHYUS(state, id) {
    state.whyuss = state.whyuss.filter((whyus) => whyus.id !== id);
  },
};

//REVIEW

export const ReviewMutations = {
  SET_REVIEW(state, review) {
    state.reviews = review;
  },
  ADD_REVIEW(state, review) {
    state.reviews.push(review);
  },
  EDIT_REVIEW(state, updateReview) {
    const index = state.reviews.findIndex(
      (review) => review.id === updateReview.id,
    );
    if (index !== -1) {
      state.reviews.splice(index, 1, updateReview);
    }
  },
  GET_REVIEW_ID(state, review) {
    state.review = review;
  },
  DELETE_REVIEW(state, id) {
    state.reviews = state.reviews.filter((review) => review.id !== id);
  },
};

//SLIDERIMAGE

export const SliderImageMutations = {
  SET_SLIDERIMAGE(state, sliderimage) {
    state.sliderimages = sliderimage;
  },
  ADD_SLIDERIMAGE(state, sliderimage) {
    state.sliderimages.push(sliderimage);
  },

  EDIT_SLIDERIMAGE(state, updateImage) {
    const index = state.sliderimages.findIndex(
      (sliderimage) => sliderimage.id === updateImage.id,
    );
    if (index !== -1) {
      state.sliderimages.splice(index, 1, updateImage);
    }
  },
  GET_SLIDERIMG_ID(state, sliderimage) {
    state.sliderimage = sliderimage;
  },
  DELETE_SLIDERIMAGE(state, id) {
    state.sliderimages = state.sliderimages.filter(
      (sliderimage) => sliderimage.id !== id,
    );
  },
};
