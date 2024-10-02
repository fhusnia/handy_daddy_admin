<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="p-4">
        <div class="flex justify-end">
          <div class="add">
            <button
              class="font-bold py-2 px-4 rounded w-3/3 hover:bg-yellow-400"
            >
              <router-link to="/contactitem">ADD</router-link>
            </button>
          </div>
        </div>
      </div>

      <div class="bg-white flex flex-col shadow-md">
        <div class="p-4">
          <div
            v-for="item in contacts"
            :key="item.id"
            class="flex p-4 m-2 bg-yellow-400 items-center drop-shadow-xl rounded-lg"
          >
            <div class="w-3/12">
              <a>#Phone</a>
            </div>
            <div class="w-3/12">
              <a>{{ item.phone1 }}</a>
            </div>
            <div class="w-3/12">
              <a>{{ item.phone2 }}</a>
            </div>

            <div class="w-3/12">
              <button
                class="font-bold py-2 px-4 rounded w-1/3 hover:bg-black hover:text-white"
              >
                <router-link :to="`/contactitem/${item.id}`">Edit</router-link>
              </button>
              <button
                @click="deleteContact(item.id)"
                class="font-bold py-2 px-4 rounded w-1/3 hover:bg-black hover:text-white"
              >
                Delete
              </button>
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
  name: "ContactIndex",
  mounted() {
    this.getAllContact();
  },
  methods: {
    ...mapActions("contacts", ["getAllContact", "deleteContact"]),

    async getAllContact() {
      try {
        await this.$store.dispatch("contacts/getAllContact");
      } catch (error) {
        console.error("Error", error);
      }
    },
    async deleteContact(id) {
      const result = await showDeleteAlert();
      if (result.isConfirmed) {
        try {
          await this.$store.dispatch("contacts/deleteContact", id);

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
    ...mapGetters("contacts", ["contacts"]),
  },
};
</script>

<style></style>
