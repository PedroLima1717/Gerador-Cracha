import { useState } from "react";
function nomeUsuario() {
    const [nomeUsuario, setNomeUsuario] = useState("");

    return (
        <div>
                <input
            type="text"
            placeholder="Digite seu nome"
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
        />
            <p>Olá, {nomeUsuario}</p>
        </div>
    );
}
export default nomeUsuario;