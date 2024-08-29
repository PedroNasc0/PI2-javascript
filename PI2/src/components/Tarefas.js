import { StyledLeftContainer } from "./estilos/StyledLeftContainer.style";
import { StyledRightContainer } from "./estilos/StyledRightContainer.style";

import { DivGrafico } from "./estilos/DivGrafico.style";

import { useState } from "react";
import Grafico from "./Grafico";

function Jogador() {
  const [contratacao, setContratacao] = useState([]);
  const [pendente, setPendente] = useState([]);
  const [contratado, setContratado] = useState([]);
  const [jogador, setJogador] = useState("");
  const [status, setStatus] = useState("Contratacao");

  const addJogador = (e) => {
    e.preventDefault();
    if (!jogador) return; 

    const novoJogador = { nome: jogador, id: Date.now(), status: status };
    switch (status) {
      case "Contratacao":
        setContratacao([...contratacao, novoJogador]);
        break;
      case "Pendente":
       setPendente([...pendente, novoJogador]);
        break;
      case "Contratado":
        setContratado([...contratado, novoJogador]);
        break;
      default:
        break;
    }

    setJogador(""); 
    setStatus("Contratacao"); 
  };

  const removerJogador = (id, status) => {
    switch (status) {
      case "Contratacao":
        setContratacao(
          contratacao.filter((jogador) => jogador.id !== id)
        );
        break;
      case "Pendente":
       setPendente(
          pendente.filter((jogador) => jogador.id !== id)
        );
        break;
      case "Contratado":
        setContratado(contratado.filter((jogador) => jogador.id !== id));
        break;
      default:
        break;
    }
  };

  const moveJogador = (id, statusAtual, novoStatus) => {
    let JogadorParaMover;
    switch (statusAtual) {
      case "Contratacao":
        JogadorParaMover = contratacao.find((jogador) => jogador.id === id);
        setContratacao(
          contratacao.filter((jogador) => jogador.id !== id)
        );
        break;
      case "Pendente":
        JogadorParaMover = pendente.find((jogador) => jogador.id === id);
       setPendente(
          pendente.filter((jogador) => jogador.id !== id)
        );
        break;
      case "Contratado":
        JogadorParaMover = contratado.find((jogador) => jogador.id === id);
        setContratado(contratado.filter((jogador) => jogador.id !== id));
        break;
      default:
        break;
    }
    console.log(JogadorParaMover);
    if (JogadorParaMover) {
      JogadorParaMover.status = novoStatus;
      switch (novoStatus) {
        case "Contratacao":
          setContratacao([...contratacao, JogadorParaMover]);
          break;
        case "Pendente":
         setPendente([...pendente, JogadorParaMover]);
          break;
        case "Contratado":
          setContratado([...contratado, JogadorParaMover]);
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <StyledLeftContainer>
    
        <h2>Contratações pendentes</h2>

        <ul id="pendente">
          {contratacao.map((jogador) => (
            <div key={jogador.id}>
              <li>
                {jogador.nome}

                <button
                  class="btnEmAndamento"
                  onClick={() =>
                    moveJogador(jogador.id, "Contratacao", "Pendente")
                  }
                >
                  Pendente
                </button>

                <button
                  class="btnRemover"
                  type="button"
                  onClick={() => removerJogador(jogador.id, jogador.status)}
                >
                  Descartar
                </button>
              </li>
            </div>
          ))}
        </ul>

        <h2>Em Processo</h2>

        <ul id="processo">
          {pendente.map((jogador) => (
            <div key={jogador.id}>
              <li>
                {jogador.nome}

                
                <button
                  class="btnConcluido"
                  onClick={() =>
                    moveJogador(jogador.id, "Pendente", "Contratado")
                  }
                >
                  Contratado
          
                </button>

                <button
                  class="btnRemover"
                  type="button"
                  onClick={() => removerJogador(jogador.id, jogador.status)}
                >
                  Descartar
                </button>
              </li>
            </div>
          ))}
        </ul>

        <h2>Contratado</h2>

        <ul id="contratado">
          {contratado.map((jogador) => (
            <div key={jogador.id}>
              <li>
                {jogador.nome}

               
                <button
                  class="btnRemover"
                  type="button"
                  onClick={() => removerJogador(jogador.id, jogador.status)}
                >
                 Descartar
                </button>
              </li>
            </div>
          ))}
        </ul>
      </StyledLeftContainer>

      <StyledRightContainer>
        <h2>Adicionar Jogador</h2>
        <form>
          <div>
            <label htmlFor="jogador">Jogador:</label>
            <input
              type="text"
              name="jogador"
              id="jogador"
              required
              value={jogador}
              onChange={(e) => setJogador(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="status">Status:</label>
            <select
              name="status"
              id="status"
              value={status}
              required
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Contratacao">Contratacao</option>
              <option value="Pendente">Pendente</option>
            </select>
          </div>

          <div className="divBotao">
            <button onClick={addJogador} className="botao">
              Adicionar!
            </button>
          </div>
        </form>
      </StyledRightContainer>
      <DivGrafico>
        <Grafico
          contratacao={contratacao}
          pendente={pendente}
          contratado={contratado}
        />
      </DivGrafico>
    </>
  );
}

export default Jogador;
