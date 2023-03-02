import { useEffect, useState } from "react";
import "./App.css";
import useAxios from "./useAxios";

// const Screen = {
//   FIRST: "first",
//   SECOND: "second",
//   THIRD: "third",
//   FINAL: "final",
// };

function App() {
  // // const [screen, setScreen] = useState(Screen.FIRST);

  // return (
  //   <div className="App">
  //     {/* {screen === "first" ? (
  //       <div className="testscreen">
  //         <h1 className="bg-white tooltip">
  //           first screen
  //           <span className="tooltiptext">this is first text</span>
  //         </h1>
  //         <h1>second screen </h1>
  //         <h1>third screen </h1>
  //         <br />
  //         <div className="buttondiv">
  //           <button
  //             onClick={() => {
  //               setScreen(Screen.SECOND);
  //             }}
  //           >
  //             next
  //           </button>
  //         </div>
  //       </div>
  //     ) : null}
  //     {screen === "second" ? (
  //       <div className="testscreen">
  //         <h1>first screen</h1>
  //         <h1 className="bg-white tooltip">
  //           second screen
  //           <span className="tooltiptext">this is second text</span>
  //         </h1>
  //         <h1>third screen</h1>
  //         <br />
  //         <div className="buttondiv">
  //           <button
  //             onClick={() => {
  //               setScreen(Screen.FIRST);
  //             }}
  //           >
  //             prev
  //           </button>
  //           <button
  //             onClick={() => {
  //               setScreen(Screen.THIRD);
  //             }}
  //           >
  //             next
  //           </button>
  //         </div>
  //       </div>
  //     ) : null}
  //     {screen === "third" ? (
  //       <div className="testscreen">
  //         <h1>first screen</h1>
  //         <h1>scenod screen</h1>
  //         <h1 className="bg-white tooltip">
  //           third screen
  //           <span className="tooltiptext">this is third text</span>
  //         </h1>
  //         <br />
  //         <div className="buttondiv">
  //           <button
  //             onClick={() => {
  //               setScreen(Screen.SECOND);
  //             }}
  //           >
  //             prev
  //           </button>
  //           <button
  //             onClick={() => {
  //               setScreen(Screen.FINAL);
  //             }}
  //           >
  //             finish
  //           </button>
  //         </div>
  //       </div>
  //     ) : null}
  //     {screen === "final" ? (
  //       <div className="testscreen-2">
  //         <h1>first screnn</h1>
  //         <h1>second screnn</h1>
  //         <h1>third screnn</h1>
  //         <div></div>
  //       </div>
  //     ) : null} */}

  //   </div>
  // );

  const { response, loading, error } = useAxios({
    method: "post",
    url: "/posts",
    headers: JSON.stringify({ accept: "*/*" }),
    body: JSON.stringify({
      userId: 1,
      id: 19392,
      title: "title",
      body: "Sample text",
    }),
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);

  return (
    <div className="App">
      <h1>Posts</h1>

      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
          )}
          <div>{data && <p>{data.id}</p>}</div>
        </div>
      )}
    </div>
  );
}

export default App;
