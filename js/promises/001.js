//  A Promise is a better way for asynchronous programming when compared to the common way of using a setTimeout() type of method.
setTimeout(function() {
  console.log("Work 1");
  setTimeout(function() {
    console.log("Work 2");
  }, 1000);
  console.log("End")
})

// It prints "End", "Work 1" and "Work 2" in that order (the work is done asynchronously). But if there are more events like this, the code becomes very complex.

// ES6 comes to the rescue in such situations. A promise can be created as follows:

new Promis(function(resolve, reject) {
  // Work
  if (success)
    resolve(result);
  else
    reject(Error("failure"));
});
