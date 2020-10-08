console.log("Promise resolved after set time");


function resolveAfter8Seconds(resolveAfter) { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(resolveAfter);
      }, 8000);
    });
  }
  
  async function f1() {
    const result = await resolveAfter8Seconds(("I am called asynchronously"));
    console.log(result); 
  }
  
  f1();
