<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="flex flex-col bg-white">
        <div class="p-7">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Phone</label
            >
            <div class="flex gap-6">
              <input
                type="text"
                v-model="phone1"
                @input="clearError('phone1')"
                :class="[
                  'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  { 'border-red-600 shadow-red-500': errors.phone1 },
                ]"
                placeholder="Enter phone"
              />
              <p v-if="errors.phone1" class="text-red-500 text-xs mt-2">
                !!!This field is required
              </p>

              <input
                type="text"
                v-model="phone2"
                @input="clearError('phone2')"
                :class="[
                  'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  { 'border-red-600 shadow-red-500': errors.phone2 },
                ]"
                placeholder="Enter phone"
              />
              <p v-if="errors.phone2" class="text-red-500 text-xs mt-2">
                !!!This field is required
              </p>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Email</label
            >
            <div class="flex gap-6">
              <input
                type="text"
                v-model="email1"
                @input="clearError('email1')"
                :class="[
                  'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  { 'border-red-600 shadow-red-500': errors.email1 },
                ]"
                placeholder="Enter email"
              />
              <p v-if="errors.email1" class="text-red-500 text-xs mt-2">
                !!!This field is required
              </p>

              <input
                type="text"
                v-model="email2"
                @input="clearError('email2')"
                :class="[
                  'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  { 'border-red-600 shadow-red-500': errors.email2 },
                ]"
                placeholder="Enter email"
              />
              <p v-if="errors.email2" class="text-red-500 text-xs mt-2">
                !!!This field is required
              </p>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Site</label
            >

            <input
              type="text"
              v-model="site"
              @input="clearError('site')"
              :class="[
                'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                { 'border-red-600 shadow-red-500': errors.site },
              ]"
              placeholder="Enter site"
            />
            <p v-if="errors.site" class="text-red-500 text-xs mt-2">
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
  import { showCancelAlert, showSaveAlert } from '@/utils/sweetalert'
  import { mapActions } from 'vuex'
  import Swal from 'sweetalert2'
  import { v4 as uuidv4 } from 'uuid'

  export default {
    name: 'ContactCreate',
    data() {
      return {
        id: null,
        phone1: '',
        phone2: '',
        email1: '',
        email2: '',
        site: '',
        contactID: null,
        errors: {
          phone1: false,
          phone2: false,
          email1: false,
          email2: false,
          site: false,
        },
      }
    },
    created() {
      if (this.$route.params.id) {
        this.contactID = this.$route.params.id
        this.loadContact(this.contactID)
      }
    },

    methods: {
      ...mapActions('contacts', [
        'createContact',
        'updateContact',
        'getContactId',
      ]),

      validateForm() {
        let valid = true
        this.errors = {
          phone1: !this.phone1,
          phone2: !this.phone2,
          email1: !this.email1,
          email2: !this.email2,
          site: !this.site,
        }
        for (const key in this.errors) {
          if (this.errors[key]) valid = false
        }
        return valid
      },

      clearError(field) {
        this.errors[field] = false
      },

      async loadContact(id) {
        try {
          await this.$store.dispatch('contacts/getContactId', id)
          const contact = this.$store.getters['contacts/getContact'](id)
          const savedData = JSON.parse(localStorage.getItem('getContact'))
          if (contact) {
            this.phone1 = contact.phone1 || ''
            this.phone2 = contact.phone2 || ''
            this.email1 = contact.email1 || ''
            this.email2 = contact.email2 || ''
            this.site = contact.site || ''
          } else if (savedData) {
            this.phone1 = savedData.phone1 || ''
            this.phone2 = savedData.phone2 || ''
            this.email1 = savedData.email1 || ''
            this.email2 = savedData.email2 || ''
            this.site = savedData.site || ''
          }
        } catch (error) {
          console.error('Error ', error)
        }
      },

      async cancel() {
        const result = await showCancelAlert(this.$router)
        if (result.isConfirmed) {
          setTimeout(() => {
            this.$router.push('/contact')
          }, 500)
        } else if (result.dismiss === 'cancel') {
          console.log('cancel')
        }
      },

      async save() {
        const result = await showSaveAlert()
        if (result.isConfirmed) {
          if (this.validateForm()) {
            const contactdata = {
              id: this.id || uuidv4(),
              phone1: this.phone1,
              phone2: this.phone2,
              email1: this.email1,
              email2: this.email2,
              site: this.site,
              date: this.date,
            }

            try {
              if (this.contactID) {
                this.updateContact({ id: this.contactID, contact: contactdata })
              } else {
                this.createContact(contactdata)
              }

              Swal.fire({
                title: 'Saved!',
                text: 'Your changes have been saved.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
              })

              setTimeout(() => {
                this.$router.push('/contact')
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

<style></style>
