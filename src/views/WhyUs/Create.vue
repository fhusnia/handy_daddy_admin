<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="bg-white">
        <div class="p-8">
          <div
            class="flex flex-row flex-wrap justify-around"
            v-for="(doc, docIndex) in docs"
            :key="docIndex"
          >
            <div class="w-6/12 p-3">
              <label class="block text-gray-700 text-sm font-bold mb-2"
                >Image1 Url</label
              >
              <div class="flex">
                <input
                  type="text"
                  v-model="doc.image1"
                  @input="clearError(docIndex, 'image1')"
                  :class="[
                    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                    {
                      'border-red-600 shadow-red-500': errors[docIndex]?.image1,
                    },
                  ]"
                  placeholder="Enter url"
                />
                <p
                  v-if="errors[docIndex]?.image1"
                  class="text-red-500 text-xs mt-2"
                >
                  !!!This field is required
                </p>
              </div>
            </div>

            <div class="w-6/12 mb-10 p-3">
              <div class="flex flex-col gap-3">
                <input
                  type="text"
                  v-model="doc.text1"
                  @input="clearError(docIndex, 'text1')"
                  :class="[
                    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                    {
                      'border-red-600 shadow-red-500': errors[docIndex]?.text1,
                    },
                  ]"
                  placeholder="Enter title"
                />
                <p
                  v-if="errors[docIndex]?.text1"
                  class="text-red-500 text-xs mt-2"
                >
                  !!!This field is required
                </p>

                <input
                  type="text"
                  v-model="doc.text2"
                  @input="clearError(docIndex, 'text2')"
                  :class="[
                    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                    {
                      'border-red-600 shadow-red-500': errors[docIndex]?.text2,
                    },
                  ]"
                  placeholder="Enter title"
                />
                <p
                  v-if="errors[docIndex]?.text2"
                  class="text-red-500 text-xs mt-2"
                >
                  !!!This field is required
                </p>

                <input
                  type="text"
                  v-model="doc.text3"
                  @input="clearError(docIndex, 'text3')"
                  :class="[
                    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                    {
                      'border-red-600 shadow-red-500': errors[docIndex]?.text3,
                    },
                  ]"
                  placeholder="Enter title"
                />
                <p
                  v-if="errors[docIndex]?.text3"
                  class="text-red-500 text-xs mt-2"
                >
                  !!!This field is required
                </p>

                <input
                  type="text"
                  v-model="doc.text4"
                  @input="clearError(docIndex, 'text4')"
                  :class="[
                    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                    {
                      'border-red-600 shadow-red-500': errors[docIndex]?.text4,
                    },
                  ]"
                  placeholder="Enter title"
                />
                <p
                  v-if="errors[docIndex]?.text4"
                  class="text-red-500 text-xs mt-2"
                >
                  !!!This field is required
                </p>
              </div>
            </div>

            <div class="w-full flex justify-end p-3">
              <button
                @click="removeDoc(docIndex)"
                class="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>

          <div class="flex justify-between mt-4">
            <button
              @click="addDoc"
              class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
            >
              Add
            </button>
          </div>
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
  </div>
</template>

<script>
import { showCancelAlert, showSaveAlert } from "@/utils/sweetalert";
import { mapActions } from "vuex";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "HomeWhyCreate",
  data() {
    return {
      id: uuidv4(),
      homewhyusID: null,
      docs: [{ image1: "", text1: "", text2: "", text3: "", text4: "" }],
      errors: [],
    };
  },
  created() {
    if (this.$route.params.id) {
      this.homewhyusID = this.$route.params.id;
      this.loadHomeWhy(this.homewhyusID);
    }
  },
  methods: {
    ...mapActions("whyuss", ["createWhyus", "updateWhyus", "getWhyusId"]),
    async loadHomeWhy(id) {
      try {
        await this.$store.dispatch("whyuss/getWhyusId", id);
        const whyus = this.$store.getters["whyuss/getWhyusId"];
        const savedData = JSON.parse(localStorage.getItem("getWhyUS"));

        if (whyus && whyus.docs) {
          this.docs = whyus.docs.map((doc) => ({
            image1: doc.image1 || "",
            text1: doc.text1 || "",
            text2: doc.text2 || "",
            text3: doc.text3 || "",
            text4: doc.text4 || "",
          }));
        } else if (savedData) {
          this.docs = savedData.docs.map((doc) => ({
            image1: doc.image1 || "",
            text1: doc.text1 || "",
            text2: doc.text2 || "",
            text3: doc.text3 || "",
            text4: doc.text4 || "",
          }));
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    },

    addDoc() {
      this.docs.push({
        image1: "",
        text1: "",
        text2: "",
        text3: "",
        text4: "",
      });
      this.errors.push({});
    },

    removeDoc(docIndex) {
      if (this.docs.length > 1) {
        this.docs.splice(docIndex, 1);
        this.errors.splice(docIndex, 1);
      } else {
        Swal.fire({
          title: "Warning!",
          text: "You cannot delete the last document.",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    },

    clearError(docIndex, field) {
      if (this.errors[docIndex]) {
        this.$set(this.errors[docIndex], field, false);
      }
    },
    async cancel() {
      const result = await showCancelAlert(this.$router);
      if (result.isConfirmed) {
        setTimeout(() => {
          this.$router.push("/whyus");
        }, 500);
      } else if (result.dismiss === "cancel") {
        console.log("cancel");
      }
    },
    validate() {
      this.errors = this.docs.map((doc) => ({
        image1: !doc.image1,
        text1: !doc.text1,
        text2: !doc.text2,
        text3: !doc.text3,
        text4: !doc.text4,
      }));
      return this.errors.every(
        (error) =>
          !error.image1 &&
          !error.text1 &&
          !error.text2 &&
          !error.text3 &&
          !error.text4,
      );
    },

    async save() {
      const result = await showSaveAlert();
      if (result.isConfirmed) {
        if (!this.validate()) {
          return;
        }

        const homewhydataList = {
          id: this.id || uuidv4(),
          docs: this.docs.map((doc) => ({
            image1: doc.image1,
            text1: doc.text1,
            text2: doc.text2,
            text3: doc.text3,
            text4: doc.text4,
          })),
        };

        try {
          if (this.homewhyusID) {
            this.updateWhyus({ id: this.homewhyusID, whyus: homewhydataList });
          } else {
            await this.createWhyus(homewhydataList);
          }

          setTimeout(() => {
            this.$router.push("/whyus");
          }, 500);
          this.resetForm();
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to save changes. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    },

    resetForm() {
      this.docs = [{ image1: "", text1: "", text2: "", text3: "", text4: "" }];
      this.errors = [];
    },
  },
};
</script>

<style></style>
