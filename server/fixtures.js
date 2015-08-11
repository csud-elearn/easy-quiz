// Fixture data
if (Quizzes.find().count() === 0) {
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
    title: 'Titre du quiz de test',
    tags: ['test', 'introduction'],
    accessCode: 1,
    description: 'Ce qui permet de développer l\'application Meteor',
    totalPoints: -1,
    type: 'formatif',
    level: 1,
    questions: [1, 2, 4, 3]
  });

  var questions = [{
      title: 'Question 1',
      level: 1,

      // objet qui contient autant le markup que le html
      donnee: {
        'asciidoc': 'Quelle est la capitale de la *France* ?',
        'html': 'Quelle est la capitale de la <strong>France</strong> ?',
        'outdated': False
      }

    }]


}
