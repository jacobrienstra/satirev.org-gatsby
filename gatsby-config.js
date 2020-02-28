/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config();
const { generateConfig } = require("gatsby-plugin-ts-config");

module.exports = generateConfig();
