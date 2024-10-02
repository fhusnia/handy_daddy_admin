<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="bg-white flex flex-col p-12">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Image Url</label
          >
          <input
            type="text"
            v-model="imageUrl1"
            @input="clearError('imageUrl1')"
            :class="[
              'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
              { 'border-red-600 shadow-red-500': errors.imageUrl1 },
            ]"
            placeholder="Enter ImageUrl"
          />
          <p v-if="errors.imageUrl1" class="text-red-500 text-xs mt-2">
            !!!This field is required
          </p>
        </div>
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
</template>

<script>
import { showCancelAlert, showSaveAlert } from "@/utils/sweetalert";
import { mapActions } from "vuex";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "LotteryCreateImage",
  data() {
    return {
      id: null,
      imageUrl1: "",
      sliderImgID: null,
      errors: {
        imageUrl1: false,
      },
    };
  },
  created() {
    if (this.$route.params.id) {
      this.sliderImgID = this.$route.params.id;
      this.loadLottery(this.sliderImgID);
    }
  },

  methods: {
    ...mapActions("sliderimages", [
      "createSliderImage",
      "updateSliderImage",
      "getSliderImageId",
    ]),

    validateForm() {
      let valid = true;
      this.errors = {
        imageUrl1: !this.imageUrl1,
      };
      for (const key in this.errors) {
        if (this.errors[key]) valid = false;
      }
      return valid;
    },

    clearError(field) {
      this.errors[field] = false;
    },

    async loadLottery(id) {
      try {
        await this.$store.dispatch("sliderimages/getSliderImageId", id);
        const sliderimg =
          this.$store.getters["sliderimages/getSliderImage"](id);
        const savedData = JSON.parse(localStorage.getItem("getSliderImg"));
        if (sliderimg) {
          this.imageUrl1 = sliderimg.imageUrl1 || "";
        } else if (savedData) {
          this.imageUrl1 = savedData.imageUrl1 || "";
        }
      } catch (error) {
        console.error("Error ", error);
      }
    },

    async cancel() {
      const result = await showCancelAlert(this.$router);
      if (result.isConfirmed) {
        setTimeout(() => {
          this.$router.push("/sliderimage");
        }, 500);
      } else if (result.dismiss === "cancel") {
        console.log("cancel");
      }
    },

    async save() {
      const result = await showSaveAlert();
      if (result.isConfirmed) {
        if (this.validateForm()) {
          const sliderImgIData = {
            id: this.id || uuidv4(),
            imageUrl1: this.imageUrl1,
          };
          try {
            if (this.sliderImgID) {
              this.updateSliderImage({
                id: this.sliderImgID,
                sliderimg: sliderImgIData,
              });
            } else {
              this.createSliderImage(sliderImgIData);
            }

            Swal.fire({
              title: "Saved!",
              text: "Your changes have been saved.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });

            setTimeout(() => {
              this.$router.push("/sliderimage");
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
