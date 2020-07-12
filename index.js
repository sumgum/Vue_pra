// Vue.component('base-layout', {
//   template: `
//   <div class="container">
//     <header>
//       <slot name="header"></slot>
//     </header>
//     <main>
//       <slot></slot>
//     </main>
//     <footer>
//       <slot name="footer"></slot>
//     </footer>
//   </div>
//   `
// })

var app = new Vue({
  el: '#app',
  data: {
    author: {
      name: 'sum',
    }
  },
  created: function() {
    let that = this;
    this.timer = setTimeout(function() {
      // ディレクティブ要素として後から追加できるのは入れ子となったオブジェクトの配下だけ
      Vue.set(that.author, 'company', 'small');
      app.$set(that.author, 'dept', 'dev');
      // Object.assign も使える
      that.author = Object.assign({}, that.author,
        {age: 18});
    }, 1000);
  },
  beforeDestroy: function() {
    clearInterval(this.timer);
  }
})