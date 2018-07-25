'use strict'
const store = require ('../store.js')
const boardgameTemplate = require ('../templates/allboardgames.handlebars')

const onCreateSuccess = function (data) {
//   $('#message').text('Game successfully created')
//   $('#message').css('background-color', 'green')
  $('#modal').modal('hide')

  store.game = data.game
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
    $('#message').text('Error on creating Game')
    $('#message').css('background-color', 'red')
    console.error('onCreateFailure ran. Error is :', error)
  }

  const showGamesSucess = function (data) {
      console.log(data)
      let htmltemplate = boardgameTemplate({boardgames: data.boardgames})
      $('#show-games-list').append(htmltemplate)
  }
  
  const showGamesFailure = function (error) {
    $('#message').text('Error on getting games')
    $('#message').css('background-color', 'red')
    // console.error('onShowFailure ran. Error is :', error)
  }

module.exports = {
    onCreateSuccess,
    onCreateFailure,
    showGamesSucess,
    showGamesFailure
}