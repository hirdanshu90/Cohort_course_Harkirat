import { useState } from "react";
import React from "react";
import { Todo_app } from "./Todo_app_assignment_6.1/Todo_app";
import WrapperComponentsNewWay from "./Todo_app_assignment_6.1/wrapper_components_new_way";
import UseEffectUse from "./Todo_app_assignment_6.1/UseEffect_Hooks";
import TodoTask from "./Todo_app_assignment_6.1/UseEffect_todo_task";
import HookApp from "./Week_6.2/hooks_todo_app";
import Todo_id_Fetch from "./Week_6.2/Fetching_onBasis_of_ID";
import Todo_id_Button from "./Week_6.2/Creating_buttons_for_diff_ids";
import Use_Memo from "./Week_6.2/UseMemo_app";
import Use_callBack from "./Week_6.2/useCallBack_hook_example";
// import WrapperComponents from "./Todo_app_assignment/wrapper_components_old_way";

// Top level app  component
function App() {
  return (
    <>
      <HeaderWithButton></HeaderWithButton>

      <Header title="Hirdanshu2"></Header>
      <Header title="Hirdanshu3"></Header>
      <br></br>
      <br></br>
      <Todo_app></Todo_app>

      <br></br>
      <br></br>
      <WrapperComponentsNewWay></WrapperComponentsNewWay>
      <br></br>
      <br></br>
      <UseEffectUse></UseEffectUse>
      <br></br>
      <br></br>
      <TodoTask></TodoTask>
      <br></br>
      <br></br>
      <HookApp></HookApp>
      <br></br>
      <br></br>
      <Todo_id_Fetch></Todo_id_Fetch>
      <br></br>
      <br></br>
      <Todo_id_Button></Todo_id_Button>
      <br></br>
      <br></br>
      <Use_Memo></Use_Memo>
      <br></br>
      <br></br>
      <Use_callBack></Use_callBack>
    </>
  );
}
// Header function with button. Segregating components that are changed and have props updated.
function HeaderWithButton() {
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState("From useState hook");
  // Function to update the title.
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <>
      <button onClick={updateTitle}>Update the title</button>

      <Header title={title}></Header>
    </>
  );
}

// Header component
// eslint-disable-next-line react/prop-types
// function Header({ title }) {
//   return <div>{title}</div>;
// }

// Here we have used React.memo. This helps us to skip re rendering, if the props are not changed.
//  We can also destructure memo from REact in the import itself.
// eslint-disable-next-line react/prop-types
const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
