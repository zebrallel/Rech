function P(exec){
  this._resolve = [];
  this._rejected = [];
  this._value;

  this.then = (resolve) => {
    this._resolve.push(resolve)
    return this;
  }

  this.reject = (reject) => {
    this._rejected.push(reject);
    return this;
  }

  this.catch = () => {

  }

}

var executer = function(resolve, reject){
  setTimeout(() => {
    console.log('executer exec')
    resolve(800)
  }, 1000);
}
var p = new P(executer)
