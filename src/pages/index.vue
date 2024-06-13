<template>
  <v-container>
    <v-responsive max-width="600" class="mx-auto mt-5">
      <div class="text-center text-pink mb-5 text-h4 font-weight-bold">
        Заявка на возврат
      </div>
      <v-form v-model="valid" class="pink-darken-2 g-y-10" ref="form">
        <v-row>
          <v-col>
            <v-text-field
              v-model="form.firstName"
              :rules="nameRules"
              label="Имя"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="7">
            <v-text-field
              v-model="form.lastName"
              :rules="nameRules"
              label="Фамилия"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-text-field
          v-model="form.phone"
          :rules="phoneRules"
          label="Телефонный номер"
          required
        ></v-text-field>
        <v-textarea
          v-model="form.text"
          :rules="textRules"
          label="Текст заявки"
          required
        ></v-textarea>
        <v-btn
          @click="submitForm"
          class="mt-2 w-100"
          size="large"
          color="pink-darken-2"
        >
          Отправить заявку
        </v-btn>
      </v-form>
    </v-responsive>
    <v-dialog v-model="dialog.shown" width="auto">
      <v-card
        max-width="400"
        :prepend-icon="dialog.icon"
        :text="dialog.text"
        :title="dialog.title"
      >
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="dialog.shown = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      dialog: {
        shown: false,
        text: "",
        title: "",
        icon: "",
      },
      form: {
        firstName: "",
        lastName: "",
        phone: "",
        text: "",
      },
      nameRules: [
        (v) => !!v || "Обязательно для заполнения",
        (v) =>
          (v && v.length <= 30) || "Имя должно быть не длиннее 30 символов",
      ],
      phoneRules: [
        (v) => !!v || "Обязательно для заполнения",
        (v) => /^\d{10,15}$/.test(v) || "Введите корректный телефонный номер",
      ],
      textRules: [
        (v) => !!v || "Обязательно для заполнения",
        (v) =>
          (v && v.length <= 500) ||
          "Текст заявки должен быть не длиннее 500 символов",
      ],
    };
  },
  methods: {
    async submitForm() {
      if (this.valid) {
        if (this.$refs.form.validate()) {
          try {
            await this.axios.post("/order", this.form);
            this.dialog.icon = "mdi-check-bold";
            this.dialog.title = "Успех";
            this.dialog.text = "Заявка отправлена.";
            this.dialog.shown = true;
          } catch (error) {
            this.dialog.icon = "mdi-alert-circle";
            this.dialog.title = "Ошибка при отправке заявки";
            this.dialog.text = "Данные формы не валидны";
            this.dialog.shown = true;
          }
        }
      } else {
        this.dialog.title = "Ошибка при отправке заявки";
        this.dialog.text = "Пожалуйста, заполните форму правильно.";
        this.dialog.icon = "mdi-alert-circle";
        this.dialog.shown = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-input {
  margin-bottom: 10px;
}
</style>
