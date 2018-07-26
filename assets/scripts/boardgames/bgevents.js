'use strict'

const bgapi = require('./bgapi')
const bgui = require('./bgui')
const getFormFields = require('../../../lib/get-form-fields')


const onCreateGame = (event) => {
    event.preventDefault()
    const data = getFormFields(event.target)
    bgapi.createBoardgame(data)
      .then(bgui.onCreateSuccess)
      .catch(bgui.onCreateFailure)
   }

   const onShowGames = function (event) {
    event.preventDefault()
    // console.log('onShowGames ran!')
    bgapi.showGames()
      .then(bgui.showGamesSucess)
      .catch(bgui.showGamesFailure)
      // bgui.showGamesSucess()
    }

    const onDeleteGame = (event) => {
        event.preventDefault()
        const boardgameId = $(event.target).closest('ul').attr('data-id')
        // console.log("delete: " + boardgameId)
        bgapi.deleteGame(boardgameId)
          .then(() => {console.log('deleted')})
          .catch(() => {console.log('not deleted')})
      }

    const onUpdateGame = (event) => {
        event.preventDefault()
        const data = getFormFields(event.target)
        bgapi.updateGame(data)
          .then(bgui.updateGameSuccess)
          .catch(bgui.failure)
      }

     

   const addHandlers = () => {
    $('#create-game').on('submit', onCreateGame)
    $('#show').on('click', onShowGames)
    $('.delete').on('click', onDeleteGame)
    $('#update-games').on('click', onUpdateGame)
   }

   module.exports = {
       addHandlers
   }