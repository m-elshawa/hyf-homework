console.log("Re-write Time");

const setTimeoutPromise = new Promise((resolve, reject) => {
      setTimeout(function() {
      resolve("Success!")  
    }, 3000) 
  }) 
  
  setTimeoutPromise
  .then(() => {
  console.log("Called after 3 seconds"); 
  });

// i have issues understanding this part, even though it gives success but not sure what outcome i should expect
const getCurrentLocation = new Promise((resolve, reject) => {
     navigator.geolocation.getCurrentPosition((success, error) => {
         if(success){
             console.log("Success");
         } else if(error) {
             console.log("error");
         }

     });
     
});


getCurrentLocation()
    .then((position) => {
        console.log(position);
    })
    .catch((error) => {
        console.log(error);
    });

