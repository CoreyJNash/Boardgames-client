'use strict'
const store = require ('../store.js')
const boardgameTemplate = require ('../templates/allboardgames.handlebars')
const bgapi = require ('./bgapi.js')


const onCreateSuccess = function (data) {
  $('#message').text('Game successfully created')
  $('#message').css('background-color', 'green')
  $('#message').css('font-family', 'Gaegu')
  $('#message').css('text-align', 'center')
  $('#message').removeClass('hidden')
  $('#create-game-modal').modal('hide')
  $('#create-game')[0].reset()

  store.game = data.game
  // console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
    $('#message').text('Error on creating Game')
    $('#message').css('background-color', 'red')
    $('#create-game')[0].reset()
    // console.error('onCreateFailure ran. Error is :', error)
  }

  const showGamesSucess = function (data) {
      console.log(data)
      let htmltemplate = boardgameTemplate({boardgames: data.boardgames})
      $('#show-games-list').html(htmltemplate)
      $('.delete').on('click', onDeleteGame)
      $('#message').addClass('hidden')
  }

  const onDeleteGameSucess = function () {
    $('#message').html('Game has been Deleted')
    $('#message').css('background-color', 'green')
    $('#message').css('font-size', '20px')
    $('#message').css('text-align', 'center')
    $('#message').css('font-family', 'Gaegu')
    $('#message').removeClass('hidden')
    $('#show-game-modal').modal('hide')
   
  }

  const onDeleteGame = (event) => {
    event.preventDefault()
    const boardgameId = $(event.target).closest('ul').attr('data-id')
    // console.log("delete: " + boardgameId)
    bgapi.deleteGame(boardgameId)
      .then(onDeleteGameSucess)
  }
  
  const showGamesFailure = function (error) {
    $('#message').text('Error on getting games')
    $('#message').css('background-color', 'red')
    // console.error('onShowFailure ran. Error is :', error)
  }

  

  const failure = (error) => {
    $('#message').text('Can not update another users game!')
    $('#message').css('font-family', 'Gaegu')
    $('#message').css('background-color', 'red')
    $('#message').css('text-align', 'center')
    $('#message').css('font-size', '20px')
    $('#update-modal').modal('hide')
    $('#message').removeClass('hidden')
    $('#update-game')[0].reset()
    // console.error(error)
  }

  const updateGameSuccess = function (data) {
    $('#message').text('Game Has Been Updated!')
    $('#message').css('font-family', 'Gaegu')
    $('#message').css('text-align', 'center')
    $('#message').removeClass('hidden')
    $('#message').css('background-color', 'green')
    $('#update-modal').modal('hide')
    $('#update-game')[0].reset()
    store.boardgames = data.boardgames
    // console.log('onUpdateSuccess ran. Data is :', data)
   }

module.exports = {
    onCreateSuccess,
    onCreateFailure,
    showGamesSucess,
    onDeleteGame,
    showGamesFailure,
    failure,
    updateGameSuccess,
    onDeleteGameSucess
}