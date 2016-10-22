import Vue from 'vue'
import Increment from './Increment'
import Counter from './Counter'

const state = {
  count: 1
}

const handleClick = () => {
  state.count += 1
}

// Async
setTimeout(() => {
  Vue.set(state, 'count', 10)
}, 5000)

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    data: state,

    el: '#app',

    render: (h) => {
      return (
        <div>
          <Increment title='Click me...' onClick={handleClick} />
          <Counter count={state.count} />
        </div>
      )
    }
  })
})
