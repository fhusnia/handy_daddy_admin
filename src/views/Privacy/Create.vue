<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="flex flex-col">
        <div class="w-full mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Title
          </label>

          <input
            type="text"
            v-model="title"
            @input="clearError('title')"
            :class="[
              'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
              { 'border-red-600 shadow-red-500': errors.title },
            ]"
            placeholder="Enter title"
          />
          <p v-if="errors.title" class="text-red-500 text-xs mt-2">
            !!!This field is required
          </p>
        </div>
        <div class="w-full">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Content
          </label>

          <ckeditor
            :editor="editor"
            v-model="description"
            :class="[
              'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
              { 'border-red-600 shadow-red-500': errors.description },
            ]"
          >
          </ckeditor>
          <p v-if="errors.description" class="text-red-500 text-xs mt-2">
            !!!This field is required
          </p>
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
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { showCancelAlert, showSaveAlert } from "@/utils/sweetalert";
import { mapActions } from "vuex";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "PrivacyCreate",
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        height: 900,
      },
      id: null,
      title: "",
      description: "",
      privacyID: null,
      errors: {
        title: false,
        description: false,
      },
    };
  },
  created() {
    if (this.$route.params.id) {
      this.privacyID = this.$route.params.id;
      this.loadPrivacy(this.privacyID);
    }
  },

  methods: {
    ...mapActions("privacies", [
      "createPrivacy",
      "updatePrivacy",
      "getPrivacyId",
    ]),

    onEditorInput(event) {
      this.description = event;

      this.description = event;

      this.clearError("description");
    },

    validateForm() {
      let valid = true;
      this.errors = {
        description: !this.description,
        title: !this.title,
      };
      for (const key in this.errors) {
        if (this.errors[key]) valid = false;
      }
      return valid;
    },

    clearError(field) {
      this.errors[field] = false;
    },
    async loadPrivacy(id) {
      try {
        await this.$store.dispatch("privacies/getPrivacyId", id);
        const privacy = this.$store.getters["privacies/getprivacy"](id);
        const savedData = JSON.parse(localStorage.getItem("getPrivacy"));
        if (privacy) {
          this.description = privacy.description || "";
          this.title = privacy.title || "";
        } else if (savedData) {
          this.description = savedData.description || "";
          this.title = savedData.title || "";
        }
      } catch (error) {
        console.error("Error ", error);
      }
    },
    async cancel() {
      const result = await showCancelAlert(this.$router);
      if (result.isConfirmed) {
        setTimeout(() => {
          this.$router.push("/privacy");
        }, 500);
      } else if (result.dismiss === "cancel") {
        console.log("cancel");
      }
    },
    async save() {
      const result = await showSaveAlert();

      if (result.isConfirmed) {
        if (this.validateForm()) {
          const privacyData = {
            id: this.id || uuidv4(),
            description: this.description,
            title: this.title,
          };

          try {
            if (this.privacyID) {
              this.updatePrivacy({ id: this.privacyID, privacy: privacyData });
            } else {
              this.createPrivacy(privacyData);
            }

            Swal.fire({
              title: "Saved!",
              text: "Your changes have been saved.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });

            setTimeout(() => {
              this.$router.push("/privacy");
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
