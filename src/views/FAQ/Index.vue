<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="p-3 flex justify-end">
        <div class="add">
          <router-link to="faqitem"
            ><button
              class="font-bold py-2 px-4 rounded w-3/3 hover:bg-yellow-400"
            >
              Add
            </button></router-link
          >
        </div>
      </div>
      <div class="bg-white flex flex-col shadow-md">
        <div class="p-4">
          <div
            v-for="(item, index) in faqs"
            :key="item.id"
            class="flex p-4 m-4 drop-shadow-xl rounded-lg bg-yellow-400"
          >
            <div class="w-4/12">
              <a>#{{ index + 1 }}</a>
            </div>
            <div class="w-7/12">
              <a>{{ item.question }}</a>
            </div>

            <div class="w-1/12 flex gap-5 cursor-pointer">
              <router-link :to="`/faqitem/${item.id}`">
                <a><font-awesome-icon :icon="['fas', 'pen-to-square']" /></a>
              </router-link>
              <a @click="deleteFaq(item.id)"
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
    name: 'FaQ',
    mounted() {
      this.getAllFaq()
    },
    methods: {
      ...mapActions('faqs', ['getAllFaq', 'deleteFaq']),

      async getAllFaq() {
        try {
          await this.$store.dispatch('faqs/getAllFaq')
        } catch (error) {
          console.error('Error', error)
        }
      },
      async deleteFaq(id) {
        const result = await showDeleteAlert()
        if (result.isConfirmed) {
          try {
            await this.$store.dispatch('faqs/deleteFaq', id)

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
      ...mapGetters('faqs', ['faqs']),
    },
  }
</script>

<style></style>
