import {
  getAllAppliances,
  createAppliance,
  updateAppliance,
  deleteAppliance,
  getApplianceById,
} from "@/api/appliances";
//Appliances
export const appliancesActions = {
  async fetchAppliances({ commit }) {
    try {
      const response = await getAllAppliances();
      commit("SET_APPLIANCES", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },

  async createAppliance({ commit }, appliance) {
    try {
      const response = await createAppliance(appliance);
      commit("ADD_APPLIANCE", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },

  async updateAppliance({ commit }, { id, appliance }) {
    try {
      const response = await updateAppliance(id, appliance);
      commit("UPDATE_APPLIANCE", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },

  async getID({ commit }, id) {
    try {
      const response = await getApplianceById(id);
      localStorage.setItem("vuexState", JSON.stringify(response.data));
      commit("GETID_APPLIANCES", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },

  async deleteAppliance({ commit }, id) {
    try {
      await deleteAppliance(id);
      commit("DELETE_APPLIANCE", id);
    } catch (error) {
      console.error("Fail", error);
    }
  },
};

///BLOG
import {
  getAllBlog,
  getBlogId,
  createBlog,
  updateBlog,
  deleteBlog,
} from "@/api/blog";

export const BlogAction = {
  async fetchBlog({ commit }) {
    try {
      const response = await getAllBlog();
      commit("SET_BLOG", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },
  async createBlog({ commit }, blog) {
    try {
      const response = await createBlog(blog);
      commit("ADD_BLOG", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async updateBlog({ commit }, { id, blog }) {
    try {
      const response = await updateBlog(id, blog);
      commit("EDIT_BLOG", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async getBlogID({ commit }, id) {
    try {
      const response = await getBlogId(id);
      localStorage.setItem("getBlog", JSON.stringify(response.data));
      commit("GET_BLOG_ID", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteBlog({ commit }, id) {
    try {
      await deleteBlog(id);
      commit("DELETE_BLOG", id);
    } catch (error) {
      console.log(error);
    }
  },
};

//Contact
import {
  getAllContact,
  createContact,
  getContactId,
  updateContact,
  deleteContact,
} from "@/api/contact";

export const ContactAction = {
  async getAllContact({ commit }) {
    try {
      const response = await getAllContact();
      console.log(response.data);
      commit("SET_CONTACT", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },
  async createContact({ commit }, contact) {
    try {
      const response = await createContact(contact);
      commit("ADD_CONTACT", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async updateContact({ commit }, { id, contact }) {
    try {
      const response = await updateContact(id, contact);
      commit("EDIT_CONTACT", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async getContactId({ commit }, id) {
    try {
      const response = await getContactId(id);
      localStorage.setItem("getContact", JSON.stringify(response.data));
      commit("GET_CONTACT_ID", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteContact({ commit }, id) {
    try {
      await deleteContact(id);
      commit("DELETE_CONTACT", id);
    } catch (error) {
      console.log(error);
    }
  },
};

//CONTACTFORM

import {
  getAllContactform,
  deleteContactform,
  getContactformID,
} from "@/api/contactform";

export const ContactFormAction = {
  async getAllContactform({ commit }) {
    try {
      const response = await getAllContactform();
      commit("SET_CONTACTFORM", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },
  async getContactformID({ commit }, id) {
    try {
      const response = await getContactformID(id);
      localStorage.setItem("getContactform", JSON.stringify(response.data));
      commit("GET_CONTACTFORM_ID", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteContactform({ commit }, id) {
    try {
      await deleteContactform(id);
      commit("DELETE_CONTACTFORM", id);
    } catch (error) {
      console.log(error);
    }
  },
};

///FAQ

import {
  getAllFaq,
  getFaqId,
  createFaq,
  updateFaq,
  deleteFaq,
} from "@/api/faq";

export const FaqAction = {
  async getAllFaq({ commit }) {
    try {
      const response = await getAllFaq();
      commit("SET_FAQ", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },
  async createFaq({ commit }, faq) {
    try {
      const response = await createFaq(faq);
      commit("ADD_FAQ", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async updateFaq({ commit }, { id, faq }) {
    try {
      const response = await updateFaq(id, faq);
      commit("EDIT_FAQ", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async getFaqId({ commit }, id) {
    try {
      const response = await getFaqId(id);
      localStorage.setItem("getFaq", JSON.stringify(response.data));
      commit("GET_FAQ_ID", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteFaq({ commit }, id) {
    try {
      await deleteFaq(id);
      commit("DELETE_FAQ", id);
    } catch (error) {
      console.log(error);
    }
  },
};

//HOMEWHYUS

import {
  getAllHomewhyus,
  deleteHomewhyus,
  createHomewhyus,
  updateHomewhyus,
  getHomewhyusId,
} from "@/api/homewhyus";

export const HomeWhyUsAction = {
  async getAllHomewhyus({ commit }) {
    try {
      const response = await getAllHomewhyus();
      commit("SET_HOMEWHYUS", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },
  async createHomewhyus({ commit }, homewhyus) {
    try {
      const response = await createHomewhyus(homewhyus);
      commit("ADD_HOMEWHYUS", response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async updateHomewhyus({ commit }, { id, homewhyus }) {
    try {
      const response = await updateHomewhyus(id, homewhyus);
      commit("EDIT_HOMEWHYUS", response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async getHomewhyusId({ commit }, id) {
    try {
      const response = await getHomewhyusId(id);
      localStorage.setItem("getHomewhyus", JSON.stringify(response.data));
      commit("GET_HOMEWHYUS_ID", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteHomewhyus({ commit }, id) {
    try {
      await deleteHomewhyus(id);
      commit("DELETE_HOMEWHYUS", id);
    } catch (error) {
      console.log(error);
    }
  },
};

//JOIN

import { getAllJoin, getJoinId, deleteJoin } from "@/api/join";

export const JoinAction = {
  async getAllJoin({ commit }) {
    try {
      const response = await getAllJoin();
      commit("SET_JOIN", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },
  async getJoinId({ commit }, id) {
    try {
      const response = await getJoinId(id);
      localStorage.setItem("getJoin", JSON.stringify(response.data));
      commit("GET_JOIN_ID", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteJoin({ commit }, id) {
    try {
      await deleteJoin(id);
      commit("DELETE_JOIN", id);
    } catch (error) {
      console.log(error);
    }
  },
};

//LOTTERY

import {
  getAllLottery,
  createLottery,
  updateLottery,
  getLotteryId,
  deleteLottery,
} from "@/api/lottery";

export const LotteryAction = {
  async getAllLottery({ commit }) {
    try {
      const response = await getAllLottery();
      commit("SET_LOTTERY", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },
  async createLottery({ commit }, lottery) {
    try {
      const response = await createLottery(lottery);
      commit("ADD_LOTTERY", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async updateLottery({ commit }, { id, lottery }) {
    try {
      const response = await updateLottery(id, lottery);
      commit("EDIT_LOTTERY", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async getLotteryId({ commit }, id) {
    try {
      const response = await getLotteryId(id);
      localStorage.setItem("getLottery", JSON.stringify(response.data));
      commit("GET_LOTTERY_ID", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteLottery({ commit }, id) {
    try {
      await deleteLottery(id);
      commit("DELETE_LOTTERY", id);
    } catch (error) {
      console.log(error);
    }
  },
};

//LOTTERYIMAGE

import {
  getAllLotteryImage,
  updateLotteryImage,
  createLotteryImage,
  getLotteryImageId,
  deleteLotteryImage,
} from "@/api/lotteryimage";

export const LotteryImageAction = {
  async getAllLotteryImage({ commit }) {
    try {
      const response = await getAllLotteryImage();
      commit("SET_LOTTERYIMAGE", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },
  async createLotteryImage({ commit }, lotteryimage) {
    try {
      const response = await createLotteryImage(lotteryimage);
      commit("ADD_LOTTERYIMAGE", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async updateLotteryImage({ commit }, { id, lotteryimage }) {
    try {
      const response = await updateLotteryImage(id, lotteryimage);
      commit("EDIT_LOTTERYIMAGE", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async getLotteryImageId({ commit }, id) {
    try {
      const response = await getLotteryImageId(id);
      localStorage.setItem("getLotteryimg", JSON.stringify(response.data));
      commit("GET_LOTTERYIMAGE_ID", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteLotteryImage({ commit }, id) {
    try {
      await deleteLotteryImage(id);
      commit("DELETE_LOTTERYIMAGE", id);
    } catch (error) {
      console.log(error);
    }
  },
};

//ORDER

import { getAllOrder, getOrderId, deleteOrder } from "@/api/order";

export const ORDERAction = {
  async getAllOrder({ commit }) {
    try {
      const response = await getAllOrder();
      commit("SET_ORDER", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },
  async getOrderId({ commit }, id) {
    try {
      const response = await getOrderId(id);
      localStorage.setItem("getOrder", JSON.stringify(response.data));
      commit("GET_ORDER_ID", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteOrder({ commit }, id) {
    try {
      await deleteOrder(id);
      commit("DELETE_ORDER", id);
    } catch (error) {
      console.log(error);
    }
  },
};

//PRIVACY

import {
  getAllPrivacy,
  getPrivacyId,
  createPrivacy,
  updatePrivacy,
  deletePrivacy,
} from "@/api/privacy";

export const PRIVACYAction = {
  async getAllPrivacy({ commit }) {
    try {
      const response = await getAllPrivacy();
      commit("SET_PRIVACY", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },
  async createPrivacy({ commit }, privacy) {
    try {
      const response = await createPrivacy(privacy);
      commit("ADD_PRIVACY", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async updatePrivacy({ commit }, { id, privacy }) {
    try {
      const response = await updatePrivacy(id, privacy);
      commit("EDIT_PRIVACY", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async getPrivacyId({ commit }, id) {
    try {
      const response = await getPrivacyId(id);
      localStorage.setItem("getPrivacy", JSON.stringify(response.data));
      commit("GET_PRIVACY_ID", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deletePrivacy({ commit }, id) {
    try {
      await deletePrivacy(id);
      commit("DELETE_PRIVACY", id);
    } catch (error) {
      console.log(error);
    }
  },
};

//WHYUS

import {
  getAllWhyus,
  createWhyus,
  getWhyusId,
  updateWhyus,
  deleteWhyus,
} from "@/api/whyus";

export const WHYUSAction = {
  async getAllWhyus({ commit }) {
    try {
      const response = await getAllWhyus();
      commit("SET_WHYUS", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },
  async createWhyus({ commit }, whyus) {
    try {
      const response = await createWhyus(whyus);
      commit("ADD_WHYUS", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async updateWhyus({ commit }, { id, whyus }) {
    try {
      const response = await updateWhyus(id, whyus);
      commit("EDIT_WHYUS", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async getWhyusId({ commit }, id) {
    try {
      const response = await getWhyusId(id);
      localStorage.setItem("getWhyUS", JSON.stringify(response.data));
      commit("GET_WHYUS_ID", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteWhyus({ commit }, id) {
    try {
      await deleteWhyus(id);
      commit("DELETE_WHYUS", id);
    } catch (error) {
      console.log(error);
    }
  },
};

//Review

import {
  getAllReview,
  getReviewId,
  createReview,
  updateReview,
  deleteReview,
} from "@/api/review";

export const ReviewAction = {
  async getAllReview({ commit }) {
    try {
      const response = await getAllReview();
      commit("SET_REVIEW", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },
  async createReview({ commit }, review) {
    try {
      const response = await createReview(review);
      commit("ADD_REVIEW", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async updateReview({ commit }, { id, review }) {
    try {
      const response = await updateReview(id, review);
      commit("EDIT_REVIEW", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async getReviewId({ commit }, id) {
    try {
      const response = await getReviewId(id);
      localStorage.setItem("getReview", JSON.stringify(response.data));
      commit("GET_REVIEW_ID", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteReview({ commit }, id) {
    try {
      await deleteReview(id);
      commit("DELETE_REVIEW", id);
    } catch (error) {
      console.log(error);
    }
  },
};

//Slider

import {
  getAllSliderImage,
  createSliderImage,
  updateSliderImage,
  getSliderImageId,
  deleteSliderImage,
} from "@/api/slider";

export const SliderImageAction = {
  async getAllSliderImage({ commit }) {
    try {
      const response = await getAllSliderImage();
      commit("SET_SLIDERIMAGE", response.data);
    } catch (error) {
      console.error("Fail", error);
    }
  },
  async createSliderImage({ commit }, sliderimg) {
    try {
      const response = await createSliderImage(sliderimg);
      commit("ADD_SLIDERIMAGE", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async updateSliderImage({ commit }, { id, sliderimg }) {
    try {
      const response = await updateSliderImage(id, sliderimg);
      commit("EDIT_SLIDERIMAGE", response.data);
      console.log("edit");
    } catch (error) {
      console.log(error);
    }
  },
  async getSliderImageId({ commit }, id) {
    try {
      const response = await getSliderImageId(id);
      localStorage.setItem("getSliderImg", JSON.stringify(response.data));
      commit("GET_SLIDERIMG_ID", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteSliderImage({ commit }, id) {
    try {
      await deleteSliderImage(id);
      commit("DELETE_SLIDERIMAGE", id);
    } catch (error) {
      console.log(error);
    }
  },
};
