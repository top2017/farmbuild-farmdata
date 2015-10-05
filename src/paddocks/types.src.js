/**
 * @since 1.1.0
 * @copyright 2015 State of Victoria.

 * @author State of Victoria
 * @version 1.1.0
 */

'use strict';

/**
 * farmdata paddockTypes
 * @type {object}
 * @namespace farmdata.paddockTypes
 */
angular.module('farmbuild.farmdata')
  .factory('farmdataPaddockTypes',
  function (collections, validations, paddockTypeDefaults, $log) {

    var paddockTypes,
      _types = angular.copy(paddockTypeDefaults.types),
      _isDefined = validations.isDefined, _isAlphanumeric = validations.isAlphanumeric;

    function _create(name){
      return {
        name: name
      }
    }

    function _add(name) {
      if(!_isDefined(name) || !_isAlphanumeric(name)){
        $log.error('Please specify a valid name for paddock type');
        return;
      }
      return collections.add(_types, _create(name));
    };

    /**
     * Paddock types collection api
     * @property {object} Types - Paddock types collection
     * @public
     * @static
     */
    paddockTypes = {
      /**
       * Adds a new Paddock type for nutrient calculation
       * @method add
       * @param {!string} name - name of new type, can only contain alphanumeric values with space or underscore but no other special characters
       * @returns {object} types
       * @memberof farmdata.paddockTypes
       * @public
       * @static
       */
      add: _add,
      /**
       * Returns the PaddockType at specified index
       * @method at
       * @returns {object} PaddockType
       * @memberof farmdata.paddockTypes
       * @public
       * @static
       */
      at: function(index) { return collections.at(_types, index)},
      size: function() { return collections.size(_types)},
      byName: function(name) { return collections.byProperty(_types, 'name', name)},
      defaultTypes: function() { return angular.copy(paddockTypeDefaults.types)},
      /**
       * Returns PaddockTypes collection as an array
       * @method toArray
       * @returns {Array} PaddockTypes
       * @memberof farmdata.paddockTypes
       * @public
       * @static
       */
      toArray: function() { return angular.copy(_types) },
      /**
       * Removes the Paddock type at specified index
       * @method removeAt
       * @returns {object} PaddockTypes collection
       * @memberof farmdata.paddockTypes
       * @public
       * @static
       */
      removeAt: function(index) { return collections.removeAt(_types, index)},
      last: function() { return collections.last(_types) },
      /**
       * Loads the types in PaddockTypes
       * @method load
       * @param PaddockTypes
       * @returns {object} fertilizersPurchased
       * @memberof farmdata.paddockTypes
       * @public
       * @static
       */
      load: function(PaddockTypes) {
        _types = PaddockTypes.types;
      }
    };

    return paddockTypes;
  });