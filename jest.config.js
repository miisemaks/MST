module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  transformIgnorePatterns: [
     'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|@react-navigation/native|@react-navigation/native-stack|@react-navigation/bottom-tabs)/)'
  ],
  setupFiles: [
    './jest.setup.js'
  ],
};
