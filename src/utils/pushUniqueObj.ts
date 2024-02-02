export const pushUniqueObject = (
  state: any,
  newObj: any,
  setAction: React.Dispatch<React.SetStateAction<any>>
) => {
  // Check if the new object is not already in the array
  if (!state.some((obj: any) => obj.id === newObj.id)) {
    // Create a new array with the unique object appended
    const newArray = [...state, newObj].sort((a, b) => a.id - b.id);

    // Update the state with the new array
    // @ts-ignore
    setAction(newArray);
  }
};
