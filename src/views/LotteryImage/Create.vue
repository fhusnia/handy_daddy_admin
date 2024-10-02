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

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Image Url</label
          >
          <input
            type="text"
            v-model="imageUrl2"
            @input="clearError('imageUrl2')"
            :class="[
              'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
              { 'border-red-600 shadow-red-500': errors.imageUrl2 },
            ]"
            placeholder="Enter ImageUrl"
          />
          <p v-if="errors.imageUrl2" class="text-red-500 text-xs mt-2">
            !!!This field is required
          </p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Image Url</label
          >
          <input
            type="text"
            v-model="imageUrl3"
            @input="clearError('imageUrl3')"
            :class="[
              'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
              { 'border-red-600 shadow-red-500': errors.imageUrl3 },
            ]"
            placeholder="Enter ImageUrl"
          />
          <p v-if="errors.imageUrl3" class="text-red-500 text-xs mt-2">
            !!!This field is required
          </p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Image Url</label
          >
          <input
            type="text"
            v-model="imageUrl4"
            @input="clearError('imageUrl4')"
            :class="[
              'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
              { 'border-red-600 shadow-red-500': errors.imageUrl4 },
            ]"
            placeholder="Enter ImageUrl"
          />
          <p v-if="errors.imageUrl4" class="text-red-500 text-xs mt-2">
            !!!This field is required
          </p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Image Url</label
          >
          <input
            type="text"
            v-model="imageUrl5"
            @input="clearError('imageUrl5')"
            :class="[
              'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
              { 'border-red-600 shadow-red-500': errors.imageUrl5 },
            ]"
            placeholder="Enter ImageUrl"
          />
          <p v-if="errors.imageUrl5" class="text-red-500 text-xs mt-2">
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
      imageUrl2: "",
      imageUrl3: "",
      imageUrl4: "",
      imageUrl5: "",
      lotteryImgID: null,
      errors: {
        imageUrl1: false,
        imageUrl2: false,
        imageUrl3: false,
        imageUrl4: false,
        imageUrl5: false,
      },
    };
  },
  created() {
    if (this.$route.params.id) {
      this.lotteryImgID = this.$route.params.id;
      this.loadLottery(this.lotteryImgID);
    }
  },

  methods: {
    ...mapActions("lotteryimages", [
      "createLotteryImage",
      "updateLotteryImage",
      "getLotteryImageId",
    ]),

    validateForm() {
      let valid = true;
      this.errors = {
        imageUrl1: !this.imageUrl1,
        imageUrl2: !this.imageUrl2,
        imageUrl3: !this.imageUrl3,
        imageUrl4: !this.imageUrl4,
        imageUrl5: !this.imageUrl5,
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
        await this.$store.dispatch("lotteryimages/getLotteryImageId", id);
        const lotteryimage =
          this.$store.getters["lotteryimages/getlotteryImage"](id);
        const savedData = JSON.parse(localStorage.getItem("getLotteryimg"));
        if (lotteryimage) {
          this.imageUrl1 = lotteryimage.imageUrl1 || "";
          this.imageUrl2 = lotteryimage.imageUrl2 || "";
          this.imageUrl3 = lotteryimage.imageUrl3 || "";
          this.imageUrl4 = lotteryimage.imageUrl4 || "";
          this.imageUrl5 = lotteryimage.imageUrl5 || "";
        } else if (savedData) {
          this.imageUrl1 = savedData.imageUrl1 || "";
          this.imageUrl2 = savedData.imageUrl2 || "";
          this.imageUrl3 = savedData.imageUrl3 || "";
          this.imageUrl4 = savedData.imageUrl4 || "";
          this.imageUrl5 = savedData.imageUrl5 || "";
        }
      } catch (error) {
        console.error("Error ", error);
      }
    },

    async cancel() {
      const result = await showCancelAlert(this.$router);
      if (result.isConfirmed) {
        setTimeout(() => {
          this.$router.push("/lotteryimage");
        }, 500);
      } else if (result.dismiss === "cancel") {
        console.log("cancel");
      }
    },

    async save() {
      const result = await showSaveAlert();
      if (result.isConfirmed) {
        if (this.validateForm()) {
          const lotteryImgData = {
            id: this.id || uuidv4(),
            imageUrl1: this.imageUrl1,
            imageUrl2: this.imageUrl2,
            imageUrl3: this.imageUrl3,
            imageUrl4: this.imageUrl4,
            imageUrl5: this.imageUrl5,
          };
          try {
            if (this.lotteryImgID) {
              this.updateLotteryImage({
                id: this.lotteryImgID,
                lotteryimage: lotteryImgData,
              });
            } else {
              this.createLotteryImage(lotteryImgData);
            }

            Swal.fire({
              title: "Saved!",
              text: "Your changes have been saved.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });

            setTimeout(() => {
              this.$router.push("/lotteryimage");
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
