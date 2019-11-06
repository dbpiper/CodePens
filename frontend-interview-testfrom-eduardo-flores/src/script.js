/**
 * Note: jQuery is already included.
 */

/********************************
 * QUESTION 1.
 *******************************/
function executeQ1() {
  document.querySelector("#my-name").textContent = "David Piper";
}

/********************************
 * QUESTION 2.
 *******************************/
var listItems = [
  "Settings",
  "Customer Support",
  "On Demand",
  "Search",
  "Widgets"
];

function executeQ2() {
  const listItemNodes = listItems.map(value => {
    const node = document.createElement("li");
    node.appendChild(document.createTextNode(value + "\n"));
    return node;
  });
  listItemNodes.forEach(value =>
    document.querySelector("#q2-list").appendChild(value)
  );
}

/********************************
 * QUESTION 3.
 *******************************/
function Person() {
  var name = "";

  this.setName = function(n) {
    name = n;
  };

  this.getName = function() {
    return name;
  };
}

function executeQ3() {
  const person1 = new Person();
  person1.setName("Scott");
  const person2 = new Person();
  person2.setName("Matt");

  const persons = [person1, person2];

  const personNodes = persons.map(value => {
    const node = document.createElement("li");
    node.appendChild(document.createTextNode(value.getName() + "\n"));
    return node;
  });
  personNodes.forEach(value =>
    document.querySelector("#q3-list").appendChild(value)
  );
}

/********************************
 * QUESTION 4.
 *******************************/
function executeQ4() {
  var fileURL =
    "https://hydracdn.frontiertv.com/widgets/common/ch131images.json";

  // Save image IDs in the data array.
  var data = [];

  // Get the data in fileURL using AJAX, process the reponse and add it to the HTML.

  const response = fetch(fileURL).then(rawValue => {
    rawValue.json().then(valueJson => {
      const imageKeysArray = Object.keys(valueJson.images);
      const answerNode = document.createTextNode(
        JSON.stringify(imageKeysArray)
      );
      document.querySelector("#q4-answer").appendChild(answerNode);
    });
  });
}
