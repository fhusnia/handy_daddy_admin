<template>
  <div class="pt-16">
    <div class="p-8">
      <div class="flex flex-col bg-white">
        <div class="p-7">
          <div class="w-64 mb-4">
            <label
              for="options"
              class="block text-sm text-gray-700 font-bold mb-2"
              >Choose an point:</label
            >
            <select
              id="options"
              v-model="point"
              class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p v-if="errors.point" class="text-red-500 text-xs mt-2">
              !!!This field is required
            </p>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Full Name</label
            >
            <input
              type="text"
              v-model="fullName"
              @input="clearError('fullName')"
              :class="[
                'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                { 'border-red-600 shadow-red-500': errors.fullName },
              ]"
              placeholder="Enter FullName"
            />
            <p v-if="errors.fullName" class="text-red-500 text-xs mt-2">
              !!!This field is required
            </p>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Service</label
            >
            <input
              type="text"
              v-model="service"
              @input="clearError('service')"
              :class="[
                'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                { 'border-red-600 shadow-red-500': errors.service },
              ]"
              placeholder="Enter Service"
            />
            <p v-if="errors.service" class="text-red-500 text-xs mt-2">
              !!!This field is required
            </p>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mt-2 mb-2"
                >Comment</label
              >
              <textarea
                type="text"
                v-model="comment"
                @input="clearError('comment')"
                :class="[
                  'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  { 'border-red-600 shadow-red-500': errors.comment },
                ]"
                placeholder="Enter Comment"
              ></textarea>
              <p v-if="errors.comment" class="text-red-500 text-xs mt-2">
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
    name: 'ReviewCreate',
    data() {
      return {
        id: null,
        fullName: '',
        point: null,
        comment: '',
        service: '',
        errors: {
          fullName: false,
          point: false,
          comment: false,
          service: false,
        },
      }
    },
    created() {
      if (this.$route.params.id) {
        this.reviewID = this.$route.params.id
        this.loadReview(this.reviewID)
      }
    },

    methods: {
      ...mapActions('reviews', ['createReview', 'updateReview', 'getReviewId']),

      validateForm() {
        let valid = true
        this.errors = {
          fullName: !this.fullName,
          point: !this.point,
          comment: !this.comment,
          service: !this.service,
        }
        for (const key in this.errors) {
          if (this.errors[key]) valid = false
        }
        return valid
      },

      clearError(field) {
        this.errors[field] = false
      },
      async loadReview(id) {
        try {
          await this.$store.dispatch('reviews/getReviewId', id)
          const review = this.$store.getters['reviews/getreview'](id)
          const savedData = JSON.parse(localStorage.getItem('getReview'))
          if (review) {
            this.fullName = review.fullName || ''
            this.point = review.point || ''
            this.comment = review.comment || ''
            this.service = review.service || ''
          } else if (savedData) {
            this.fullName = savedData.fullName || ''
            this.point = savedData.point || ''
            this.comment = savedData.comment || ''
            this.service = savedData.service || ''
          }
        } catch (error) {
          console.error('Error ', error)
        }
      },
      async cancel() {
        const result = await showCancelAlert(this.$router)
        if (result.isConfirmed) {
          setTimeout(() => {
            this.$router.push('/review')
          }, 500)
        } else if (result.dismiss === 'cancel') {
          console.log('cancel')
        }
      },
      async save() {
        const result = await showSaveAlert()

        if (result.isConfirmed) {
          if (this.validateForm()) {
            const reviewData = {
              id: this.id || uuidv4(),
              fullName: this.fullName,
              point: this.point,
              comment: this.comment,
              service: this.service,
            }

            try {
              if (this.reviewID) {
                this.updateReview({ id: this.reviewID, review: reviewData })
              } else {
                this.createReview(reviewData)
              }

              Swal.fire({
                title: 'Saved!',
                text: 'Your changes have been saved.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
              })

              setTimeout(() => {
                this.$router.push('/review')
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
