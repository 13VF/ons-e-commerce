<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    sendAnalytics(event) {
      console.log(`Событие отправлено: ${event}`);
    }
  }
});
</script>