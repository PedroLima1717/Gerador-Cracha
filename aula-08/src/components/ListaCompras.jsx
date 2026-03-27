import { useState } from "react";

function ListaCompras() {
  const [item, setItem] = useState("");
  const [lista, setLista] = useState([]);

  const adicionarItem = () => {
    if (item.trim() === "") return; // Evita adicionar itens vazios
    setLista([...lista, item]); // Adiciona o novo item à lista
    setItem(""); // Limpa o input
  };

  return (
    <div>
      <h2>🛒 Lista de Compras</h2>
      <input
        type="text"
        placeholder="Digite um item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={adicionarItem}>Adicionar</button>
      <ul>
        {lista.map((produto, index) => (
          <li key={index}>{produto}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;