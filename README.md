# rx-script-loader

RxScriptLoader is a fast, lightweight and flexible script that speeds up your web application by loading js files dynamiclly. It's written in TypeScript and uses RxJS library. Can be used as ES2015 module import or can be loaded with script tag.





Installation
------------

```bash
npm install rx-script-loader
```

Usage
------------

ES2015 module import:
```javascript
import { ScriptLoader } from 'rx-script-loader';
// ...
const scripts =[
    {src:'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.js', defer: true, async: false},
    {src:'https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js'}
];

const libScriptsLoader = new ScriptLoader(scripts);
libScriptsLoader.load();
libScriptsLoader.loadStatus().subscribe(status => console.log('scripts loaded', status));

```


The consumer also can use the library by loading it via a script tag:
```html
<!doctype html>
<html>
  ...
  <script src="dist/rx-script-loader.js"></script>
  <script>
    
   const scripts =[
    {src:'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.js', defer: true, async: false},
    {src:'https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js'}
   ];

   const scriptLoader = new RxScriptLoader.ScriptLoader(scripts);

   scriptLoader.load();

   scriptLoader.loadStatus().subscribe(status => console.log('scripts loaded', status));
  </script>
</html>
```

Script Model
------------
src - string, required

defer - true/false, optional

async - true/false, optional

ASYNC AND DEFER

Both async and defer are script attributes:

if you provide both, async takes precedence on modern browsers. Old browsers that support defer but do not support async will fallback to defer.
