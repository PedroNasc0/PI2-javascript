import { Chart } from "react-google-charts";

function Grafico({ contratacao, pendente, contratado }) {
  const dados = [
    ["Jogadores", "Quantidade"],
    ["Contratacao", contratacao.length],
    ["Pedente", pendente.length],
    ["Contratado", contratado.length],
  ];

  const opcoes = {
    title: "Porcentagem de compras",
    backgroundColor: "#f2f2f2",
    colors: ['red', 'yellow', 'green']
  };

  return (
    <Chart
      chartType="PieChart"
      data={dados}
      options={opcoes}
      width={"100%"}
      height={"200px"}
    />
  );
}

export default Grafico;
