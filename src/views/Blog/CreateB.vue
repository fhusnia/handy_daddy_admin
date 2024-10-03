<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="flex flex-col bg-white">
        <div class="p-7">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Image Url</label
            >
            <input
              type="text"
              v-model="imageUrl"
              @input="clearError('imageUrl')"
              :class="[
                'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                { 'border-red-600 shadow-red-500': errors.imageUrl },
              ]"
              placeholder="Enter ImageUrl"
            />
            <p v-if="errors.imageUrl" class="text-red-500 text-xs mt-2">
              !!!This field is required
            </p>
          </div>
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
                { 'border-red-600 shadow-red-500': errors.title },
              ]"
              placeholder="Enter title"
            />
            <p v-if="errors.imageUrl" class="text-red-500 text-xs mt-2">
              !!!This field is required
            </p>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Content Header</label
            >
            <input
              type="text"
              v-model="content"
              @input="clearError('content')"
              :class="[
                'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                { 'border-red-600 shadow-red-500': errors.content },
              ]"
              placeholder="Enter title"
            />
            <p v-if="errors.content" class="text-red-500 text-xs mt-2">
              !!!This field is required
            </p>
          </div>

          <div class="w-full">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Content
            </label>

            <ckeditor
              :editor="editor"
              v-model="contentheader"
              :class="[
                'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                { 'border-red-600 shadow-red-500': errors.contentheader },
              ]"
            >
            </ckeditor>
            <p v-if="errors.contentheader" class="text-red-500 text-xs mt-2">
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
  </div>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
  import { showCancelAlert, showSaveAlert } from '@/utils/sweetalert'
  import { mapActions } from 'vuex'
  import Swal from 'sweetalert2'
  import { v4 as uuidv4 } from 'uuid'

  export default {
    name: 'CreateB',
    data() {
      return {
        editor: ClassicEditor,
        editorConfig: {
          height: 900,
        },
        id: null,
        imageUrl: '',
        title: '',
        contentheader: '',
        content: '',
        date: new Date().toISOString().split('T')[0],
        blogID: null,
        errors: {
          imageUrl: false,
          title: false,
          contentheader: false,
          content: false,
        },
      }
    },
    created() {
      if (this.$route.params.id) {
        this.blogID = this.$route.params.id
        this.loadBlog(this.blogID)
      }
    },

    methods: {
      ...mapActions('blogs', ['createBlog', 'updateBlog', 'getBlogID']),

      onEditorInput(event) {
        this.contentheader = event

        this.contentheader = event

        this.clearError('contentheader')
      },

      validateForm() {
        let valid = true
        this.errors = {
          imageUrl: !this.imageUrl,
          title: !this.title,
          contentheader: !this.contentheader,
          content: !this.content,
        }
        for (const key in this.errors) {
          if (this.errors[key]) valid = false
        }
        return valid
      },

      clearError(field) {
        this.errors[field] = false
      },
      async loadBlog(id) {
        try {
          await this.$store.dispatch('blogs/getBlogID', id)
          const blog = this.$store.getters['blogs/getBlog'](id)
          const savedData = JSON.parse(localStorage.getItem('getBlog'))
          if (blog) {
            this.imageUrl = blog.imageUrl || ''
            this.title = blog.title || ''
            this.contentheader = blog.contentheader || ''
            this.content = blog.content || ''
          } else if (savedData) {
            this.imageUrl = savedData.imageUrl || ''
            this.title = savedData.title || ''
            this.contentheader = savedData.contentheader || ''
            this.content = savedData.content || ''
          }
        } catch (error) {
          console.error('Error ', error)
        }
      },
      async cancel() {
        const result = await showCancelAlert(this.$router)
        if (result.isConfirmed) {
          setTimeout(() => {
            this.$router.push('/blogs')
          }, 500)
        } else if (result.dismiss === 'cancel') {
          console.log('cancel')
        }
      },
      async save() {
        const result = await showSaveAlert()

        if (result.isConfirmed) {
          if (this.validateForm()) {
            const blogData = {
              id: this.id || uuidv4(),
              imageUrl: this.imageUrl,
              title: this.title,
              contentheader: this.contentheader,
              content: this.content,
              date: this.date,
            }

            try {
              if (this.blogID) {
                this.updateBlog({ id: this.blogID, blog: blogData })
              } else {
                this.createBlog(blogData)
              }

              Swal.fire({
                title: 'Saved!',
                text: 'Your changes have been saved.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
              })

              setTimeout(() => {
                this.$router.push('/blogs')
              }, 1500)
            } catch (error) {
              console.log(error)
            }
          }
        }
      },
    },
  }
</script>

<style>
  .ck-editor__editable_inline {
    min-height: 400px; /* Adjust this value as needed */
  }
</style>
