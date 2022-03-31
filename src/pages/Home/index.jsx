import { Link } from "react-router-dom";
import "./styles.css";
const HomePage = () => (
  <div className="container">
    <div class="card-deck">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Regist Project</h5>
          <p class="card-text">Copisa 1</p>
        </div>
        <div class="card-footer">
          <Link to="/regist-project">
            <label class="btn btn-primary">Regist Project</label>
          </Link>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">List Projects</h5>
          <p class="card-text">Copisa 2</p>
        </div>
        <div class="card-footer">
          <Link to="/list-projects">
            <label class="btn btn-primary">List Projects</label>
          </Link>{" "}
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Link Alumn</h5>
          <p class="card-text">Copisa 3</p>
        </div>
        <div class="card-footer">
          <Link to="/link-alumn">
            <label class="btn btn-primary">Link Alumn</label>
          </Link>{" "}
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
