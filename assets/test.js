const scripts =[
    {src:'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.js', defer: true, async: false},
    {src:'https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js'}
];

const scriptLoader = new RxScriptLoader.ScriptLoader(scripts);

scriptLoader.load();

scriptLoader.loadStatus().subscribe(status => console.log('scripts loaded', status));