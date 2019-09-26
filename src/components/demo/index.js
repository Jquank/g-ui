import Vue from 'vue'
Vue.component('demo', {
  render: function(createElement) {
    return createElement(
      'a',
      {
        class: ['g-link', this.type ? 'g-link--' + this.type : 'g-link--default']
      },
      [
        createElement(
          'i',
          {
            class: ['iconfont g-icon-' + this.icon]
          },
          this.$slots.default
        )
      ]
    )
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_blank'
    },
    icon: {
      type: String,
      default: ''
    }
  }
})
