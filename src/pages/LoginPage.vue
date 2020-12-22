<template>
  <div class="w-full h-full text-white sm:h-auto relative">
    <div class="form__bg bg__header hidden lg:block"></div>
    <form
      class="form h-full sm:h-auto rounded-none sm:rounded-lg bg-neutral-white mx-auto p-5 sm:p-10 w-full"
      @submit="sendRequest"
    >
      <div>
        <div
          class="form__title py-10 text-center text-2xl text-secondary-blue-dark"
        >
          <div>Login</div>
          <div class="font-bold">Refactory</div>
        </div>

        <div class="form__group pb-4">
          <div class="flex justify-between text-sm pb-2 relative">
            <label class="font-bold" for="username">Username</label>
          </div>
          <input
            v-model="vUsername"
            class="form__input --all rounded border"
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div class="form__group pb-6">
          <div class="flex justify-between text-sm pb-2">
            <label class="font-bold" for="password">Password</label>
          </div>
          <div
            :class="
              `form__parent flex border rounded ${
                isFocus ? 'is-focus' : 'border'
              }`
            "
          >
            <input
              v-model="vPassword"
              :type="isHide ? 'password' : 'text'"
              class="form__input rounded-l"
              name="password"
              id="password"
              ref="vPassword"
              @focus="isFocus = true"
              @blur="isFocus = false"
              autocomplete="off"
            />
            <div
              @click="(isHide = !isHide), $refs.vPassword.focus()"
              class="flex place-items-center select-none text-neutral-1 px-2 rounded-r bg-white cursor-pointer"
            >
              <font-awesome
                class="text-black"
                v-if="isHide"
                :icon="['fa', 'eye']"
              />
              <font-awesome
                class="text-black"
                v-else
                :icon="['fa', 'eye-slash']"
              />
            </div>
          </div>
        </div>

        <button
          class="form__btn mb-8 text-center hover:bg-blue-800 bg-secondary-blue w-full text-white p-2 block rounded-lg"
          type="submit"
          :disabled="!isValid"
        >
          Masuk
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHide: true,
      vUsername: "",
      vPassword: "",
      isFocus: false
    };
  },
  computed: {
    isValid() {
      return this.vUsername != "" && this.vPassword != "";
    }
  },
  methods: {
    async sendRequest(e) {
      e.preventDefault();
      const data = {
        username: this.vUsername,
        password: this.vPassword
      };
      {
        data;
      }
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.is-focus {
  border: 0.4px solid #0055d0;
  box-shadow: 0px 0px 1px 6px rgba(0, 85, 208, 0.1);
}
.form {
  max-width: 500px;
  transition: all ease 0.3s;
  &__input {
    @apply p-2 w-full block text-black;
    // border: none;
    outline: none;
    transition: all ease 0.3s;
    &.--all {
      &:focus {
        border: 0.4px solid #0055d0;
        box-shadow: 0px 0px 1px 6px rgba(0, 85, 208, 0.1);
      }
    }
  }
  &__parent {
    transition: all ease 0.3s;
  }

  &__bg {
    @apply w-full h-full absolute;
    z-index: -1;
  }
}
</style>
