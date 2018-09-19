$(document).ready(function() {
  var questions = [
    {
      question: 'What is the capital of Ethiopia?',
      answers: ['Addis Ababa', 'Mogadishu', 'Newagawa', 'Mauritus'],
      correctAnswer: 'Addis Ababa'
    },
    {
      question: 'What is the capital of Washington D.C?',
      answers: ['Russia', 'Pakistan', 'United States of America', 'Turkey'],
      correctAnswer: 'United States of America'
    },
    {
      question: 'Besides Antartica, What is the largest desert on Earth?',
      answers: [
        'Sahara Desert',
        'Gibson Desert',
        'Arabian Desert',
        'Kalahari Desert'
      ],
      correctAnswer: 'Sahara Desert'
    },
    {
      question: 'What is the longest river in South America?',
      answers: ['Amazon', 'Parana', 'The River Nile', 'Credit River'],
      correctAnswer: 'Amazon'
    },
    {
      question: 'What contintent or region is the country Mali located?',
      answers: ['Asia', 'Africa', 'Oceania', 'Europe'],
      correctAnswer: 'Africa'
    },
    {
      question:
        'What is the highest (by elevation) national capital city in North America?',
      answers: ['Mexico City', 'Guatemala', 'San Jose', 'Bogata'],
      correctAnswer: 'Mexico City'
    },
    {
      question:
        'Which of these Canadian province capitals is NOT located at the coast of an open sea?',
      answers: ['Halifax', 'Victoria', 'Fredericton', "St. John's"],
      correctAnswer: 'Frederiction'
    },
    {
      question:
        'Halifax is the capital of which Canadian province or territory?',
      answers: ['Newfoundland and Labrador', 'Yukon', 'Ontario', 'Nova Socita'],
      correctAnswer: 'Nova Scotia'
    },
    {
      question: 'Stonehenge can be found near which of these locations?',
      answers: ['Bergen', 'Frankfurt', 'Salisbury', 'Lyons'],
      correctAnswer: 'Salisbury'
    },
    {
      question:
        'The Great Pyramid can be found in or near which of these locations?',
      answers: ['Jerusalem', 'Cairo', 'Giza', 'Luxor'],
      correctAnswer: 'Giza'
    }
  ];

  var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function() {
      game.counter--;
      $('#counter').html(game.counter);
      if (game.counter <= 0) {
        console.log("Time's Up!");
        done();
      }
    }
  };

  function result() {
    clearInterval(timer);
    $('#subwrapper h2').remove();

    $('#subwrapper').html('<h2>Done! You Did It!</h2>');
    $('#subwrapper').append('<h3>Correct Answer: ' + game.correct + '</h3>');
    $('#subwrapper').append(
      '<h3>Incorrect Answer: ' + game.incorrect + '</h3>'
    );
    $('#subwrapper').append(
      '<h3>Unanswered: ' +
        (questions.length - (game.incorrect + game.correct)) +
        '</h3>'
    );
  }

  function start() {
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').prepend(
      '<h2>Time Remaining: <span id = "counter"> ' +
        game.counter +
        '</span> Seconds</h2>'
    );
    $('#start').remove();
    for (var i = 0; i < questions.length; i++) {
      $('#subwrapper').append('<h2>' + questions[i].question + '</h2');
      for (var a = 0; a < questions[i].answers.length; a++) {
        $('#subwrapper').append(
          "<input type='radio' name= 'question-" +
            i +
            "' value='" +
            questions[i].answers[a] +
            "'>" +
            questions[i].answers[a]
        );
      }
    }
    $('#subwrapper').append('<br><button id="end">DONE</button>');
    $('#end').click(done);
  }

  // start();

  function done() {
    $.each($('[name="question-0"]:checked'), function() {
      if (this.value == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('[name="question-1"]:checked'), function() {
      if (this.value == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('[name="question-2"]:checked'), function() {
      if (this.value == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('[name="question-3"]:checked'), function() {
      if (this.value == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('[name="question-4"]:checked'), function() {
      if (this.value == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('[name="question-5"]:checked'), function() {
      if (this.value == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('[name="question-6"]:checked'), function() {
      if (this.value == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('[name="question-7"]:checked'), function() {
      if (this.value == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('[name="question-8"]:checked'), function() {
      if (this.value == questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('[name="question-9"]:checked'), function() {
      if (this.value == questions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    result();
  }

  $('#start').click(start);
});
