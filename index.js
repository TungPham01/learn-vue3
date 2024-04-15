const app = Vue.createApp({
  template: `
        <h1>
        Learn by {{teamName}} with me is {{ isHello ? lastName + ' ' + firstName
        : 'test'}}
      </h1>
      <button @click="onChangeName()">Change Name</button>
      <div class="modal" v-if="isShowModal">
        <h1>Modal content</h1>
      </div>
  `,
  data() {
    return {
      teamName: "RHP team",
      firstName: "Pham",
      lastName: "Tung",
      isHello: true,
      isShowModal: false,
    };
  },
  methods: {
    onChangeName() {
      this.firstName = "Duy";
      this.isShowModal = !this.isShowModal;
    },
  },
});

app.mount("#contact");
