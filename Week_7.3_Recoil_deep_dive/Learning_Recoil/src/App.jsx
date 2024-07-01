// Linkedin Notification Nav Bar (state management)

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  totalNotificationSelector,
} from "./atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp></MainApp>
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  // const notificationAtomCount = useRecoilValue(notificationsAtom);
  const [messagingAtomCount, setMessagesAtomCount] =
    useRecoilState(messagingAtom);

  const totalNotificationSelectorCount = useRecoilValue(
    totalNotificationSelector
  );

  return (
    <>
      <button>Home</button>
      <button>
        My network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount})</button>

      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({totalNotificationSelectorCount})</button>
      <button
        onClick={() => {
          setMessagesAtomCount(messagingAtomCount + 1);
        }}
      >
        Me
      </button>
    </>
  );
}

export default App;
