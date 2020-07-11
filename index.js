Vue.component('base-layout', {
  template: `
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    items: [
      {index: 1, value: "a"},
      {index: 2, value: "b"},
      {index: 3, value: "c"},
      {index: 4, value: "d"},
      {index: 5, value: "e"},
      {index: 6, value: "f"},
      {index: 7, value: "g"},
    ],
    numbers: [1, 2, 3, 4, 5],
    sets: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10]
    ],
  },
  computed: {
    eventNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function(numbers) {
      return numbers.filter(function(number) {
        return number % 2 === 0
      })
    }
  }
})