describe("Script Loader", function () {
    it("should load scripts", (done) => {
        const scripts = [{
                src: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.js',
                defer: true,
                async: false
            },
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js'
            }
        ];
        const scriptLoader = new RxScriptLoader.ScriptLoader(scripts);
        scriptLoader.load();
        let count = 0;
        scriptLoader.loadStatus().subscribe(status => {
            count += 1;
            if (count === 2) {
                expect(true).toBe(status);
                done();
            }
        });
    })

});