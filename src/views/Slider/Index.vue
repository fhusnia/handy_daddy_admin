<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="p-4">
        <div class="flex justify-end">
          <div class="add">
            <router-link to="/sliderimageitem">
              <button
                class="font-bold py-2 px-4 rounded w-3/3 hover:bg-yellow-400"
              >
                Add
              </button>
            </router-link>
          </div>
        </div>
      </div>

      <div
        v-for="item in sliderImages"
        :key="item.id"
        class="imagecol bg-white w-full mb-6 p-4 rounded-lg shadow-md"
      >
        <div class="mb-4 flex flex-wrap">
          <img
            v-for="(imageUrl, index) in [item.imageUrl1]"
            :key="index"
            :src="imageUrl"
            class="w-4/12 h-auto mb-2 rounded-lg shadow-lg"
          />
        </div>

        <div class="px-6 py-4 flex items-center justify-between">
          <router-link :to="`/sliderimageitem/${item.id}`">
            <a class="text-blue-500 hover:text-blue-700 cursor-pointer">
              <font-awesome-icon
                :icon="['fas', 'pen-to-square']"
                class="text-xl"
              />
            </a>
          </router-link>

          <a
            @click="deleteSliderImage(item.id)"
            class="text-red-500 cursor-pointer hover:text-red-700"
          >
            <font-awesome-icon :icon="['fas', 'trash']" class="text-xl" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { showDeleteAlert } from "@/utils/sweetalert";
import Swal from "sweetalert2";

export default {
  name: "SliderImage",
  mounted() {
    this.getAllSliderImage();
  },
  methods: {
    ...mapActions("sliderimages", ["getAllSliderImage", "deleteSliderImage"]),

    async getAllSliderImage() {
      try {
        await this.$store.dispatch("sliderimages/getAllSliderImage");
      } catch (error) {
        console.error("Error", error);
      }
    },
    async deleteSliderImage(id) {
      const result = await showDeleteAlert();
      if (result.isConfirmed) {
        try {
          await this.$store.dispatch("sliderimages/deleteSliderImage", id);

          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
  computed: {
    ...mapGetters("sliderimages", ["sliderImages"]),
  },
};
</script>

<style></style>
