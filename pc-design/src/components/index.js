import Demo from './demo.vue'
const Components = {
  Demo
}
const G = {
  install (Vue, options) {
    Object.keys(Components).forEach(name => {
      Vue.component(name, Components[name])
    })
  }
}

export default G
