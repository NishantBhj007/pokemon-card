import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div>
      <h1>Please Wait... </h1>
      <h1>All the Pokemon are Loading. </h1>
      <div className="boundary">
        <div className="mainball">
          <div className="pokebutton"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
