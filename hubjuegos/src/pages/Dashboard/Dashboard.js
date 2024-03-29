import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
 <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
     
      <li>
        <figure id="navigateAhorcado">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3274/3274156.png"
            alt="Juega al ahorcado!"
          />
          <h2>AHORCADO</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });

  const navigateAhorcado = document.getElementById("navigateAhorcado"); // cuando haga click en el juego del ahorcado nos deja entrar en su página
  navigateAhorcado.addEventListener("click", () => {
    initControler("Ahorcado");
  });
};

export const printTemplateDashboard = () => {
  // las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main
  document.querySelector("main").innerHTML = template();
  document.querySelector("nav").style.display = "flex"; // Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex

  addEventListeners(); // metemos los escuchadores de la pagina
  getInfo();
};
