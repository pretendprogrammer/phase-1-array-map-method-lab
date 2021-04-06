const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
  ];

  var letters = /^[A-Za-z]+$/;

  /*if (string[i].match(letters) != true) {
            newString += string[i]
          } else */

  const oneQuestion = 'what is the difference between event capturing and bubbling?';
  const anotherQuestion = 'what is the difference between == and ===?';

  tutorials.map(allWordsToUpperCase(question))

  oneQuestion.map(function(letter, index) {index === 0 ? letter.toUpperCase : letter})

  function allWordsToUpperCase(string) {
      let newString;
      for (let i = 0; i < string.length; i++) {
          if (i === 0) {
              newString = string[i].toUpperCase()
          } else if (string[i - 1] === ' ') {
              newString += string[i].toUpperCase()
          } else {
              newString += string[i]
          }
      }
    return newString
  }
allWordsToUpperCase(oneQuestion);