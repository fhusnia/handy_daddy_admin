<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="bg-white flex flex-col shadow-md">
        <div class="p-4">
          <div class="flex p-2 m-2 text-white bg-stone-900">
            <div class="w-2/12">
              <a>#</a>
            </div>
            <div class="w-3/12">
              <a>FullName</a>
            </div>
            <div class="w-3/12">
              <a>Service</a>
            </div>
            <div class="w-3/12">
              <a>Phone</a>
            </div>
          </div>
          <div
            v-for="(item, index) in joins"
            :key="item.id"
            class="flex p-4 m-2 drop-shadow-xl rounded-lg bg-yellow-400"
          >
            <div class="w-2/12">
              <a>#{{ index + 1 }}</a>
            </div>
            <div class="w-3/12">
              <a>{{ item.fullName }}</a>
            </div>
            <div class="w-3/12">
              <a>{{ item.servicetype }}</a>
            </div>
            <div class="w-3/12">
              <a>{{ item.phone }}</a>
            </div>
            <div class="w-1/12 flex gap-5 cursor-pointer">
              <router-link :to="`/joinitem/${item.id}`"
                ><a><font-awesome-icon :icon="['fab', 'readme']" /></a>
              </router-link>
              <a @click="deleteJoin(item.id)"
                ><font-awesome-icon :icon="['fas', 'trash']"
              /></a>
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
  name: "JoinIndex",
  mounted() {
    this.getAllJoin();
  },
  methods: {
    ...mapActions("joins", ["getAllJoin", "deleteJoin"]),

    async getAllJoin() {
      try {
        await this.$store.dispatch("joins/getAllJoin");
      } catch (error) {
        console.error("Error", error);
      }
    },
    async deleteJoin(id) {
      const result = await showDeleteAlert();
      if (result.isConfirmed) {
        try {
          await this.$store.dispatch("joins/deleteJoin", id);

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
    ...mapGetters("joins", ["joins"]),
  },
};
</script>

<style></style>
