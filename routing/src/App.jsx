import { lazy, useMemo, useState } from "react";

import { notificationAtom, totalCountSelector } from "./store/atoms/atom";

import "./App.css";
import {
  RecoilRoot,
  useSetRecoilState,
  useRecoilValue,
  useRecoilState,
} from "recoil";

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
  const [networkCount, setnetworkCount] = useRecoilState(notificationAtom);
  const totalNotification = useRecoilValue(totalCountSelector);
  return (
    <div>
      <button>Home</button>
      <button>
        My network(
        {networkCount.networks >= 100 ? "99+" : networkCount.networks})
      </button>
      <button>Job({networkCount.jobs})</button>
      <button>Meassage({networkCount.messaging})</button>
      <button>Notification({networkCount.notifications})</button>
      <button>Me({totalNotification})</button>
    </div>
  );
}

export default App;
