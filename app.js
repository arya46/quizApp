var questions = [
  new Question("Grand Central Terminal, Park Avenue, New York is the world's", 
               ['Largest railway station', 'Longest railway station'],
               "Largest railway station"
              ),
  new Question("Garampani sanctuary is located at",
               ['Junagarh, Gujarat', 'Diphu, Assam'],
               "Diphu, Assam"
              ),
  new Question("Hitler party which came into power in 1933 is known as",
               ['Labour Party','Nazi Party'],
               "Nazi Party"
              ),
  new Question("Guwahati High Court is the judicature of",
               ['Assam','Arunachal Pradesh'],
               "Assam"
              ),
  new Question("Fire temple is the place of worship of which of the following religion?",
               ['Judaism','Zoroastrianism (Parsi Religion)'],
                "Zoroastrianism (Parsi Religion)"
              )
];

var quiz = new Quiz(questions);

QuizUI.displayNext();