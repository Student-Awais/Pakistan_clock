import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      // Force a re-render by updating the state
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="current-time text-success pt-3 pb-3 fs-3 d-flex justify-content-center">
      <p>
        This is current Time:{" "}
        {time.toLocaleTimeString("ur-PK", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })}{" "}
        - {time.toLocaleDateString()}
      </p>
    </div>
  );
};
export default CurrentTime;
