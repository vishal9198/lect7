import { lazy, useMemo, useState } from "react";
import {
  jobAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
  totalCountSelector,
} from "./store/atoms/atom";

import "./App.css";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Mainapp />
      </RecoilRoot>
    </>
  );
}

function Mainapp() {
  const networkcount = useRecoilValue(networkAtom);
  const jobcount = useRecoilValue(jobAtom);
  const messagecount = useRecoilValue(messageAtom);
  const notificationcount = useRecoilValue(notificationAtom);
  const totalNotification = useRecoilValue(totalCountSelector);
  return (
    <div>
      <button>Home</button>
      <button>My network({networkcount >= 100 ? "99+" : networkcount})</button>
      <button>Job({jobcount})</button>
      <button>Meassage({messagecount})</button>
      <button>Notification({notificationcount})</button>
      <button>Me({totalNotification})</button>
    </div>
  );
}

export default App;
