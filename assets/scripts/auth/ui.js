'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
//   $('#message').text('Signed up successfully')
//   $('#message').css('background-color', ' #f7bd2f')
//   $('#message').css('font-size', '20px')
//   $('#message').css('text-align', 'center')
//   $('#sign-up')[0].reset()
  console.log('signUpSuccess ran. Data is :', data)
  
}

const signUpFailure = function (error) {
//   $('#message').text('Error on sign up')
//   $('#message').css('background-color', 'red')
//   $('#message').css('text-align', 'center')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
//   $('#message').text('Signed in successfully')
//   $('#message').css('background-color', ' #f7bd2f')
//   $('#message').css('font-size', '20px')
//   $('#message').css('text-align', 'center')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
//   $('#message').css('timeout', 6000)
//   $('#sign-in')[0].reset()
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
//   $('#message').text('Error on sign in')
//   $('#message').css('background-color', 'red')
//   $('#message').css('text-align', 'center')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
//   $('#message').text('Signed out successfully')
//   $('#message').css('background-color', ' #f7bd2f')
//   $('#message').css('text-align', 'center')
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
//   $('#view-games').addClass('hidden')
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
