export const sleep = (ms: number = 200) =>
  new Promise((res) => {
    setTimeout(() => res(ms), ms);
  });
