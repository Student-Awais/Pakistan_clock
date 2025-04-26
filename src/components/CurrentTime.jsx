const CurrentTime = () => {
  let time = new Date();

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
