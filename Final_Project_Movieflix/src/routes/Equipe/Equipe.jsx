import Caio from "/imagens/Caio.png";
import Luis from "/imagens/Luis.png";
import Zaza from "/imagens/Zaza.png";
import styles from'./equipe.module.css';
import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";

function Equipe() {
  return (
    <>
     <center>
        <h1 className={styles.TituloPrincipal}>Nossa Equipe</h1>
      </center>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.foto}>
                <img src={Caio} alt="Perfil-do-Colaborador" />
            </div>
              <h2>
                <span>Caio </span>Silva
              </h2>
              <h5>Product Owner e Tester</h5>
              <div className={styles.RedesSociais}>
                <a href="https://github.com/caioosilva">
                  <FaGithub className={styles.SocialIcons}/>
                </a>
                <a href="https://instagram.com/caioosilva_?igshid=OGQ5ZDc2ODk2ZA==">
                  <FaInstagramSquare className={styles.SocialIcons}/>
                </a>
                <a href="https://www.linkedin.com/in/caio-villalba-873897179">
                  <FaLinkedin className={styles.SocialIcons}/>
                </a>
              </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.foto}>
                <img src={Luis} alt="Perfil-do-Colaborador" />
            </div>
              <h2>
                <span>Luis </span> Brito
              </h2>
              <h5>Desenvolvedor e Tester</h5>
              <div className={styles.RedesSociais}>
                <a href="https://github.com/luisagnes">
                  <FaGithub className={styles.SocialIcons}/>
                </a>
                <a href="https://www.instagram.com/luisagnes97/">
                  <FaInstagramSquare className={styles.SocialIcons}/>
                </a>
                <a href="https://www.linkedin.com/in/luisfelipedebritoagnes/">
                  <FaLinkedin className={styles.SocialIcons}/>
                </a>
              </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.foto}>
                <img src={Zaza} alt="Perfil-do-Colaborador" />
            </div>
              <h2>
                <span>José </span>Isaias
              </h2>
              <h5>Tester e Desenvolvedor</h5>
              <div className={styles.RedesSociais}>
                <a href="https://github.com/isaiasZ">
                  <FaGithub className={styles.SocialIcons}/>
                </a>
                <a href="https://www.instagram.com/_isaias.silv/">
                  <FaInstagramSquare className={styles.SocialIcons}/>
                </a>
                <a href="">
                  <FaLinkedin className={styles.SocialIcons}/>
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Equipe;