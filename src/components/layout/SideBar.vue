<template>
  <div class="container bg-white">
    <div class="p-8 fixed bg-white">
      <div class="flex flex-col">
        <div class="logoimg pb-6">
          <img src="../../assets/handydaddyprof.png" />
        </div>
        <div style="height: 620px" class="pt-5 nav overflow-y-auto w-60">
          <ul class="list-none space-y-8 text-gray-500">
            <li class="hover:text-yellow-500" @click="updateHeader('Blog')">
              <router-link to="/blogs" active-class="router-link-active"
                ><a href="#">Blog</a></router-link
              >
            </li>
            <li
              class="hover:text-yellow-500"
              @click="updateHeader('Appliance')"
            >
              <router-link to="/appliances"
                ><a href="#">Appliances</a></router-link
              >
            </li>
            <li class="hover:text-yellow-500" @click="updateHeader('Contact')">
              <router-link to="/contact"><a href="#">Contact</a></router-link>
            </li>
            <li
              class="hover:text-yellow-500"
              @click="updateHeader('ContactForm')"
            >
              <router-link to="/contactform"
                ><a href="#">ContactForm</a></router-link
              >
            </li>
            <li class="hover:text-yellow-500" @click="updateHeader('Faq')">
              <router-link to="/faq"><a href="#">Faq</a></router-link>
            </li>
            <li
              class="hover:text-yellow-500"
              @click="updateHeader('Homewhyus')"
            >
              <router-link to="/homewhyus"
                ><a href="#">HomeWhyUs</a></router-link
              >
            </li>
            <li class="hover:text-yellow-500" @click="updateHeader('Join')">
              <router-link to="/join"><a href="#">Join</a></router-link>
            </li>
            <li class="hover:text-yellow-500" @click="updateHeader('Lottery')">
              <router-link to="/lottery"><a href="#">Lottery</a></router-link>
            </li>
            <li
              class="hover:text-yellow-500"
              @click="updateHeader('LotteryImage')"
            >
              <router-link to="/lotteryimage"
                ><a href="#">LotteryImage</a></router-link
              >
            </li>
            <li class="hover:text-yellow-500" @click="updateHeader('Order')">
              <router-link to="/order"><a href="#">Order</a></router-link>
            </li>
            <li class="hover:text-yellow-500" @click="updateHeader('Privacy')">
              <router-link to="/privacy"><a href="#">Privacy</a></router-link>
            </li>
            <li class="hover:text-yellow-500" @click="updateHeader('Whyus')">
              <router-link to="/whyus"><a href="#">WhyUs</a></router-link>
            </li>
            <li class="hover:text-yellow-500" @click="updateHeader('Review')">
              <router-link to="/review"><a href="#">Review</a></router-link>
            </li>
            <li class="hover:text-yellow-500" @click="updateHeader('Slider')">
              <router-link to="/sliderimage"
                ><a href="#">Slider</a></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '@/eventBus'
  export default {
    name: 'SideBar',
    methods: {
      updateHeader(newText) {
        eventBus.$emit('updateHeader', newText)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .router-link-active {
    color: #fbbf24;
  }
</style>
