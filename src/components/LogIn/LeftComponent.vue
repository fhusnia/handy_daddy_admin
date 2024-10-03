<template>
  <div class="w-5/12 bg-white">
    <div class="flex items-center justify-center h-screen">
      <div class="form w-full relative right-32">
        <div class="p-8">
          <div class="welcome mb-6">
            <h3 class="text-2xl font-medium">HEY! XOŞ GƏLDİN!</h3>
            <p>Xahiş edirəm məlumatlarınizi daxil edin.</p>
          </div>

          <form @submit.prevent="login">
            <div class="mb-8">
              <label for="email" class="block text-gray-700 font-semibold mb-2"
                >Email</label
              >
              <input
                v-model="email"
                @input="clearError('email')"
                type="text"
                id="email"
                :class="[
                  'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  { 'border-red-600 shadow-red-500': errors.email },
                ]"
                placeholder="Enter your username"
              />
              <p v-if="errors.email" class="text-red-500 text-xs mt-2">
                Email is required
              </p>
            </div>
            <div class="mb-8">
              <label
                for="password"
                class="block text-gray-700 font-semibold mb-2"
                >Password</label
              >
              <input
                v-model="password"
                @input="clearError('password')"
                type="password"
                id="password"
                :class="[
                  'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  { 'border-red-600 shadow-red-500': errors.password },
                ]"
                placeholder="Enter your password"
              />
              <p v-if="errors.password" class="text-red-500 text-xs mt-2">
                Password is required
              </p>
            </div>
            <div class="mb-8">
              <button
                type="submit"
                class="w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-amber-950"
              >
                Sign In
              </button>
            </div>
            <p v-if="error" class="text-red-500 text-xs mt-2">{{ error }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        email: '',
        password: '',
        token: null,
        errors: {
          email: false,
          password: false,
        },
        error: '',
      }
    },
    methods: {
      validateForm() {
        let valid = true
        this.errors = {
          email: !this.email,
          password: !this.password,
        }
        for (const key in this.errors) {
          if (this.errors[key]) valid = false
        }
        return valid
      },

      clearError(field) {
        this.errors[field] = false
      },
      async login() {
        if (this.validateForm()) {
          try {
            const response = await axios.post('https://reqres.in/api/login', {
              email: this.email,
              password: this.password,
            })
            this.token = response.data.token
            sessionStorage.setItem('authToken', this.token)

            this.$nextTick(() => {
              if (this.$route.path !== '/blogs') {
                this.$router.push({ name: 'Blog' })
              }
            })
          } catch (error) {
            console.error(error)
            this.error = 'Invalid email or password'
          }
        }
      },
    },
  }
</script>

<style></style>
