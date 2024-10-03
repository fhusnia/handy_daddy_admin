<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="bg-white flex flex-col shadow-md">
        <div class="p-4">
          <div class="flex p-2 m-2 text-white bg-stone-900">
            <div class="w-3/12">
              <a>#</a>
            </div>
            <div class="w-5/12">
              <a>FullName</a>
            </div>
            <div class="w-4/12">
              <a>Email</a>
            </div>
          </div>
          <div
            v-for="(item, index) in contactforms"
            :key="item.id"
            class="flex p-4 m-2 drop-shadow-xl rounded-lg bg-yellow-400"
          >
            <div class="w-3/12">
              <a>#{{ index + 1 }}</a>
            </div>
            <div class="w-5/12">
              <a>{{ item.fullName }}</a>
            </div>
            <div class="w-4/12">
              <a>{{ item.email }}</a>
            </div>
            <div class="w-1/12 flex gap-5 cursor-pointer">
              <router-link :to="`/contactformitem/${item.id}`"
                ><a><font-awesome-icon :icon="['fab', 'readme']" /></a>
              </router-link>
              <a @click="deleteContactform(item.id)"
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
    name: 'ContactForm',
    mounted() {
      this.getAllContactform()
    },
    methods: {
      ...mapActions('contactforms', ['getAllContactform', 'deleteContactform']),

      async getAllContactform() {
        try {
          await this.$store.dispatch('contactforms/getAllContactform')
        } catch (error) {
          console.error('Error', error)
        }
      },
      async deleteContactform(id) {
        const result = await showDeleteAlert()
        if (result.isConfirmed) {
          try {
            console.log('dlt')
            await this.$store.dispatch('contactforms/deleteContactform', id)

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
      ...mapGetters('contactforms', ['contactforms']),
    },
  }
</script>

<style></style>
