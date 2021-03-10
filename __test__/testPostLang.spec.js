// import { update } from '../src/client/js/updateUi.js'
import { postData } from '../src/client/js/postLang.js'
// import { handleSubmit } from "../src/client/js/formHandler"


describe("Testing the submit functionality", () => {
    // async function
    test("Testing the postData function", () => {
          const input = [{url: 'http://localhost:8081/langauge', newInfo: "Hello, it's very nice to meet you"}];
          const output = [{
          }];
          try {
            is_url(input.url);
            expect(postData(input)).toBe(output);
            done();
          } catch (error) {
            console.log(error);
          }
        }
    );
});

function is_url(str)
{
  const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
}



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
