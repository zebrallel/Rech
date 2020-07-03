let runningPromise = null;

function lastPromise(promiseFunction) {
    return function(){
      if(runningPromise){
          runningPromise.abort()
      }

      var myPromise = promiseWithAbort(promiseFunction())
      
      runningPromise = myPromise
      return myPromise
      
    }
}

function promiseWithAbort(promise){
    let _abort = null;
    const aborter = new Promise(function(res, rej){
        _abort = function(){
           res()
        }
    })

    const race = Promise.race([
        promise,
        aborter
    ])

    race.abort = _abort

    return race
}

var count = 0;

let promiseFunction = () =>
  new Promise(rs =>
    window.setTimeout(() => {
      rs(count++);
    }, 1000)
  );

let lastFn = lastPromise(promiseFunction);

lastFn().then(console.log)
lastFn().then(console.log)
lastFn().then(console.log)
lastFn().then(console.log)