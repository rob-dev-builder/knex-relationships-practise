
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfile: getProfile,
  addUser: addUser,
  addProfile: addProfile
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}

function getProfile(id, connection){
  return connection('users')
    .join('profiles','users.id','profiles.user_id')
    .where('users.id', id)
}

function addUser (newUserObj, connection){
  let data = {
    name: newUserObj.name,
    email: newUserObj.email
  }
  return connection('users')
    .insert(data)
}

function addProfile (profileData, userId, connection){
 // add the age from here
 let data = {
   age: profileData.age,
   user_id: userId
 }
 return connection('profiles')
   .insert(data)
   //.exec()
}

// Add user
// add name and email to users table
// get the userid of that new entry
// with that userid we insert an age value into profiles table
