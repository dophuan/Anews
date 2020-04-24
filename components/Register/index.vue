<template>
  <el-dialog
    title="Register Account"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    @closed="closeForm"
  >
    <el-form
      :model="form"
      ref="registerForm"
      label-width="120px"
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
          @focus="preventValidate = false"
        />
      </el-form-item>
      <el-form-item
        label="Password"
        prop="pass"
        :rules="[
          {
            required: true,
            message: 'Please enter your password',
            trigger: 'blur',
          },
          {
            validator: validatePassword,
            trigger: 'change',
          },
        ]"
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
        :rules="[
          {
            required: true,
            message: 'Please re-enter your password',
            trigger: 'blur',
          },
          {
            validator: validateConfirm,
            trigger: 'change',
          },
        ]"
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
  import { isEmpty } from 'lodash-es'
  import { sha256 } from 'js-sha256'

  export default {
    name: 'RegisterDialog',
    props: {
      dialogVisible: {
        type: Boolean,
        required: true,
        default: false,
      }
    },
    data: function() {
      const validatePassword = (rule, value, callback) => {
        // eslint-disable-next-line no-useless-escape
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        const match = regex.exec(value)
        if (isEmpty(match)) {
          callback(new Error("Please enter a password that contains at least a letter, a digit, and a special character"))
        } else {
          callback()
        }
      }
      const validateConfirm = (rule, value, callback) => {
        if (value !== this.form.pass) {
          callback(new Error("Password not match"))
        } else {
          callback()
        }
      }
      return {
        preventValidate: true,
        form: {},
        users: JSON.parse(localStorage.getItem('UsersList') || '[]'),
        validatePassword,
        validateConfirm,
      }
    },
    watch: {
      form: {
        handler() {
          if (!this.preventValidate) {
            this.$refs('registerForm').validate()
          }
        }
      }
    },
    mounted() {
      this.form = {
        email: '',
        pass: '',
        checkPass: '',
      }
    },
    methods: {
      submitForm() {
        if (isEmpty(this.form.email) ||
        isEmpty(this.form.pass) ||
        isEmpty(this.form.checkPass) ||
        this.form.checkPass !== this.form.pass) {
          this.$notify.error({
            title: 'Fail',
            message: 'Failed to create user success!',
          })
        } else {
          this.$notify.success({
            title: 'Success',
            message: 'Create user success!',
          })
          let user = {
            email: this.form.email,
            pass: sha256(this.form.pass)
          }
          this.preventValidate = true
          this.users.push(user)
          localStorage.setItem('UsersList', JSON.stringify(this.users))
          this.closeForm()
        }
      },
      resetForm() {
        this.form = {
          email: '',
          pass: '',
          checkPass: '',
        }
      },
      closeForm() {
        this.resetForm()
        event.emit('dialog.hide_register_form')
      },
    }
  }
</script>

<style lang="scss">

</style>
