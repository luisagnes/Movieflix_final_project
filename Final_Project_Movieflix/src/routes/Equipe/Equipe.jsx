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
                <img src={Pedro} alt="Perfil-do-Colaborador" />
            </div>
              <h2>
                <span>Caio </span>Silva
              </h2>
              <h5>Product Owner</h5>
              <div className={styles.RedesSociais}>
                <a href="">
                  <FaGithub className={styles.SocialIcons}/>
                </a>
                <a href="">
                  <FaInstagramSquare className={styles.SocialIcons}/>
                </a>
                <a href="">
                  <FaLinkedin className={styles.SocialIcons}/>
                </a>
              </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.foto}>
                <img src={Natan} alt="Perfil-do-Colaborador" />
            </div>
              <h2>
                <span>Luis </span> Brito
              </h2>
              <h5>Desenvolvedor </h5>
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
                <img src={Guilherme} alt="Perfil-do-Colaborador" />
            </div>
              <h2>
                <span>José </span>Isaias
              </h2>
              <h5>G. Conteúdo</h5>
              <div className={styles.RedesSociais}>
                <a href="https://github.com/GUINITH">
                  <FaGithub className={styles.SocialIcons}/>
                </a>
                <a href="https://www.instagram.com/gml_fp55/">
                  <FaInstagramSquare className={styles.SocialIcons}/>
                </a>
                <a href="https://www.linkedin.com/in/guilherme-felipe-dos-santos-b74b4721a/">
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