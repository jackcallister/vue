import Vue from 'vue'

export default Vue.component('Heading', {
  functional: true,

  props: {
    title: '',
    onClick: null,
  },

  render: (h, { props }) => {
    return (
      <h1 on-click={() => { props.onClick() }}>{props.title}</h1>
    )
  },
})
