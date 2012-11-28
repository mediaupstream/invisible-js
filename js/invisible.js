//
// Make stuff invisible };->
//
var Invisible = function(options){
  options = (options) ? options : {};
  this.char1 = options.char1 || ' ';
  this.char2 = options.char2 || '\t';
  this.end = options.end || '\n';
  // encode properly
  this.char1 = this.encode_utf8( this.char1 );
  this.char2 = this.encode_utf8( this.char2 );
  this.end = this.encode_utf8( this.end );

  this.results = '';
  this.raw = [];
  this.elapsed = 0;
  this.debug = false;
};


Invisible.prototype.encode_utf8 = function(s){ return unescape(encodeURIComponent(s)) }
Invisible.prototype.decode_utf8 = function(s){ return decodeURIComponent(escape(s)) }

Invisible.prototype.set = function(key, val){
  if(typeof this[key] == 'undefined') return false;
  this[key] = this.encode_utf8(val);
  return true;
}

Invisible.prototype.get = function(key){
  if(typeof this[key] == 'undefined') return false;
  return this.decode_utf8( this[key] );
}

Invisible.prototype.decode = function(s){
  var start = Date.now();
  var char1 = this.get('char1'), 
      char2 = this.get('char2'), 
      end   = this.get('end'),
      decode = this.decode_utf8;
  if(s.indexOf(end) == -1) s += end; // ensure we can end
  var r = [], 
      curr = 0,
      bin = [],
      slen = s.length,
      l1 = parseInt(char1.length, 10), 
      l2 = parseInt(char2.length, 10);

  for(var j=0; j<=slen; j++){
    var tmp = 0;
    for(var i=7; i>=0; i--){
      if(s.slice(curr, (curr+l2)) == char2){
        curr += l2;
      } else if (s.slice(curr, (curr+l1)) == char1){
        tmp = tmp | (Math.pow(2, i));
        curr += l1;
      }
    }
    if(tmp) r.push(String.fromCharCode(tmp))
  }
  var stop = Date.now();
  this.results = decode(r.join(''));
  this.raw = r;
  this.elapsed = (stop - start) / 1000;
  if(this.debug) console.log('Time elapsed:', this.elapsed, 'seconds');
  return this.results;
};

Invisible.prototype.encode = function(s){
  if(typeof s != 'string') return undefined;
  s = this.encode_utf8( s );
  var start = Date.now();
  var r = [];
  for(var i=0; i<s.length; i++){
    for(var j=7; j>=0; j--){
      if(s.charCodeAt(i) & (Math.pow(2,j))){
        r.push(this.char1)
      } else {
        r.push(this.char2);
      }
    }
  }
  r.push(this.end);
  var stop = Date.now();
  this.results = this.decode_utf8( r.join('') );
  this.raw = r;
  this.elapsed = (stop - start) / 1000;
  if(this.debug) console.log('Time elapsed:', this.elapsed, 'seconds');
  return this.results;
};