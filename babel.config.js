function isBabelLoader (caller) {
  return caller && caller.name === 'babel-loader'
}

module.exports = function (api) {
  if (api.env('test') && !api.caller(isBabelLoader)) {
    return {
      presets: [
        ['@babel/env', {
          targets: {
            node: 'current'
          }
        }, 'next/babel']
      ],
      plugins: ['dynamic-import-node', '@babel/plugin-proposal-class-properties']
    }
  }
  return {
    presets: [
      'next/babel'
    ]}
}
