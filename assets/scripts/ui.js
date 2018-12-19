'use strict'

const store = require('./store.js')

// methods signUpSuccess,signUpFailure
const signUpSuccess = data => {
  $('#message').text('Signed up Successfully')
  $('#message').removeClass()
  $('#sign-up-form').trigger('reset')
  $('#message').addClass('success')
  // console.log('signUpSuccess ran. Data is :', data)
  // $('#signUpModal').modal('hide')
  window.setTimeout(function () {
    $('#signUpModal').modal('hide')
  }, 1000)
}

const signUpFailure = error => {
  $('#message').text('Error on SignUp')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-up-form').trigger('reset')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  store.userSignedIn = true
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#sign-out-btn').show()
  $('#password-btn').show()
  $('#message2').text('Signed In Successfully')
  $('#message2').removeClass()
  $('#message2').addClass('success')
  $('#sign-in-form').trigger('reset')
  // console.log('signInSuccess ran. Error is :', data)
  // $('#signInModal').modal('hide')
  window.setTimeout(function () {
    $('#signInModal').modal('hide')
  }, 1000)
  // $('#gameBoard').css('visibility', 'visible')
}

const signInFailure = error => {
  $('#message2').text('Error on SignIn')
  $('#message2').removeClass()
  $('#message2').addClass('failure')
  $('#sign-in-form').trigger('reset')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  store.userSignedIn = false
  $('#sign-up-btn').show()
  $('#sign-in-btn').show()
  $('#sign-out-btn').hide()
  $('#password-btn').hide()
  store.user = null
  $('#message3').text('Signed Out Successfully')
  $('#message3').removeClass()
  $('#message3').addClass('success')
  // console.log('signOutSuccess ran. Error is :')
  // $('#signOutModal').modal('hide')
  window.setTimeout(function () {
    $('#signOutModal').modal('hide')
  }, 1000)
  // $('#gameBoard').css('visibility', 'hidden')
}

const signOutFailure = error => {
  store.user = null
  $('#message3').text('Error on SignOut')
  $('#message3').removeClass()
  $('#message3').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message4').text('Change Password Successfully')
  $('#message4').removeClass()
  $('#message4').addClass('success')
  $('#change-password-form').trigger('reset')
  // console.log('changePasswordSuccess ran. Data is :', data)
  // $('#changePasswordModal').modal('hide')
  window.setTimeout(function () {
    $('#changePasswordModal').modal('hide')
  }, 1000)
}

const changePasswordFailure = error => {
  $('#message4').text('Error on Change Password')
  $('#message4').removeClass()
  $('#message4').addClass('failure')
  $('#change-password-form').trigger('reset')
  console.error('changePasswordFailure ran. Error is :', error)
}

const bucketListCreateSuccess = data => {
  store.bucketLists = data.bucketLists
  console.log(data)
  // $('#message').text('You created an item for your Bucket list!')
  // document.getElementById('bucket-list-item').hidden = false
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#bucket-list-create').trigger('reset')
}

const bucketListCreateFailure = data => {
  // $('#message').text('Error on Bucket List item creation')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signUpFailure ran. Error is :', error)
  $('#bucket-list-create').trigger('reset')
}

const bucketListDeleteSuccess = data => {
  // $('#message').text('You deleted a Bucket list item!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#bucket-list-delete').trigger('reset')
}

const bucketListDeleteFailure = data => {
  // $('#message').text('Failure on Bucket List item delete')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#bucket-list-delete').trigger('reset')
}

const bucketListUpdateSuccess = data => {
  store.bucketLists = data.bucketLists
  // $('#message').text('You updated an item for your Bucket list!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#bucket-list-update').trigger('reset')
}

const bucketListUpdateFailure = data => {
  // $('#message').text('Error on bucket list item update')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signUpFailure ran. Error is :', error)
  $('#bucket-list-update').trigger('reset')
}

const bucketListIndexSuccess = data => {
  store.bucketLists = data.bucketLists
  // display tasks on show all click
  // document.getElementById('output').hidden = false
  // $('#message').text('Here are all your Bucket list items!')
  // empties output
  $('#output').empty()
  // function - for each bucket list item
  data.bucketLists.forEach(bucketList => {
    // add to output
    $('#output').append(
      // formatting how the tasks show to the user
      `<div id=${bucketList.id}> <p> ${bucketList.id} </p> </div>`)
    // calling the keys and their values and printing them out (user input)
    for (const key in bucketList) {
      if (key !== 'id') {
        $(`#${bucketList.id}`).append(`<p>${key}: ${bucketList[key]}</p>`)
      }
    }
  })
  $('#message').removeClass()
  $('#message').addClass('success')
}

const bucketListIndexFailure = data => {
  $('#message').text('Failure on todo_list index')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  bucketListIndexFailure,
  bucketListIndexSuccess,
  bucketListUpdateFailure,
  bucketListUpdateSuccess,
  bucketListDeleteFailure,
  bucketListDeleteSuccess,
  bucketListCreateFailure,
  bucketListCreateSuccess
}
