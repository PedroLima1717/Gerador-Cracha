import { useState } from "react";
import styles from "./GeradorCracha.module.css";

function GeradorCracha() {
  // 1. Criando os estados para os campos do formulário
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");

  return (
    <div className={styles.painel}>
        {/* Lado Esquerdo: Formulário */}
      <div className={styles.formulario}>
        <h2>Configurações</h2>
        
        <label>Nome do Visitante:</label>
        <input 
          type="text" 
          placeholder="Ex: Ana Souza" 
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Cargo/Empresa:</label>
        <input 
          type="text" 
          placeholder="Ex: Desenvolvedora" 
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
        
        {/* Botão que zera os estados e limpa os campos */}
        <button onClick={() => {setNome(""); setCargo("");}}>
          Limpar Tudo
        </button>

      </div>
 {/* Lado Direito: O Crachá Físico */}
      <div className={styles.areaCracha}>
        <div className={styles.cracha}>
          
          <div className={styles.topo}>
            <div className={styles.furo}></div>
            <p>EVENTO TECH 2024</p>
          </div>
          
          <div className={styles.corpo}>
            {/* O nome digitado aparece aqui na hora! */}
            <h1 className={styles.nomeExibido}>
              {nome || "SEU NOME AQUI"}
            </h1>
            
            {/* O cargo digitado aparece aqui na hora! */}
            <p className={styles.cargoExibido}>
              {cargo || "Cargo ou Empresa"}
            </p>
          </div>

<div 
  className={styles.rodape} 
  style={{ backgroundColor: cargo.toLowerCase() === "diretor" ? "#FFD700" : "" }}
>
  <span>VISITANTE</span>
</div>

        </div>
      </div>

    </div>
  );
}
export default GeradorCracha