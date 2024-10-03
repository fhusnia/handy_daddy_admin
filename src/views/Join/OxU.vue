<template>
  <div class="pt-16">
    <div class="p-4">
      <div class="ml-16 p-4 cursor-pointer">
        <router-link to="/join"
          ><a class="bg-slate-50"
            ><font-awesome-icon icon="fa-solid fa-left-long" size="2xl"
          /></a>
        </router-link>
      </div>
      <div class="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h1 class="text-2xl font-bold mb-4">The Orderer</h1>
        <div class="mb-2">
          <label class="block text-gray-700 font-semibold">Full Name:</label>
          <p class="text-gray-900">{{ fullName }}</p>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 font-semibold">Service Type:</label>
          <p class="text-gray-900">{{ servicetype }}</p>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 font-semibold">Phone Number:</label>
          <p class="text-gray-900">{{ phone }}</p>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 font-semibold">Email</label>
          <p class="text-gray-900">{{ email }}</p>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 font-semibold">Message:</label>
          <p class="text-gray-900">{{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'OXu',
    data() {
      return {
        fullName: '',
        phone: '',
        servicetype: '',
        message: '',
        email: '',
        JoinID: null,
      }
    },
    created() {
      if (this.$route.params.id) {
        this.JoinID = this.$route.params.id
        this.loadContactForm(this.JoinID)
      }
    },

    methods: {
      async loadContactForm(id) {
        try {
          await this.$store.dispatch('joins/getJoinId', id)
          const joinform = this.$store.getters['joins/getJoin'](id)
          const savedData = JSON.parse(localStorage.getItem('getJoin'))
          if (joinform) {
            this.fullName = joinform.fullName || ''
            this.phone = joinform.phone || ''
            this.servicetype = joinform.servicetype || ''
            this.message = joinform.message || ''
            this.email = joinform.email || ''
          } else if (savedData) {
            this.fullName = savedData.fullName || ''
            this.phone = savedData.phone || ''
            this.email = savedData.email || ''
            this.servicetype = savedData.servicetype || ''
            this.message = savedData.message || ''
          }
        } catch (error) {
          console.error('Error ', error)
        }
      },
    },
    computed: {
      ...mapGetters('joins', ['getJoin']),
    },
  }
</script>

<style></style>
