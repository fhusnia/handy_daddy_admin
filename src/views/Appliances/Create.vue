<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="flex flex-col bg-white">
        <div class="p-7">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Title</label
            >
            <input
              type="text"
              v-model="title"
              @input="clearError('title')"
              :class="[
                'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                { 'border-red-600 shadow-red-500	': errors.title },
              ]"
              placeholder="Enter title"
            />
            <p v-if="errors.title" class="text-red-500 text-xs mt-2">
              !!!This field is required
            </p>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Icon</label
            >
            <input
              type="text"
              v-model="icon"
              @input="clearError('icon')"
              placeholder="Enter icon"
              :class="[
                'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                { 'border-red-500 shadow-red-500': errors.icon },
              ]"
            />
            <p v-if="errors.icon" class="text-red-500 text-xs mt-2">
              !!!This field is required
            </p>
          </div>
          <div class="flex gap-6 mb-4">
            <div class="w-6/12">
              <label class="block text-gray-700 text-sm font-bold mb-2"
                >Content1
              </label>
              <input
                type="text"
                v-model="content1"
                @input="clearError('content1')"
                :class="[
                  'shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  { 'border-red-500 shadow-red-500': errors.content1 },
                ]"
              />
              <p v-if="errors.content1" class="text-red-500 text-xs mt-2">
                !!!This field is required
              </p>
            </div>
            <div class="w-6/12">
              <label class="block text-gray-700 text-sm font-bold mb-2"
                >Content1ImageUrl
              </label>
              <input
                type="text"
                v-model="imageUrl1"
                @input="clearError('imageUrl1')"
                :class="[
                  'shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  { 'border-red-500 shadow-red-500': errors.imageUrl1 },
                ]"
              />
              <p v-if="errors.imageUrl1" class="text-red-500 text-xs mt-2">
                !!!This field is required
              </p>
            </div>
          </div>

          <div class="flex gap-6 pt-3">
            <div class="w-6/12">
              <label class="block text-gray-700 text-sm font-bold mb-2"
                >Content2
              </label>
              <input
                type="text"
                v-model="content2"
                @input="clearError('content2')"
                :class="[
                  'shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  { 'border-red-500 shadow-red-500': errors.content1 },
                ]"
              />
              <p v-if="errors.content2" class="text-red-500 text-xs mt-2">
                !!!This field is required
              </p>
            </div>
            <div class="w-6/12">
              <label class="block text-gray-700 text-sm font-bold mb-2"
                >Content2ImageUrl
              </label>
              <input
                type="text"
                v-model="imageUrl2"
                @input="clearError('imageUrl2')"
                :class="[
                  'shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  { 'border-red-500 shadow-red-500': errors.imageUrl2 },
                ]"
              />
              <p v-if="errors.imageUrl2" class="text-red-500 text-xs mt-2">
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
                @click="saveAppliance"
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
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

export default {
  name: "AppliancesCreate",
  data() {
    return {
      id: null,
      title: "",
      icon: "",
      content1: "",
      content2: "",
      imageUrl1: "",
      imageUrl2: "",
      applianceId: null,
      errors: {
        title: false,
        icon: false,
        content1: false,
        content2: false,
        imageUrl1: false,
        imageUrl2: false,
      },
    };
  },

  created() {
    if (this.$route.params.id) {
      this.applianceId = this.$route.params.id;
      this.loadAppliance(this.applianceId);
    }
  },
  methods: {
    ...mapActions("appliances", [
      "createAppliance",
      "updateAppliance",
      "getApplianceById",
    ]),

    //formyoxlama
    validateForm() {
      let valid = true;
      this.errors = {
        title: !this.title,
        icon: !this.icon,
        content1: !this.content1,
        content2: !this.content2,
        imageUrl1: !this.imageUrl1,
        imageUrl2: !this.imageUrl2,
      };
      for (const key in this.errors) {
        if (this.errors[key]) valid = false;
      }
      return valid;
    },
    //inputerrortemizleme
    clearError(field) {
      this.errors[field] = false;
    },

    async loadAppliance(id) {
      try {
        await this.$store.dispatch("appliances/getID", id);
        const appliance = this.$store.getters["appliances/getAppliance"](id);
        const savedData = JSON.parse(localStorage.getItem("vuexState"));

        if (appliance) {
          this.title = appliance.title || "";
          this.icon = appliance.icon || "";
          this.content1 = appliance.content1 || "";
          this.content2 = appliance.content2 || "";
          this.imageUrl1 = appliance.imageUrl1 || "";
          this.imageUrl2 = appliance.imageUrl2 || "";
        } else if (savedData) {
          this.title = savedData.title || "";
          this.icon = savedData.icon || "";
          this.content1 = savedData.content1 || "";
          this.content2 = savedData.content2 || "";
          this.imageUrl1 = savedData.imageUrl1 || "";
          this.imageUrl2 = savedData.imageUrl2 || "";
        }
      } catch (error) {
        console.error("Error ", error);
      }
    },
    //CANCEL
    async cancel() {
      const result = await showCancelAlert(this.$router);
      if (result.isConfirmed) {
        setTimeout(() => {
          this.$router.push("/appliances");
        }, 500);
      } else if (result.dismiss === "cancel") {
        console.log("cancel");
      }
    },

    //CREATE AND EDIT
    async saveAppliance() {
      const result = await showSaveAlert();

      if (result.isConfirmed) {
        if (this.validateForm()) {
          const applianceData = {
            id: this.id || uuidv4(),
            title: this.title,
            icon: this.icon,
            content1: this.content1,
            content2: this.content2,
            imageUrl1: this.imageUrl1,
            imageUrl2: this.imageUrl2,
          };

          try {
            // PUT AND POST
            if (this.applianceId) {
              await this.updateAppliance({
                id: this.applianceId,
                appliance: applianceData,
              });
            } else {
              await this.createAppliance(applianceData);
            }

            Swal.fire({
              title: "Saved!",
              text: "Your changes have been saved.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });

            setTimeout(() => {
              this.$router.push("/appliances");
            }, 1500);
          } catch (error) {
            console.error("Error", error);
          }
        }
      }
    },
  },
};
</script>

<style></style>
