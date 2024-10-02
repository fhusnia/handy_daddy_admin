<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="flex flex-col bg-white">
        <div class="p-7">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Question</label
            >
            <input
              type="text"
              v-model="question"
              @input="clearError('question')"
              :class="[
                'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                { 'border-red-600 shadow-red-500': errors.question },
              ]"
              placeholder="Enter question"
            />
            <p v-if="errors.question" class="text-red-500 text-xs mt-2">
              !!!This field is required
            </p>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Description</label
            >
            <textarea
              type="text"
              v-model="description"
              @input="clearError('description')"
              :class="[
                'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                { 'border-red-600 shadow-red-500': errors.description },
              ]"
              placeholder="Enter description"
            ></textarea>
            <p v-if="errors.description" class="text-red-500 text-xs mt-2">
              !!!This field is required
            </p>
          </div>

          <div class="mt-4">
            <div class="flex justify-end">
              <button
                @click="cancel"
                class="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2 hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                @click="save"
                class="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-300"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { showCancelAlert, showSaveAlert } from "@/utils/sweetalert";
import { mapActions } from "vuex";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "FaqCreate",
  data() {
    return {
      id: null,
      question: "",
      description: "",
      questionID: null,
      errors: {
        question: false,
        description: false,
      },
    };
  },
  created() {
    if (this.$route.params.id) {
      this.questionID = this.$route.params.id;
      this.loadFaq(this.questionID);
    }
  },

  methods: {
    ...mapActions("faqs", ["createFaq", "updateFaq", "getFaqId"]),

    validateForm() {
      let valid = true;
      this.errors = {
        question: !this.question,
        description: !this.description,
      };
      for (const key in this.errors) {
        if (this.errors[key]) valid = false;
      }
      return valid;
    },

    clearError(field) {
      this.errors[field] = false;
    },

    async loadFaq(id) {
      try {
        await this.$store.dispatch("faqs/getFaqId", id);
        const faq = this.$store.getters["faqs/getFaq"](id);
        const savedData = JSON.parse(localStorage.getItem("getFaq"));
        if (faq) {
          this.question = faq.question || "";
          this.description = faq.description || "";
        } else if (savedData) {
          this.question = savedData.question || "";
          this.description = savedData.description || "";
        }
      } catch (error) {
        console.error("Error ", error);
      }
    },

    async cancel() {
      const result = await showCancelAlert(this.$router);
      if (result.isConfirmed) {
        setTimeout(() => {
          this.$router.push("/faq");
        }, 500);
      } else if (result.dismiss === "cancel") {
        console.log("cancel");
      }
    },

    async save() {
      const result = await showSaveAlert();
      if (result.isConfirmed) {
        if (this.validateForm()) {
          const faqdata = {
            id: this.id || uuidv4(),
            question: this.question,
            description: this.description,
          };

          try {
            if (this.questionID) {
              this.updateFaq({ id: this.questionID, contact: faqdata });
            } else {
              this.createFaq(faqdata);
            }

            Swal.fire({
              title: "Saved!",
              text: "Your changes have been saved.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });

            setTimeout(() => {
              this.$router.push("/faq");
            }, 1500);
          } catch (error) {
            console.log(error);
          }
        }
      }
    },
  },
};
</script>

<style></style>
