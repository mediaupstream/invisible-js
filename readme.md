## Invisible.js 

### Make Stuff Invisible™ by transforming your input into Binary ...with a Twist.


By substituting a `space` and `tab` character with the resulting `1s` and `0s` we can achieve invisibility.  

Try it out online at http://mediaupstream.com/sandbox/invisible-js  


### Usage  

Create an instance of `Invisible`, passing in options if you want:  

```javascript
var inv = new Invisible({
  char1: 'A',    // default: space character. Takes the place of the binary 1
  char2: 'B',    // default: tab character. Takes the place of the binary 0
  end: 'x',      // default: newline character. Signifies the end of the encoding
  debug: false   // default: false. Enabling will output debug information to the console
});
```
  
  
Now you can `encode` and `decode` messages like so:  

```javascript
var hidden_message = inv.encode('hi');        // results in 'BAABABBBBAABABBAx'
var message = inv.decode( hidden_message );   // results in 'hi'
```
  
# License

MIT License `01101001011101000010011101110011001000000110011001110010011001010110010100100001`