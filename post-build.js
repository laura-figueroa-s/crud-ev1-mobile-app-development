const fileSystem = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'www', 'index.html');

const scriptContent = `
<script>
  (function () {
if (typeof globalThis === 'undefined') {
    Object.defineProperty(Object.prototype, 'globalThis', {
      get: function () {
        return this;
      },
      configurable: true,
    });
  }
})();
</script>
`;

fileSystem.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
});