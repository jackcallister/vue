import Vue from 'vue'
import Heading from './Heading'
import Counter from './Counter'

const state = {
  count: 1
}

const handleClick = () => {
  state.count += 1
}

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    data: state,

    el: '#app',

    render: (h) => {
      return (
        <div>
          <Heading title='Click me...' onClick={handleClick} />
          <Counter count={state.count} />
        </div>
      )
    }
  })
})
