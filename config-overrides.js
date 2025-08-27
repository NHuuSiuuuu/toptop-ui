/* config-overrides.js */
// Ghi đè cấu hình webpack ở file này

const { override, useBabelRc } = require("customize-cra");

module.exports = override(
    useBabelRc()
); // Tương ứng vói export default của ES6