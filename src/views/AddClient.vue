<template>
  <div class="addclient router-container flex f-column f-aic f-jcc">
    <form-card
      :fields="clientdata"
      btntext="add client"
      width="250px"
    ></form-card>
  </div>
</template>

<script>
import FormCard from '../components/FormCard'

export default {
  components: {
    FormCard
  },
  data() {
    return {
      clientdata: [
        "Client ID",
        "Client Name",
        "Employee ID",
        "Branch"
      ]
    }
  }
}
</script>

<style>

</style>
