function debounce(fn,delay){
  let time  = null;
  return function(){
    clearTimeout(time);
    time = setTimeout(() => {
      fn.apply(this,arguments);
    }, delay);
  }
}

function go(){
  console.log("qqq");
}

window.addEventListener('click', go)