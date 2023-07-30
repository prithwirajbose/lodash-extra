const _ = require("lodash");

/**
 * @author Prithwiraj Bose <https://sribasu.com>
 * @classdesc An extended version of the popular lodash library, with lot of exciting extra utility functions
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
    },

    /**
     * Converts a given `csvString` into an array
     * @param {string} csvString CSV String - Required
     * @param {string} separator CSV Separator - Optional, default comma (,)
     * @param {boolean} nonAssociative Flag to not create an associate array - Optional, default false
     * @param {boolean} noHeader Flag to specify if the column header exists in the `csvSring` - Optional, default false
     * @returns array
     */
    csvToArray: function(csvString, separator, nonAssociative, noHeader) {
        return ["", "", ''];
    }
};


module.exports = Object.assign(_, _ext);