'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./event.js')
const store = require('./store.js')

// const JS = require('./JS.js')

$(() => {
  store.userSignedIn = false
  if (store.userSignedIn === false) {
    $('#sign-up-btn').show()
    $('#sign-in-btn').show()
    $('#sign-out-btn').hide()
    $('#password-btn').hide()
  }
  // Auth CRUD Actions
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
<<<<<<< HEAD
  $('#sign-out-form').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
=======
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // Bucket List CRUD Actions
>>>>>>> hide and show auth buttons
  $('#bucket-list-create').on('submit', authEvents.onTodoListCreate)
  $('#bucket-list-index').on('click', authEvents.onTodoListIndex)
  $('#bucket-list-delete').on('submit', authEvents.onTodoListDelete)
  $('#bucket-list-update').on('submit', authEvents.onTodoListUpdate)
})
