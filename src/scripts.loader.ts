import { Observable, from, Observer, BehaviorSubject } from "rxjs";
import { map, filter, reduce, switchMap, mergeAll, shareReplay } from "rxjs/operators";

interface ScriptLoadResponse {
  src: string;
  success: boolean;
}

class ScriptLoader {
  private _loadStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _loadScripts$: Observable<any> = null;
  constructor(scripts: Script[]) {
    this._loadScripts$ = loadScripts(scripts);
  }

  load() {
    this._loadScripts$.subscribe(
      _ => undefined,
      err => {
        this._loadStatus.next(true);
      },
      () => {
        this._loadStatus.next(true);
      }
    );
  }

  isLoaded(): boolean {
    return this._loadStatus.value;
  }

  loadStatus(): Observable<boolean> {
    return this._loadStatus.asObservable();
  }
}

const loadScripts = (files: Script[]): Observable<ScriptLoadResponse[]> => {
  const files$ = getDocumentScripts().pipe(
    switchMap(scripts =>
      from(files).pipe(
        filter((script: Script) => scripts.indexOf(script.src) == -1),
        map(script => loadScript(script))
      )
    ),
    mergeAll(),
    reduce((acc: [], curr: ScriptLoadResponse) => [...acc, curr], []),
    shareReplay(1)
  );

  return files$;
};

const getDocumentScripts = (): Observable<string[]> => {
  return from(document.querySelectorAll("script")).pipe(
    map(script => (<HTMLScriptElement>script).src),
    reduce((acc: string[], curr: string) => {
      acc.push(curr);
      return acc;
    }, [])
  );
};

const loadScript = (script: Script): Observable<ScriptLoadResponse> => {
  return Observable.create((observer: Observer<ScriptLoadResponse>) => {
    const scriptElm = document.createElement("script");
    document.head.appendChild(scriptElm);

    scriptElm.onload = () => {
      observer.next({ src: script.src, success: true });
      observer.complete();
    };
    scriptElm.onerror = () => {
      observer.next({ src: script.src, success: false });
      observer.complete();
    };
    scriptElm.src = script.src;
    scriptElm.async = script.async !== undefined ? script.async : false;
    scriptElm.defer = script.defer !== undefined ? script.defer : false;
    return () => {
      delete scriptElm.onload;
      delete scriptElm.onerror;
    };
  });
};

export { loadScripts, getDocumentScripts, ScriptLoader };
