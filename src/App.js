

function App() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">
          Go Watch a Movie!
        </h1>
        <hr className="mb-3"></hr>
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <ul className="list-group">
              <li className="list-froup-item">
                <a href="/">Home</a>
              </li>
              <li className="list-froup-item">
                <a href="/movies">Movies</a>
              </li>
              <li className="list-froup-item">
                <a href="/admin">Manage catalogue</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-md-10">

        </div>
      </div>
    </div>
  );
}

export default App;
