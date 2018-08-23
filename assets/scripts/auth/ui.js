'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  $('#message').css('font-size', '20px')
  $('#message').css('text-align', 'center')
  $('#message').css('font-family', 'Gaegu')
  $('#sign-up-modal').modal('hide')
  $('#sign-up')[0].reset()
  // console.log('signUpSuccess ran. Data is :', data)
  
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  $('#message').css('text-align', 'center')
  $('#message').css('font-family', 'Gaegu')
  $('#sign-up-modal').modal('hide')
  $('#sign-up')[0].reset()
  // console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {

  $('#signout').removeClass('hidden')
  $('#changepassword').removeClass('hidden')
  $('#signin').addClass('hidden')
  $('#signup').addClass('hidden')
  $('#create').removeClass('hidden')
  $('#show').removeClass('hidden')
  $('#message').addClass('hidden')
  $('#update').removeClass('hidden')
  $('#sign-in-modal').modal('hide')
  $('#sign-in')[0].reset()
  // console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  $('#message').css('text-align', 'center')
  $('#message').css('font-family', 'Gaegu')
  $('#sign-in-modal').modal('hide')
  $('#sign-in')[0].reset()
  // console.error('signInFailure ran. Error is :', error)
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
  $('#update').addClass('hidden')
  $('#sign-out-modal').modal('hide')
  // console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
//   $('#message').text('Error on sign out')
//   $('#message').css('background-color', 'red')
//   $('#message').css('text-align', 'center')
  // console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  $('#message').css('font-family', 'Gaegu')
  $('#message').css('text-align', 'center')
    $('#change-password-modal').modal('hide')
    $('#change-password')[0].reset()
  // console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', 'red')
  $('#message').css('text-align', 'center')
  $('#message').css('font-family', 'Gaegu')
// console.error('changePasswordFailure ran. Error is :', error)
$('#change-password')[0].reset()
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
