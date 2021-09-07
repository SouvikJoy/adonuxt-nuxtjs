'use strict';

const BaseModel = use('MongooseModel');

/**
 * @class User
 */
class User extends BaseModel {
  static boot ({ schema }) {
    super.boot({ schema });

    /**
     * A hook to bash the user password before saving
     * it to the database.
     *
     * Look at `app/Models/Hooks/User.js` file to
     * check the hashPassword method
     */
    this.addHook('preSave', 'User.hashPassword');
  }

  /**
   * User's schema
   */
  static get schema () {
    return {
      first_name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 80
      },
      last_name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 80
      },
      email: {
        type: String,
        lowercase: true,
        required: true,
        index: true,
        unique: true,
        maxLength: 254
      },
      username: {
        type: String,
        lowercase: true,
        required: true,
        index: true,
        unique: true,
        minLength: 4,
        maxLength: 25
      },
      email_verified_at: {
        type: Date,
        default: null
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true,
        enum: {
          values: ['admin', 'super_admin', 'editor'],
          message: '{VALUE} is not supported!'
        },
        default: 'editor'
      }
    };
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token', 'id', 'email');
  }
}

module.exports = User.buildModel('User');
