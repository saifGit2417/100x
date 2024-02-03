import { atom, selector } from "recoil";

export const homeAtom = atom({
  key: "homeAtom",
  default: 12,
});
export const networkAtom = atom({
  key: "networkAtom",
  default: 96,
});
export const notificationAtom = atom({
  key: "notification",
  default: 23,
});
export const jobsAtom = atom({
  key: "jobs",
  default: 56,
});

export const finalMeValue = selector({
  key: "finalMeValue",
  get: ({ get }) => {
    const homeVal = get(homeAtom);
    const networkVal = get(networkAtom);
    const notificationVal = get(notificationAtom);
    const jobsVal = get(jobsAtom);

    return homeVal + networkVal + notificationVal + jobsVal;
  },
});
