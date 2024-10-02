<template>
  <div class="pt-16">
    <div class="p-12">
      <div class="p-4">
        <div class="flex justify-end">
          <div class="add">
            <router-link to="/lotteryimageitem">
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
        v-for="item in lotteryImages"
        :key="item.id"
        class="imagecol bg-white w-full mb-6 p-4 rounded-lg shadow-md"
      >
        <div class="mb-4 flex flex-wrap">
          <img
            v-for="(imageUrl, index) in [
              item.imageUrl1,
              item.imageUrl2,
              item.imageUrl3,
              item.imageUrl4,
              item.imageUrl5,
            ]"
            :key="index"
            :src="imageUrl"
            class="w-4/12 h-auto mb-2 rounded-lg shadow-lg"
          />
        </div>

        <div class="px-6 py-4 flex items-center justify-between">
          <router-link :to="`/lotteryimageitem/${item.id}`">
            <a class="text-blue-500 hover:text-blue-700 cursor-pointer">
              <font-awesome-icon
                :icon="['fas', 'pen-to-square']"
                class="text-xl"
              />
            </a>
          </router-link>

          <a
            @click="deleteLotteryImage(item.id)"
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
  name: "lotteryImage",
  mounted() {
    this.getAllLotteryImage();
  },
  methods: {
    ...mapActions("lotteryimages", [
      "getAllLotteryImage",
      "deleteLotteryImage",
    ]),

    async getAllLotteryImage() {
      try {
        await this.$store.dispatch("lotteryimages/getAllLotteryImage");
      } catch (error) {
        console.error("Error", error);
      }
    },
    async deleteLotteryImage(id) {
      const result = await showDeleteAlert();
      if (result.isConfirmed) {
        try {
          await this.$store.dispatch("lotteryimages/deleteLotteryImage", id);

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
    ...mapGetters("lotteryimages", ["lotteryImages"]),
  },
};
</script>

<style></style>
