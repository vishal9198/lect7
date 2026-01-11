import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 0,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 12,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 0,
});

export const totalCountSelector = selector({
  key: "totalCountSelector",
  get: ({ get }) => {
    const totalNotificationCount =
      get(networkAtom) +
      get(jobAtom) +
      get(messageAtom) +
      get(notificationAtom);
    return totalNotificationCount;
  },
});
