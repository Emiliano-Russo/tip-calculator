import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(`@${key}`, value);
  } catch (e) {
    // saving error
    console.error(e);
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // reading error
    console.error(e);
  }
};

export const removeValue = async (key: string) => {
  try {
    await AsyncStorage.removeItem(`@${key}`);
  } catch (e) {
    // remove error
    console.error(e);
  }

  console.log("Done.");
};
