# await-button
await-buttons is a super simple module that add a loading indicator to a button of when you process a promose or await code. Check out the demo!



## Getting started
Install it via npm:
```
npm i await-button -S
```


### Usage

``` HTML
<AwaitButton @click="handleBtnClick">Click me</AwaitButton>
```

``` javascript
import AwaitButton from 'await-button'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    AwaitButton
  },
  methods: {
    handleBtnClick () {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }
  }
}
```

