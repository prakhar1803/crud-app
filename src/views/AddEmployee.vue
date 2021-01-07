<template>
  <div id="add-emp" class="flex f-column f-aic">
    <form-card
      :fields="fields"
      btntext="insert"
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
      fields: [
        "Employee ID",
        "First Name",
        "Last Name"
      ]
    }
  }
}
</script>

<style>
  
</style>