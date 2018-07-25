'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#signupmessage').text('Signed up successfully')
  $('#signupmessage').css('background-color', ' #f7bd2f')
  $('#signupmessage').css('font-size', '20px')
  $('#signupmessage').css('text-align', 'center')
  $('#sign-up-modal').modal('hide')
  $('#sign-up')[0].reset()
  console.log('signUpSuccess ran. Data is :', data)
  
}

const signUpFailure = function (error) {
//   $('#message').text('Error on sign up')
//   $('#message').css('background-color', 'red')
//   $('#message').css('text-align', 'center')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {

  $('#signout').removeClass('hidden')
  $('#changepassword').removeClass('hidden')
  $('#signin').addClass('hidden')
  $('#signup').addClass('hidden')
  $('#create').removeClass('hidden')
  $('#show').removeClass('hidden')
  $('#sign-in-modal').modal('hide')
  $('#sign-in')[0].reset()
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
//   $('#message').text('Error on sign in')b 42n    3
//   $('#message').css('background-color', 'red')
//   $('#message').css('text-align', 'center')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
//   $('#message').text('Signed out successfully')
//   $('#message').css('background-color', ' #f7bd2f')
//   $('#message').css('text-align', 'center')
  $('#signup').removeClass('hidden')
  $('#signin').removeClass('hidden')
  $('#changepassword').addClass('hidden')
  $('#signout').addClass('hidden')
  $('#create').addClass('hidden')
  $('#show').addClass('hidden')
  $('#sign-out-modal').modal('hide')
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
//   $('#message').text('Error on sign out')
//   $('#message').css('background-color', 'red')
//   $('#message').css('text-align', 'center')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
//   $('#message').text('Changed password successfully')
//   $('#message').css('background-color', '#f7bd2f')
    $('#change-password-modal').modal('hide')
  console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
//   $('#message').text('Error on change password')
// //   $('#message').css('background-color', 'red')
console.error('changePasswordFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
