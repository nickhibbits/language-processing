// import { update } from '../src/client/js/updateUi.js'
// import { postData } from '../src/client/js/postLang.js'
import { handleSubmit } from "../src/client/js/formHandler"

describe("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
      document.body.innerHTML =
        '<form class="" id="form">' +
        '    <input id="name" type="text" name="input" value=""  placeholder="Name">' +
        '    <input type="submit" name="" value="submit">' +
        '</form>';

        const event = { preventDefault: () => {} };
        const spy = jest.spyOn(event, 'preventDefault');
        handleSubmit(event)
        expect(spy).toHaveBeenCalled()
  })
});





// // The describe() function takes two arguments - a string description, and a test suite as a callback function.
// // A test suite may contain one or more related tests
// describe("Testing the submit functionality", () => {
//     // The test() function has two arguments - a string description, and an actual test as a callback function.
//     test("Testing the handleSubmit() function", () => {
//            // Define the input for the function, if any, in the form of variables/array
//            // Define the expected output, if any, in the form of variables/array
//            // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
//            // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
//            expect(handleSubmit).toBeDefined();
// })});
