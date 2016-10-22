import Vue from 'vue'

export default Vue.component('Increment', {
  functional: true,

  props: {
    title: '',
    onClick: null,
  },

  render: (h, { props }) => {
    return (
      <button on-click={() => { props.onClick() }}>{props.title}</button>
    )
  },
})
