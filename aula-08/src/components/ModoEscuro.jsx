import { useState } from "react";

function ModoEscuro() {
  const [escuro, setEscuro] = useState(false);

  return (
    <div
      style={{
        backgroundColor: escuro ? "#333" : "#fff",
        color: escuro ? "#fff" : "#000",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>{escuro ? "🌙 Modo Escuro" : "🌞 Modo Claro"}</h2>
      <button onClick={() => setEscuro(!escuro)}>
        Alternar para {escuro ? "Modo Claro" : "Modo Escuro"}
      </button>
    </div>
  );
}

export default ModoEscuro;