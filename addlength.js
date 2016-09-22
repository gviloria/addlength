/**
 * Created by gviloria on 9/22/16.
 */


const letArr = ["apple","pear"];

function addLength(array){
  return _.map(array, function(num){ return num + " " + num.length});
}

console.log(addLength(letArr));

