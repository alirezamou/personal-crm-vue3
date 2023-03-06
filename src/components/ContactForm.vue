<template>
  <form @submit="(e) => submitContact(e)">
    <input
      v-model="contactName"
      type="text"
      class="input"
      placeholder="Contact Name"
      required="true"
    />
    <div class="flex">
      <div class="flex-1 pr-2">
        <div class="input-block">
          <label for="details" class="font-bold">Details about first contact: </label>
          <input type="text" class="input" v-model="contactDetails" />
        </div>
        <div class="input-block">
          <label class="input-label" for="details">Notes: </label>
          <textarea rows="10" class="textarea" v-model="contactNotes"></textarea>
        </div>

        <div class="input-block">
          <label class="input-label">Relationship Quality</label>
          <div class="flex">
            <label for="good" class="flex-1 option bg-green-light">
              <input type="radio" id="good" value="good" v-model="quality" />
              <span>Good</span>
            </label>
          </div>
          <div class="flex">
            <label for="okay" class="flex-1 option bg-orange-light">
              <input type="radio" id="okay" value="okay" v-model="quality" />
              <span>Okay</span>
            </label>
          </div>
          <div class="flex">
            <label for="barely" class="flex-1 option bg-red-light">
              <input type="radio" id="barely" value="barely" v-model="quality" />
              <span>Barely</span>
            </label>
          </div>
        </div>
      </div>
      <div class="flex-1 pl-2">
        <template v-for="(src, key) in contact.main" :key="key">
          <div class="input-block">
            <label :for="`contact.${key}`" class="font-bold">{{ src.placeholder }}</label>
            <input
              class="input"
              type="text"
              :id="`contact.${key}`"
              v-model="src.value"
              :placeholder="src.placeholder"
            >
            <a :href="links[key]" target="_blank">{{ src.value }}</a>
          </div>
        </template>
        <div class="input-block">
          <label for="" class="input-tag">Custom tags<em> Seperated by comma</em></label>
          <input type="text" class="input" v-model="tags"/>
        </div>
        <div class="tags">
          <span class="tag" v-for="(tag, index) in availableTags" :key="index">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
    <button type="submit" class="btn">{{ submitButtonLabel }}</button>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  props: {
    submitButtonLabel: String,
  },
  data() {
    return {
      contactName: "",
      contact: {
        main: {
          mail: {
            value: "",
            placeholder: "Email Address"
          },
          phone: {
            value: "",
            placeholder: "Phone Number"
          },
          twitter: {
            value: "",
            placeholder: "Twitter Handle"
          }
        }
      },
      tags: "",
      contactDetails: "",
      contactNotes: "",
      quality: ""
    };
  },
  computed: {
    links() {
      return {
        mail: `mailto:${this.contact.main.mail.value}`,
        phone: `tel:${this.contact.main.phone.value}`,
        twitter: `https://twitter.com/${this.contact.main.twitter.value}`,
      }
    },
    availableTags: {
      get() {
        return this.tags.split(",").filter(tag => tag !== "");
      },
      set(value) {
        this.tags = value;
      }
    }
  },
  methods: {
    submitContact(e) {
      e.preventDefault();
      this.contactName &&
        this.$emit("submitContact",
        { 
          name: this.contactName,
          contactDetails: this.contactDetails,
          contactNotes: this.contactNotes,
          quality: this.quality,
          tags: this.tags,
          contact: this.contact
        });
      this.contactName = "";
    },
  },
};
</script>
