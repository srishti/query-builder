export const getArrayOfAllValues = (
  inputObjArr: any[],
  keyToSearch: string
): any[] => {
  return inputObjArr.map((obj: any) => obj[keyToSearch]);
};

export const getObjectFromArrayWithKeyValue = (
  inputObjArr: any[],
  keyToSearch: string,
  valueToSearch: string
): any | null => {
  for (let obj of inputObjArr) {
    for (let key in obj) {
      if (obj[keyToSearch] === valueToSearch) {
        return obj;
      }
    }
  }
  return null;
};
