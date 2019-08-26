import GButton from '@/components/button/index'
import GLink from '@/components/link/index'

import '../assets/common-less/index.less'
const Components = {
  GButton,
  GLink
}
const G = {
  install(Vue, options) {
    Object.keys(Components).forEach(name => {
      Vue.component(name, Components[name])
    })
  }
}

export default G

export { GButton, GLink }
