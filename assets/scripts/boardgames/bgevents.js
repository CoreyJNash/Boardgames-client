'use strict'

const api = require('./api')
const ui = require('./ui')

const onCreateProposal = (event) => {
    event.preventDefault()
    const data = getFormFields(event.target)
    proposalApi.createProposal(data)
      .then(proposalUi.createProposalSuccess)
      .catch(proposalUi.failure)
   }