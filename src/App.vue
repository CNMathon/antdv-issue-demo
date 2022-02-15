<template>
  <div class="login-page">
    <div class="login-page__login-card">
      <a-form class="login-page__login-card__form">
        <a-form-item v-bind="validateInfos.account">
          <a-input
            v-model:value="formData.account"
            size="large"
            placeholder="请输入账号"
          >
            <template #prefix>
              <UserOutlined
                :style="{
                  color: '#235dff',
                }"
              />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item v-bind="validateInfos.password">
          <a-input-password
            v-model:value="formData.password"
            size="large"
            placeholder="请输入密码"
          >
            <template #prefix>
              <LockOutlined
                :style="{
                  color: '#235dff',
                }"
              />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            size="large"
            class="login-page__login-card__form__login-button"
            @click="() => onClickLogin()"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Form } from "ant-design-vue";
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const isLoading = ref(false);

    /**
     * 表单数据
     */
    const formData = reactive({
      account: "",
      password: "",
    });

    const rulesRef = reactive({
      account: [
        {
          required: true,
          message: "请输入账号",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
        },
      ],
    });

    const { validateInfos, validate } = Form.useForm(formData, rulesRef);

    const onClickLogin = async function onClickLogin() {
      isLoading.value = true;

      await validate();

      isLoading.value = false;
    };

    return {
      isLoading,
      formData,
      validateInfos,
      onClickLogin,
    };
  },
});
</script>
