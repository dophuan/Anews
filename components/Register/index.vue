<template>
  <el-dialog
    title="Register Account"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    @closed="closeForm"
  >
    <el-form
      :model="form"
      :rules="rules"
      ref="registerForm"
      label-width="120px"
      class="register-form"
    >
      <el-form-item
        label="Email"
        prop="email"
        :rules="[
        {
          required: true,
          message: 'Please enter your email',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please make sure that your email is correct',
          trigger: 'change',
        },
      ]"
      >
        <el-input
          v-model="form.email"
          placeholder="Email"
        />
      </el-form-item>
      <el-form-item
        label="Password"
        prop="pass"
      >
        <el-input
          type="password"
          v-model="form.pass"
          placeholder="Enter your password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="Confirm"
        prop="checkPass"
      >
        <el-input
          type="password"
          v-model="form.checkPass"
          placeholder="Re-enter your password"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  import { event } from '../../utils/event'
  export default {
    name: 'RegisterDialog',
    props: {
      dialogVisible: {
        type: Boolean,
        required: true,
        default: false,
      }
    },
    data: () => {
      return {
        form: {
          email: '',
          pass: '',
          checkPass: '',
        },
        rules: {

        },
      }
    },
    methods: {
      submitForm() {

      },
      resetForm() {
        this.form = {
          email: '',
          pass: '',
          check: '',
        }
      },
      closeForm() {
        this.resetForm()
        event.emit('dialog.hide_register_form')
      }
    }
  }
</script>

<style lang="scss">
  .register-form {

  }
</style>
