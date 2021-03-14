import Vue from 'vue'
import marked from 'marked'

marked.setOptions({
    langPrefix: "",
    breaks: true,
});

declare module 'vue/types/vue' {
  interface Vue {
    $marked(text: string): string
  }
}

// export default marked
Vue.prototype.$marked = (text: string) => marked(text)