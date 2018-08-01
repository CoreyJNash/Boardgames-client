'use strict'

const config = require('../config')
const store = require('../store')

const createBoardgame = function (data) {
    return $.ajax({
      url: config.apiUrl + '/boardgames/',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data
   
    })
   }

   const showGames = function () {
    return $.ajax({
      url: config.apiUrl + '/boardgames/',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    })
  }

  const deleteGame = (boardgameId) => {
    return $.ajax({
      url: config.apiUrl + '/boardgames/' + boardgameId,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    })
  }

  // const updateGame = function (data) {
  //   return $.ajax({
  //     url: config.apiOrigin + '/boardgames/' + data.boardgames.id,
  //     method: 'PATCH',
  //     data
  //   })
  // }

  const updateGame = function (data) {
    return $.ajax({
      url: config.apiUrl + '/boardgames/' + data.boardgameId,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data
    })
  }

   module.exports = {
       createBoardgame,
       showGames,
       deleteGame,
       updateGame
   }
   