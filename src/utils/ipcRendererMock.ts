export const ipcMock = {
  ipcRenderer: {
    send: (arg: string) => {
      console.log("ipcRenderer mock: send ", arg);
    },
    isMock: true
  }
};