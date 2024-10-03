<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="p-3">
        <div class="flex justify-end">
          <div class="add">
            <router-link to="/lotteryitem"
              ><button
                class="font-bold py-2 px-4 rounded w-3/3 hover:bg-yellow-400"
              >
                Add
              </button></router-link
            >
          </div>
        </div>
      </div>

      <div class="bg-white flex flex-col shadow-md">
        <div class="p-4">
          <div
            v-for="(item, index) in lotteries"
            :key="item.id"
            class="drop-shadow-xl rounded-lg flex p-4 m-2 bg-yellow-400"
          >
            <div class="w-3/12">
              <a>#{{ index + 1 }}</a>
            </div>
            <div class="w-7/12">
              <a>{{ item.question1 }}</a>
            </div>

            <div class="w-1/12 flex gap-5 cursor-pointer">
              <router-link :to="`/lotteryitem/${item.id}`">
                <a><font-awesome-icon :icon="['fas', 'pen-to-square']" /></a>
              </router-link>
              <a @click="deleteLottery(item.id)"
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
    name: 'LLottery',
    mounted() {
      this.getAllLottery()
    },
    methods: {
      ...mapActions('lotteries', ['getAllLottery', 'deleteLottery']),

      async getAllLottery() {
        try {
          await this.$store.dispatch('lotteries/getAllLottery')
        } catch (error) {
          console.error('Error', error)
        }
      },
      async deleteLottery(id) {
        const result = await showDeleteAlert()
        if (result.isConfirmed) {
          try {
            await this.$store.dispatch('lotteries/deleteLottery', id)

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
      ...mapGetters('lotteries', ['lotteries']),
    },
  }
</script>

<style></style>
