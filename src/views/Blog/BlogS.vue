<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="w-full text-center">
        <div class="flex justify-end">
          <div class="add">
            <button
              class="font-bold py-2 px-4 rounded w-3/3 hover:bg-yellow-400"
            >
              <router-link to="/blogitem">ADD</router-link>
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center">
        <div v-for="item in blogs" :key="item.id" class="m-2">
          <div class="w-72 h-72 rounded overflow-hidden shadow-lg bg-white">
            <img class="w-full h-32" :src="item.imageUrl" alt="Card image" />
            <div class="px-6 py-4">
              <h2 class="font-light text-xs mb-3">23 Nov 22</h2>
              <p class="text-gray-700 text-base">
                {{ item.title }}
              </p>
            </div>
            <div class="px-6 py-4 flex items-center justify-between">
              <button
                class="font-bold py-2 px-4 rounded w-1/3 hover:bg-yellow-400"
              >
                <router-link :to="`/blogitem/${item.id}`">Edit</router-link>
              </button>
              <button
                @click="deleteBlog(item.id)"
                class="font-bold py-2 px-4 rounded w-1/3 hover:bg-yellow-400"
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
  import { mapActions, mapGetters } from 'vuex'
  import { showDeleteAlert } from '@/utils/sweetalert'
  import Swal from 'sweetalert2'

  export default {
    name: 'BlogS',
    mounted() {
      this.fetchBlog()
    },
    methods: {
      ...mapActions('blogs', ['fetchBlog', 'deleteBlog']),

      async fetchBlog() {
        try {
          await this.$store.dispatch('blogs/fetchBlog')
        } catch (error) {
          console.error('Error', error)
        }
      },
      async deleteBlog(id) {
        const result = await showDeleteAlert()
        if (result.isConfirmed) {
          try {
            await this.$store.dispatch('blogs/deleteBlog', id)

            Swal.fire({
              title: 'Deleted!',
              text: 'Your item has been deleted.',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            })
          } catch (error) {
            console.error(error)
          }
        }
      },
    },
    computed: {
      ...mapGetters('blogs', ['blogs']),
    },
  }
</script>

<style></style>
