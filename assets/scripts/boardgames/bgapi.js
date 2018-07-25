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

   module.exports = {
       createBoardgame
   }
   