<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="flex flex-col bg-white">
        <div class="p-7">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Question1</label
            >
            <input
              type="text"
              v-model="question1"
              @input="clearError('question1')"
              :class="[
                'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                { 'border-red-600 shadow-red-500': errors.question1 },
              ]"
              placeholder="Enter question"
            />
            <p v-if="errors.question1" class="text-red-500 text-xs mt-2">
              !!!This field is required
            </p>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Question2</label
            >
            <input
              type="text"
              v-model="question2"
              @input="clearError('question2')"
              :class="[
                'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                { 'border-red-600 shadow-red-500': errors.question2 },
              ]"
              placeholder="Enter question"
            />
            <p v-if="errors.question2" class="text-red-500 text-xs mt-2">
              !!!This field is required
            </p>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2"
                >Text</label
              >
              <textarea
                type="text"
                v-model="text"
                @input="clearError('text')"
                :class="[
                  'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  { 'border-red-600 shadow-red-500': errors.text },
                ]"
                placeholder="Enter text"
              ></textarea>
              <p v-if="errors.text" class="text-red-500 text-xs mt-2">
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
  </div>
</template>

<script>
  import { showCancelAlert, showSaveAlert } from '@/utils/sweetalert'
  import { mapActions } from 'vuex'
  import Swal from 'sweetalert2'
  import { v4 as uuidv4 } from 'uuid'
  export default {
    name: 'LotteryCreate',
    data() {
      return {
        id: null,
        question1: '',
        question2: '',
        text: '',
        lotteryID: null,
        errors: {
          question1: false,
          question2: false,
          text: false,
        },
      }
    },
    created() {
      if (this.$route.params.id) {
        this.lotteryID = this.$route.params.id
        this.loadLottery(this.lotteryID)
      }
    },

    methods: {
      ...mapActions('lotteries', [
        'createLottery',
        'updateLottery',
        'getLotteryId',
      ]),

      validateForm() {
        let valid = true
        this.errors = {
          question1: !this.question1,
          question2: !this.question2,
          text: !this.text,
        }
        for (const key in this.errors) {
          if (this.errors[key]) valid = false
        }
        return valid
      },

      clearError(field) {
        this.errors[field] = false
      },

      async loadLottery(id) {
        try {
          await this.$store.dispatch('lotteries/getLotteryId', id)
          const lottery = this.$store.getters['lotteries/getLottery'](id)
          const savedData = JSON.parse(localStorage.getItem('getLottery'))
          if (lottery) {
            this.question1 = lottery.question1 || ''
            this.question2 = lottery.question2 || ''
            this.text = lottery.text || ''
          } else if (savedData) {
            this.question1 = savedData.question1 || ''
            this.question2 = savedData.question2 || ''
            this.text = savedData.text || ''
          }
        } catch (error) {
          console.error('Error ', error)
        }
      },

      async cancel() {
        const result = await showCancelAlert(this.$router)
        if (result.isConfirmed) {
          setTimeout(() => {
            this.$router.push('/lottery')
          }, 500)
        } else if (result.dismiss === 'cancel') {
          console.log('cancel')
        }
      },

      async save() {
        const result = await showSaveAlert()
        if (result.isConfirmed) {
          if (this.validateForm()) {
            const lotteryData = {
              id: this.id || uuidv4(),
              question1: this.question1,
              question2: this.question2,
              text: this.text,
            }

            try {
              if (this.lotteryID) {
                this.updateLottery({ id: this.lotteryID, lottery: lotteryData })
              } else {
                this.createLottery(lotteryData)
              }

              Swal.fire({
                title: 'Saved!',
                text: 'Your changes have been saved.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
              })

              setTimeout(() => {
                this.$router.push('/lottery')
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
