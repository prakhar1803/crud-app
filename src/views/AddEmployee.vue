<template>
  <div id="add-emp" class="router-container flex f-column f-aic f-jcc">
    <form-card
      :fields="fields"
      btntext="add employee"
      width="250px"
      querytype="insert"
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
        "Last Name",
        "Branch ID",
        "Salary"
      ]
    }
  }
}
</script>

<style>
  
</style>