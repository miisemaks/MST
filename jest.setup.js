/* eslint-disable no-undef */

jest.mock('@react-native-async-storage/async-storage', () => {
  const asyncStorage = {};
  return {
    getItem: async key => asyncStorage[key],
    setItem: async (key, value) => (asyncStorage[key] = value),
    removeItem: async key => delete asyncStorage[key],
  };
});

jest.mock('react-native/src/private/specs_DEPRECATED/components/DebuggingOverlayNativeComponent', () => 'View');

jest.mock('@sbaiahmed1/react-native-blur', () => {
  return  {
    LiquidGlassView: 'LiquidGlassView'
  }
});