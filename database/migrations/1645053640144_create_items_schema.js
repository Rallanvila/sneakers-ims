'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateItemsSchema extends Schema {
  up () {
    this.create('create_items', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('create_items')
  }
}

module.exports = CreateItemsSchema
