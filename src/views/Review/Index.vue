<template>
  <div class="pt-16 p-8">
    <div class="flex justify-end">
      <div class="add">
        <router-link to="/reviewitem"
          ><button
            class="font-bold py-2 px-4 rounded w-3/3 hover:bg-yellow-400"
          >
            Add
          </button></router-link
        >
      </div>
    </div>
    <div class="p-4">
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
              <a>Point</a>
            </div>
          </div>
          <div
            v-for="(item, index) in reviews"
            :key="item.id"
            class="flex p-4 m-2 bg-yellow-400 drop-shadow-xl rounded-lg"
          >
            <div class="w-2/12">
              <a>#{{ index + 1 }}</a>
            </div>
            <div class="w-3/12">
              <a>{{ item.fullName }}</a>
            </div>
            <div class="w-3/12">
              <a>{{ item.service }}</a>
            </div>
            <div class="w-3/12">
              <a>{{ item.point }}</a>
            </div>
            <div class="w-1/12 flex gap-5 cursor-pointer">
              <router-link :to="`/reviewitem/${item.id}`">
                <a><font-awesome-icon :icon="['fas', 'pen-to-square']" /></a>
              </router-link>
              <a @click="deleteReview(item.id)"
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
  import { mapActions, mapGetters } from 'vuex'
  import { showDeleteAlert } from '@/utils/sweetalert'
  import Swal from 'sweetalert2'

  export default {
    name: 'ReviewIndex',
    mounted() {
      this.getAllReview()
    },
    methods: {
      ...mapActions('reviews', ['getAllReview', 'deleteReview']),

      async getAllReview() {
        try {
          await this.$store.dispatch('reviews/getAllReview')
        } catch (error) {
          console.error('Error', error)
        }
      },
      async deleteReview(id) {
        const result = await showDeleteAlert()
        if (result.isConfirmed) {
          try {
            await this.$store.dispatch('reviews/deleteReview', id)

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
      ...mapGetters('reviews', ['reviews']),
    },
  }
</script>

<style></style>
