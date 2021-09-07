'use strict';

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Hash = use('Hash');
const User = use('App/Models/User');

class UserSeeder {
  async run () {
    await User.findOneAndUpdate({
      username: 'john'
    }, {
      first_name: 'Jonson',
      last_name: 'B.',
      username: 'john',
      email: 'john@debugger.tech',
      password: await Hash.make('123456'),
      role: 'super_admin'
    }, {
      upsert: true
    });

    await User.findOneAndUpdate({
      username: 'souvik'
    }, {
      first_name: 'Souvik',
      last_name: 'Joy',
      username: 'souvik',
      email: 'souvik@debugger.tech',
      password: await Hash.make('123456'),
      role: 'super_admin'
    }, {
      upsert: true
    });
  }
}

module.exports = UserSeeder;
