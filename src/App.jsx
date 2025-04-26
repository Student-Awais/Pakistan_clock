import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
const App = () => {
  return (
    <div className="App min-vw-100 min-vh-100 bg-black bg-link-opacity-10">
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
      {/* <p>
        Current Time in Pakistan:{" "}
        {new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" })}
      </p> */}
    </div>
  );
};
export default App;
