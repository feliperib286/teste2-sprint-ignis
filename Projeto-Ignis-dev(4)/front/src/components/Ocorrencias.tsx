import React, { useEffect, useState } from "react";

interface Ocorrencia {
  latitude: number;
  longitude: number;
  estado: string;
  bioma: string;
  risco_fogo: number;
  data: string;
  dia_sem_chuva?: string;
  precipitacao?: string;
  frp?: string;
}

const Ocorrencias = () => {
  const [tipo, setTipo] = useState("risco");
  const [estado, setEstado] = useState("");
  const [bioma, setBioma] = useState("");
  const [data, setData] = useState("");
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);

  const buscarDados = async () => {
    const url = new URL("http://localhost:3000/filtros");
    url.searchParams.append("tipo", tipo);
    if (estado) url.searchParams.append("estado", estado);
    if (bioma) url.searchParams.append("bioma", bioma);
    if (data) url.searchParams.append("data", data);

    try {
      const res = await fetch(url.toString());
      const json = await res.json();
      setOcorrencias(json);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  return (
    <div>
      <h2>Filtrar Ocorrências</h2>
      <div>
        <label>Tipo:</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="risco">Risco de Fogo</option>
          <option value="foco">Foco de Calor</option>
          <option value="area">Área Queimada</option>
        </select>

        <label>Estado:</label>
        <input value={estado} onChange={(e) => setEstado(e.target.value)} placeholder="Ex: Pará" />

        <label>Bioma:</label>
        <input value={bioma} onChange={(e) => setBioma(e.target.value)} placeholder="Ex: Amazônia" />

        <label>Data:</label>
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} />

        <button onClick={buscarDados}>Buscar</button>
      </div>

      <h3>Resultados</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Estado</th>
            <th>Bioma</th>
            <th>Risco</th>
            <th>Data</th>
            <th>Chuva</th>
            <th>Precipitação</th>
            <th>FRP</th>
          </tr>
        </thead>
        <tbody>
          {ocorrencias.map((o, index) => (
            <tr key={index}>
              <td>{o.latitude}</td>
              <td>{o.longitude}</td>
              <td>{o.estado}</td>
              <td>{o.bioma}</td>
              <td>{o.risco_fogo}</td>
              <td>{o.data}</td>
              <td>{o.dia_sem_chuva ?? "-"}</td>
              <td>{o.precipitacao ?? "-"}</td>
              <td>{o.frp ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ocorrencias;
