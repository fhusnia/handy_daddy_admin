<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="w-full text-center">
        <div class="flex justify-end">
          <div class="add">
            <button
              class="font-bold py-2 px-4 rounded w-3/3 hover:bg-yellow-400"
            >
              <router-link to="/item">ADD</router-link>
            </button>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="p-3">
          <div class="flex flex-wrap justify-center gap-8">
            <div
              v-for="item in appliances"
              :key="item.id"
              class="w-52 h-44 bg-yellow-400 flex flex-col justify-center items-center shadow-lg rounded-lg"
            >
              <div class="mb-2">
                <font-awesome-icon
                  :icon="item.icon"
                  class="text-2xl text-black"
                />
              </div>
              <p class="text-sm font-medium">{{ item.title }}</p>
              <div class="pt-8 lex items-end justify-between hover:text-white">
                <button
                  class="font-bold py-2 px-4 rounded w-3/3 hover:bg-black"
                >
                  <router-link :to="`/item/${item.id}`">Edit</router-link>
                </button>
                <button
                  @click="deleteAppliance(item.id)"
                  class="font-bold py-2 px-4 rounded w-3/3 hover:bg-black"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
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
  name: "ApplianCesView",

  mounted() {
    this.fetchAppliances();
  },
  methods: {
    ...mapActions("appliances", ["fetchAppliances", "deleteAppliance"]),
    //GET
    async fetchAppliances() {
      try {
        await this.$store.dispatch("appliances/fetchAppliances");
      } catch (error) {
        console.error("Error", error);
      }
    },
    //DELETE
    async deleteAppliance(id) {
      const result = await showDeleteAlert();

      if (result.isConfirmed) {
        try {
          await this.$store.dispatch("appliances/deleteAppliance", id);

          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          console.error("Error", error);
        }
      }
    },
  },
  computed: {
    ...mapGetters("appliances", ["appliances"]),
  },
};
</script>
<style></style>
