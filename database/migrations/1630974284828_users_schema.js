'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.index('_id');
      table.string('first_name', 80);
      table.string('last_name', 80);
      table.string('username', 25).unique();
      table.string('email', 254).unique();
      table.timestamp('email_verified_at').nullable();
      table.string('password', 60);
      table.enum('role', ['admin', 'super_admin', 'editor']).defaultTo('editor');
      table.timestamps();
    });
  }

  down () {
    this.drop('users');
  }
}

module.exports = UsersSchema;
