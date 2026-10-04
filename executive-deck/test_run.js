
try {
  global.window = global;
  global.document = {
    readyState: 'complete',
    addEventListener: () => {},
    querySelector: () => ({ addEventListener: () => {}, classList: { toggle: () => {} } }),
    querySelectorAll: () => [],
    getElementById: () => null
  };
  require('./data.js');
  console.log("data.js loaded successfully. SDLC_DATA keys:", Object.keys(window.SDLC_DATA || {}));
  require('./app.js');
  console.log("app.js loaded successfully.");
} catch (e) {
  console.error("JS Execution Error:", e);
}
