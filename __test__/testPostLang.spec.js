// import { update } from '../src/client/js/updateUi.js'
import { postData } from '../src/client/js/postLang.js'
// import { handleSubmit } from "../src/client/js/formHandler"


describe("Testing the submit functionality", () => {
    // async function
    test("Testing the postData function", () => {
          const input = [{url: 'http://localhost:8081/langauge', newInfo: "Hello, it's very nice to meet you"}];
          const output = [{
            status: { code: '0', msg: 'OK', credits: '1', remaining_credits: '19929' },
            model: 'general_en',
            score_tag: 'P+',
            agreement: 'AGREEMENT',
            subjectivity: 'SUBJECTIVE',
            confidence: '98',
            irony: 'NONIRONIC',
            sentence_list: [
              {
                text: "Hello, it's very nice to meet you",
                inip: '0',
                endp: '32',
                bop: 'y',
                confidence: '98',
                score_tag: 'P+',
                agreement: 'AGREEMENT',
                segment_list: [Array],
                sentimented_entity_list: [],
                sentimented_concept_list: []
              }
            ],
            sentimented_entity_list: [],
            sentimented_concept_list: []
          }];
          try {
            expect(postData(input)).toBe(output);
            done();
          } catch (error) {
            console.log(error);
          }
        }
    );
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
