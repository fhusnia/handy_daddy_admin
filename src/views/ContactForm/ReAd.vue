<template>
  <div class="pt-16">
    <div class="p-4">
      <div class="ml-16 p-4 cursor-pointer">
        <router-link to="/contactform">
          <a class="bg-slate-50"
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
          <label class="block text-gray-700 font-semibold">Email:</label>
          <p class="text-gray-900">{{ email }}</p>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 font-semibold">Message:</label>
          <p class="text-gray-900">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'ReAd',
    data() {
      return {
        fullName: '',
        phone: '',
        selectfield: '',
        text: '',
        contactformID: null,
      }
    },
    created() {
      if (this.$route.params.id) {
        this.contactformID = this.$route.params.id
        this.loadContactForm(this.contactformID)
      }
    },

    methods: {
      async loadContactForm(id) {
        try {
          await this.$store.dispatch('contactforms/getContactformID', id)
          const contactform =
            this.$store.getters['contactforms/getContactform'](id)
          const savedData = JSON.parse(localStorage.getItem('getContactform'))
          if (contactform) {
            this.fullName = contactform.fullName || ''
            this.email = contactform.email || ''
            this.text = contactform.text || ''
          } else if (savedData) {
            this.fullName = savedData.fullName || ''
            this.email = savedData.email || ''
            this.text = savedData.text || ''
          }
        } catch (error) {
          console.error('Error ', error)
        }
      },
    },
    computed: {
      ...mapGetters('contactforms', ['contactforms']),
    },
  }
</script>

<style></style>
