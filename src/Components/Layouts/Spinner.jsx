import spinner from "./Assets/spinner.gif";

function DisplaySpinner() {
  return (
    <div className="w-100 mt-20">
      <img
        with={180}
        className="text-center mx-auto"
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
}

export default DisplaySpinner;
