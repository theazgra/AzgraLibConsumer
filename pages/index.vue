<template>
  <div>
    <h1 class="foobar">Content</h1>
    <h4>{{ $t('messages.welcome') }}</h4>
    <h4>{{ $t('buttons.buy') }}</h4>
    <AzgraButton class="foobar" title="toto je test" />
    <AzgraBlock>
      <AzgraBlock>
        <AzgraBlock>
          <AzgraBlock>
            <AzgraClicker />
          </AzgraBlock>
        </AzgraBlock>
      </AzgraBlock>
    </AzgraBlock>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
// import { notificationService } from 'AzgraNuxtLibrary';

export default Vue.extend({
  name: 'ConsumerIndex',
  mounted() {
    // console.log(this.$store);
    // console.log(this.$accessor.userModule.name);
    this.$accessor.setToken('4564654');
    this.$accessor.user.setName('Vojta');
    // notificationService.notify(this.$accessor.token);

    // notificationService.notify(this.$accessor.user.name);
  },
  methods: {
    log() {
      console.log(this.$accessor.user.getName);
    },
  },
});
</script>
<style lang="sass" scoped>
.foobar
  color: $mycolor
</style>
