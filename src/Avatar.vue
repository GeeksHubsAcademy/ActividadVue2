<template>
<div >
    <h1  class="avatar" :style="`backgroundColor:rgb(${r},${g},${b})`">{{inicial}}</h1>
    <!-- <h1  class="avatar" :style="'backgroundColor:rgb(' + r + ','+ g + ','+ b + ')'">{{inicial}}</h1> -->
    <!-- <h3 :class="{red: isRed, borderBlue: isBlue}">{{name}}</h3>
    <button type="button" name="button" @click="changeToRed">Change background</button>
    <button type="button" name="button" @click="changeInputType">Change input type</button>
    <input v-focus v-bind:type="inputtype" name="" value="" v-model="money">
    <input v-bind:type="inputtype" name="" value="" v-model="currency">
    <h1>{{money | toCurrency(currency) }}</h1> -->

</div>
</template>

<script>
export default {
  name: 'avatar',
  data() {
    return {
      hola: 'hola mundo',
      // isRed: false,
      // isBlue: true,
      // inputtype:'text',
      // money: 1,
      // currency: '$'
    }
  },
  filters: {
      toCurrency: function(value, currency) {
          if (currency === '$') {
              return  currency + value

          } else {

              return value + ' ' + currency
          }
      }
  },
  props: {
      name: {
          type: String,
          default: 'hola'
      },
  },
  methods: {
      // changeToRed: function() {
      //     this.isRed = !this.isRed;
      //     this.isBlue = !this.isBlue;
      //
      // },
      // changeInputType() {
      //     if (this.inputtype === 'text') {
      //         this.inputtype = 'password'
      //     } else  {
      //         this.inputtype = 'text'
      //
      //     }
      // }
  },
  computed: {
      inicial: function() {
          return this.name.split('')[0]
      },
      r() {
          return parseInt(Math.random() * 255);
      },
      g() {
          return parseInt(Math.random() * 255);
      },
      b() {
          return parseInt(Math.random() * 255);
      },
  }

}
</script>

<style scoped lang="css">

.avatar {
    display: inline-block;
    background: blue;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    line-height: 92px;
    color: white;
    font-size: 37px;
}
.red {
    background: red;
}
.borderBlue {
    border: 10px solid blue;
}
</style>
