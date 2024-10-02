<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="flex justify-end">
        <div class="add">
          <router-link to="/privacyitem"
            ><button
              class="font-bold py-2 px-4 rounded w-3/3 hover:bg-yellow-400"
            >
              Add
            </button></router-link
          >
        </div>
      </div>
      <div class="flex flex-col gap-4 mt-6">
        <div
          v-for="(item, index) in privacies"
          :key="item.id"
          class="bg-yellow-400 drop-shadow-xl rounded-lg"
        >
          <div class="p-4">
            <div class="flex">
              <div class="w-1/5">
                <a class="font-bold">#{{ index + 1 }}</a>
              </div>
              <div class="w-3/5">
                <a>{{ item.title }}</a>
              </div>
              <div class="w-1/5 flex gap-5 cursor-pointer">
                <router-link :to="`/privacyitem/${item.id}`">
                  <a><font-awesome-icon :icon="['fas', 'pen-to-square']" /></a>
                </router-link>
                <a @click="deletePrivacy(item.id)"
                  ><font-awesome-icon :icon="['fas', 'trash']"
                /></a>
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
  name: "PrivacyIndex",
  mounted() {
    this.getAllPrivacy();
  },
  methods: {
    ...mapActions("privacies", ["getAllPrivacy", "deleteFaq"]),

    async getAllPrivacy() {
      try {
        await this.$store.dispatch("privacies/getAllPrivacy");
      } catch (error) {
        console.error("Error", error);
      }
    },
    async deletePrivacy(id) {
      const result = await showDeleteAlert();
      if (result.isConfirmed) {
        try {
          await this.$store.dispatch("privacies/deletePrivacy", id);

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
    ...mapGetters("privacies", ["privacies"]),
  },
};
</script>

<style></style>
