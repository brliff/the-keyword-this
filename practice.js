//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
     // In Javascript, the 'this' keyword is used as a shortcut. It refers to an object of the executing code.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      /**************************
       * 1. Fix 'this' when used in a method passed as a callback.
       * 2. Fix 'this' inside closure
       * 3. Fix 'this' when method is assigned to a variable
       * 4. Fix 'this' when borrowing methods
       * */

  // 3) What is the difference between call and apply?

      //Answer
    /**************************
     * A call and apply are very identical as they are used for borrowing methods and for setting the 'this' value explicitly.
     *
     * call--> the arguments are pass in to the function as they are.
     *
     * apply--> expects the second argument to be an array that it unpacks as arguments for the called function.
     * */


  // 4) What does .bind do?

      //Answer
    /**************************
     * .bind--> is used for setting the 'this value' in methods and for currying functions. It primarily is used to call a function with the 'this value set explicitly. Bind() allows you to easily set which specific object will be bound to the 'this' when a function or method is invoked.
     * */

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
    username: 'brad.lifferth',
    email: 'brad.lifferth@outlook.com',
    getUsername: function() {
        return this.username;
    }
}
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    var moveProperty = 0;

    this.moveCar = function() {
        return this.moveProperty+=10;
    }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
console.log('prius=' + getYear.call(prius));
console.log('mustange=' + getYear.call(mustange));

//New Problem

var myUser = {
    username: 'iliketurtles',
    age: 13,
    email: 'iliketurtles@gmail.com',
    getMyUsername: function() {
        return this.username;
    }
};

var userName = myUser.getMyUsername(this.username); //Fix this
// console.log(userName);
//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here
//undefined
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
