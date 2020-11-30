import GButton from '@/components/button/index'
import GLink from '@/components/link/index'
import GInput from '@/components/input/index'
import { GCheckbox, GCheckboxGroup } from '@/components/checkbox/index'

import '../assets/common-less/index.less'
const Components = {
    GButton,
    GLink,
    GInput,
    GCheckbox,
    GCheckboxGroup
}
const G = {
    install(Vue, options) {
        Vue.prototype.$gEventBus = new Vue()
        Object.keys(Components).forEach(name => {
            Vue.component(name, Components[name])
        })
    }
}

export default G

export { GButton, GLink, GInput, GCheckbox, GCheckboxGroup }
