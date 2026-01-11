import { atom, selector } from "recoil";
import axios from "axios";
export const notificationAtom = atom({
  key: "notificationAtom",
  default: selector({
    key: "networkAtomselector",
    get: async () => {
      const res = await axios.get("server call");
      return res.data;
    },
  }),
});

export const totalCountSelector = selector({
  key: "totalCountSelector",
  get: ({ get }) => {
    const allNotification = get(notificationAtom);

    const totalNotificationCount =
      allNotification.networkAtom +
      async.jobAtom +
      allNotification.messageAtom +
      notificationAtom.notificationAtom;
    return totalNotificationCount;
  },
});
