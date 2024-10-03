<template>
  <div class="pt-16">
    <div class="p-4">
      <div class="ml-16 p-4 cursor-pointer">
        <router-link to="/order"
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
          <label class="block text-gray-700 font-semibold">Email:</label>
          <p class="text-gray-900">{{ email }}</p>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 font-semibold">Phone:</label>
          <p class="text-gray-900">{{ phone }}</p>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 font-semibold">Adresses:</label>
          <p class="text-gray-900">{{ address }}</p>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 font-semibold">Date:</label>
          <p class="text-gray-900">{{ date }}</p>
        </div>

        <div class="mb-2">
          <label class="block text-gray-700 font-semibold">Hour:</label>
          <p class="text-gray-900">{{ hour }}</p>
        </div>

        <div class="mb-2">
          <label class="block text-gray-700 font-semibold"
            >Appliance Type:</label
          >
          <p class="text-gray-900">{{ applianceType }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'OrderRead',
    data() {
      return {
        fullName: '',
        phone: '',
        applianceType: '',
        email: '',
        address: '',
        date: '',
        hour: '',
        orderId: null,
      }
    },
    created() {
      if (this.$route.params.id) {
        this.orderId = this.$route.params.id
        this.loadOrder(this.orderId)
      }
    },

    methods: {
      async loadOrder(id) {
        try {
          await this.$store.dispatch('orders/getOrderId', id)
          const order = this.$store.getters['orders/getorder'](id)
          const savedData = JSON.parse(localStorage.getItem('getOrder'))
          if (order) {
            this.fullName = order.fullName || ''
            this.phone = order.phone || ''
            this.applianceType = order.applianceType || ''
            this.date = order.date || ''
            this.hour = order.email || ''
            this.address = order.email || ''
            this.email = order.email || ''
          } else if (savedData) {
            this.fullName = savedData.fullName || ''
            this.phone = savedData.phone || ''
            this.applianceType = savedData.applianceType || ''
            this.date = savedData.date || ''
            this.hour = savedData.email || ''
            this.address = savedData.email || ''
            this.email = savedData.email || ''
          }
        } catch (error) {
          console.error('Error ', error)
        }
      },
    },
    computed: {
      ...mapGetters('getorder', ['getorder']),
    },
  }
</script>

<style></style>
