if (Meteor.isServer) {
  console.dir(Meteor);
  Meteor.users.remove({});
  Questions.remove({});
  Quizzes.remove({});
}

// Fixture data
if (Meteor.isServer && Quizzes.find().count() === 0) {
  var now = new Date().getTime();

  // create one prof and one student
  var profId = Meteor.users.insert({
    profile: {
      name: 'Prof test',
      group: 'prof'
    }
  });
  var prof = Meteor.users.findOne(profId);
  var studentId = Meteor.users.insert({
    profile: { name: 'Student test', group: 'student' }
  });
  var student = Meteor.users.findOne(studentId);



  // create a quiz
  var quizId = Quizzes.insert({
    code: 1,
    title: 'Titre du quiz de test',
    tags: ['test', 'introduction'],
    accessCode: 1,
    description: 'Ce qui permet de développer l\'application Meteor',
    totalPoints: -1,
    type: 'formatif',
    level: 1,
    questions: ["1", "2", "4", "3"]
  });
  var quiz = Quizzes.findOne({code: 1});

  var questions = [{
      _id: "1",
      title: 'Question 1',
      level: 1,

      // objet qui contient autant le markup que le html
      donnee: {
        'asciidoc': 'Quelle est la capitale de la *France* ?',
        'html': 'Quelle est la capitale de la <strong>France</strong> ?',
        'outdated': false
      },
      tip: "On l'appelle également la ville lumière",
      type: "select",
      extra: {
        options: [
            {text: 'Paris', correct: true},
            {text: 'Bern', correct: false},
            {text: 'Lugano', correct: false},
            {text: 'Marseille', correct: false}
        ],
        answers: ['Paris']
      }

    },

    {
        _id: "3",
        title: 'Question 3',
        level: 1,

        // objet qui contient autant le markup que le html
        donnee: {
          'asciidoc': "Calculer l'inverse de \\(10^{-2}\\)",
          'html': "Calculer l'inverse de \\(10^{-2}\\)",
          'outdated': false
        },
        type: "algebra",
        extra: {
          answer: "100"
        }

      },

      {
          _id: "4",
          title: 'Question 4',
          level: 1,

          // objet qui contient autant le markup que le html
          donnee: {
            'asciidoc': "Cocher les affirmations correctes concernant le langage Python.",
            'html': "Cocher les affirmations correctes concernant le langage Python.",
            'outdated': false
          },
          type: "qcm",
          extra: {
            options: [
                {text: "C'est un langage interprété", correct: true},
                {text: "Il est plus rapide que le C", correct: false},
                {text: "Il a été créé par John Nash", correct: false},
                {text: "Il est très utilisé chez Google", correct: true}
            ]
          }

        },

        {
            _id: "2",
            title: 'Question 2',
            level: 1,

            // objet qui contient autant le markup que le html
            donnee: {
              'asciidoc': "Cocher les affirmations correctes concernant le langage Python.",
              'html': "Cocher les affirmations correctes concernant le langage Python.",
              'outdated': false
            },
            type: "qcm",
            extra: {
              options: [
                  {text: "C'est un langage interprété", correct: true},
                  {text: "Il est plus rapide que le C", correct: false},
                  {text: "Il a été créé par John Nash", correct: false},
                  {text: "Il est très utilisé chez Google", correct: true}
              ]
            }
          }
    ];

    questions.forEach(function (q) {
      Questions.insert(q);
    });

}
