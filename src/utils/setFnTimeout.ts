export const setFnTimeout = (
  callback: CallableFunction,
  val: number,
  returnVal: any
) => {
  return setTimeout(() => {
    callback(returnVal);
  }, val);
};
