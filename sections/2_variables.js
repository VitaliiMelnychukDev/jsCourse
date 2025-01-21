// var, let, const
// var - older keyword to define variables

/* Topics:
 *   - what is variables
 *   - declaration (var, let, const)
 *   - naming
 *   - variable scope
 *   - simple variable types (number, string, boolean, )
 *   - refernce types (object, arrays)
 *   -
 *   -
 *   -
 *   -
 */

const lectureName = "JS, HTML, CSS";
let sectionName = "Variables";

const testMethod = () => {
  let localVariable = "test";
  console.log("localVariable: ", localVariable);
};

console.log("lectureName: ", lectureName);
console.log("sectionName: ", sectionName);
testMethod();
