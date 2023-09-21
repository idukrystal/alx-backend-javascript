function callOnce(fn) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      fn.apply(this)
    }
  }
}

function sayHello() {
  console.log(">>> hello world");
  
}

console.log(">>> ",callOnce.called)

fn = callOnce(sayHello)

console.log(">>> ",fn.called)

fn();
fn();
fn();
