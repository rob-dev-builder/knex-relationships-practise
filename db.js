
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfile: getProfile
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
