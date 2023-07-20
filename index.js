const _ = require("lodash");

/**
 * @author Prithwiraj Bose <sribasu@gmail.com>
 * @classdesc An extended version of the Lodash library with all the missing features
 * @constructor
 */
const _ext = {

    /**
     * Checks if the given `str` is a string representation 
     * of a valid number or not. Float and Int both types are considered valid numbers. 
     * @param {string} str Inut string
     * @returns boolean
     */
    isNumericString: function(str) {
        return _.isString(str) && /^[0-9]*[.]*[0-9]*$/.test(str) && (parseInt(str, 10) == str || parseFloat(str) == str);
    },

    /**
     * Checks if the given `val` is either null or string which is blank or empty or contains only white spaces
     * @param {any} val Input value
     * @returns boolean
     */
    isBlank: function(val) {
        return _.isNull(val) || (_.isString(val) && val.trim() === "");
    },

    /**
     * Checks if the given `val` is string and not null or blank or empty or contains only white spaces
     * @param {any} val Input value
     * @returns boolean
     */
    isNotBlank: function(val) {
        return _.isString(val) && val.trim() !== "";
    }
};


module.exports = Object.assign(_, _ext);