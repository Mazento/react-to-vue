
new Vue({
  el: '#app',
  data: {
    counter: 1,
    message: 'Hello Vue!'
  },
  methods: {
    incrementCounter: function() {
        this.counter += 1;
    }
  }
});


Vue.component('vote-entry', {
  props: ['option'],
  data: () => ({ counter: 0 }),
  // data: function () {
  //   return {
  //     count: 0
  //   }
  // },
  template:  '<div className="button"> \
              <button v-on:click="counter++">{{option.title}} ⬆︎</button>  \
              <strong> голосов: {{counter}}</strong></div>'
})


new Vue({ 
  el: '#voting',
  data: {
    votingEntries: []
  },

  mounted () {
    $.getJSON('vote_button_list.json', json => {
      this.votingEntries = json
    })
  }
});
