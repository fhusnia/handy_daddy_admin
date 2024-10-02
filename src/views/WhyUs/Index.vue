<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="p-4">
        <div class="flex justify-end">
          <div class="add">
            <router-link to="/whyusitem"
              ><button
                class="font-bold py-2 px-4 rounded w-3/3 hover:bg-yellow-400"
              >
                Add
              </button></router-link
            >
          </div>
        </div>
      </div>

      <div v-for="item in whyuss" :key="item.id" class="bg-white">
        <div
          v-for="(doc, index) in item.docs"
          :key="`${item.id}-${index}`"
          class="mb-4 flex justify-around mt-3"
        >
          <div class="imagecol w-36 mt-8">
            <img :src="doc.image1" alt="Document Image" />
          </div>
          <div class="mt-8">
            <div class="flex flex-col gap-2">
              <a>{{ doc.text1 }}</a>
              <a>{{ doc.text2 }}</a>
              <a>{{ doc.text3 }}</a>
              <a>{{ doc.text4 }}</a>
            </div>
          </div>
        </div>
        <div class="flex justify-end gap-5">
          <router-link :to="`/whyusitem/${item.id}`">
            <button class="font-bold p-3 m-2 rounded-lg hover:bg-yellow-400">
              Edit
            </button>
          </router-link>
          <button
            @click="deleteHomewhyus(item.id)"
            class="font-bold p-2 m-2 rounded-lg hover:bg-yellow-400"
          >
            Delete
          </button>
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
  name: "HomeWhyUS",
  mounted() {
    this.getAllWhyus();
  },
  methods: {
    ...mapActions("whyuss", ["getAllWhyus", "deleteWhyus"]),

    async getAllHomewhyus() {
      try {
        await this.$store.dispatch("whyuss/getAllWhyus");
      } catch (error) {
        console.error("Error", error);
      }
    },
    async deleteHomewhyus(id) {
      const result = await showDeleteAlert();
      if (result.isConfirmed) {
        try {
          await this.$store.dispatch("whyuss/deleteWhyus", id);

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
    ...mapGetters("whyuss", ["whyuss"]),
  },
};
</script>

<style style=""></style>
