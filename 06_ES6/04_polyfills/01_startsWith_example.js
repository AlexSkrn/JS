// a polyfill is used to patch missing functionality
// but there are many other uses for polyfills
// see here: https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills

// a polyfill for the new ES6 String method, startsWith()
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

// Sample usage
'Literature'.startsWith('Lit');
'Literature'.startsWith('Lit', 2);
'Literature'.startsWith('ES6');
