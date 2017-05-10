exports.seed = function(knex, Promise) {
  return knex('profiles').del()
    .then(function () {
     return Promise.all([
        knex('profiles').insert({user_id: 99901, age: 10}),
        knex('profiles').insert({user_id: 99902, age: 10}),
        knex('profiles').insert({user_id: 99903, age: 10}),
        knex('profiles').insert({user_id: 99904, age: 10}),
        knex('profiles').insert({user_id: 99905, age: 10}),
        knex('profiles').insert({user_id: 99906, age: 10}),
        knex('profiles').insert({user_id: 99907, age: 10}),
        knex('profiles').insert({user_id: 99908, age: 10}),
        knex('profiles').insert({user_id: 99909, age: 10}),
        knex('profiles').insert({user_id: 99910, age: 10}),
        knex('profiles').insert({user_id: 99911, age: 10}),
        knex('profiles').insert({user_id: 99912, age: 10}),
        knex('profiles').insert({user_id: 99913, age: 10}),
        knex('profiles').insert({user_id: 99914, age: 10}),
        knex('profiles').insert({user_id: 99915, age: 10}),
        knex('profiles').insert({user_id: 99916, age: 10}),
        knex('profiles').insert({user_id: 99917, age: 10}),
        knex('profiles').insert({user_id: 99918, age: 10}),
        knex('profiles').insert({user_id: 99919, age: 10}),
        knex('profiles').insert({user_id: 99920, age: 10}),
        knex('profiles').insert({user_id: 99921, age: 10}),
        knex('profiles').insert({user_id: 99922, age: 10}),
        knex('profiles').insert({user_id: 99923, age: 10}),
        knex('profiles').insert({user_id: 99924, age: 10}),
        knex('profiles').insert({user_id: 99925, age: 10}),
        knex('profiles').insert({user_id: 99926, age: 10})
      ]);
    });
};
