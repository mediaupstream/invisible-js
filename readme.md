## Invisible.js 

### Make Stuff Invisible™ by transforming your input into Binary ...with a Twist.


By substituting a `space` and `tab` character with the resulting `1s` and `0s` we can achieve invisibility.  

Try it out online at http://mediaupstream.com/sandbox/invisible-js  


### Usage  

Create an instance of `Invisible`, passing in options if you want:  

    var inv = new Invisible({
      char1: 'A',
      char2: 'B',
      end: 'x',
      debug: false
    });
  
  
Options explained:  
    
    {
      char1: ' ',    // default: space character. Takes the place of the binary 1
      char2: '\t',   // default: tab character. Takes the place of the binary 0
      end: '\n',     // default: newline character. Signifies the end of the encoding
      debug: false,  // default: false. Enabling will output debug information to the console
    }
  
  
Now you can `encode` and `decode` messages like so:  

    // results in 'BAABABBBBAABABBAx'
    var hidden_message = inv.encode('hi'); 
    
    // results in 'hi'
    var message = inv.decode( hidden_message );
  
  
# License

MIT License `0100110101001001010101000010000001001100011010010110001101100101011011100111001101100101`