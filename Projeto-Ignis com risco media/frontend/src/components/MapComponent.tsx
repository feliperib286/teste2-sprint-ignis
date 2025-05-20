import React, { useMemo, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface BaseDado {
  latitude: number;
  longitude: number;
  estado: string;
  bioma: string;
  risco_fogo: number;
  data: string;
  tipo: string;
}

interface Props {
  dados: BaseDado[];
}

const getColor = (valor: number): string => {
  if (valor >= 0.9) return '#800026';
  if (valor >= 0.7) return '#BD0026';
  if (valor >= 0.5) return '#FC4E2A';
  if (valor >= 0.3) return '#FD8D3C';
  if (valor >= 0.1) return '#FEB24C';
  return '#FFEDA0';
};

const brasilBounds: L.LatLngBoundsExpression = [
  [-34.0, -74.0],
  [5.3, -32.4],
];

const MapComponent: React.FC<Props> = ({ dados }) => {
  const [modoAgrupamento, setModoAgrupamento] = useState<'estado' | 'bioma'>('estado');

  useEffect(() => {
    console.log("🧪 Dados recebidos no MapComponent:", dados);
    const dadosRisco = dados.filter(d => d.tipo === 'risco' && typeof d.risco_fogo === 'number' && d.risco_fogo >= 0);
    console.log("✅ Dados válidos (tipo 'risco' e risco_fogo >= 0):", dadosRisco);
  }, [dados]);

  const normalizar = (str: string) => str.trim().toLowerCase();

  const dadosAgrupados = useMemo(() => {
    const grupos: {
      [chave: string]: {
        totalRisco: number;
        totalLat: number;
        totalLng: number;
        count: number;
        exemplo: BaseDado;
      };
    } = {};

    dados
      .filter(d => d.tipo === 'risco' && typeof d.risco_fogo === 'number' && d.risco_fogo >= 0)
      .forEach(d => {
        const chave = normalizar(modoAgrupamento === 'estado' ? d.estado : d.bioma);
        if (!grupos[chave]) {
          grupos[chave] = {
            totalRisco: 0,
            totalLat: 0,
            totalLng: 0,
            count: 0,
            exemplo: d,
          };
        }
        grupos[chave].totalRisco += d.risco_fogo;
        grupos[chave].totalLat += d.latitude;
        grupos[chave].totalLng += d.longitude;
        grupos[chave].count += 1;
      });

    return Object.entries(grupos).map(([chave, grupo]) => ({
      chave,
      media: grupo.totalRisco / grupo.count,
      latitude: grupo.totalLat / grupo.count,
      longitude: grupo.totalLng / grupo.count,
      exemplo: grupo.exemplo,
    }));
  }, [dados, modoAgrupamento]);

  const marcadoresMedia = useMemo(
    () =>
      dadosAgrupados.map(({ chave, media, latitude, longitude, exemplo }, idx) => {
        const tamanho = 40; // tamanho fixo para todos

        return (
          <Marker
            key={idx}
            position={[latitude, longitude]}
            icon={L.divIcon({
              className: 'custom-icon',
              html: `
                <div style="
                  background-color: ${getColor(media)};
                  width: ${tamanho}px;
                  height: ${tamanho}px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 11px;
                  font-weight: bold;
                  color: black;
                  border: 1px solid black;
                  box-shadow: 0 0 4px rgba(0,0,0,0.3);
                ">
                  ${media.toFixed(3)}
                </div>`,
            })}
          >
            <Popup>
              <strong>{modoAgrupamento === 'estado' ? 'Estado' : 'Bioma'}:</strong> {exemplo[modoAgrupamento]}<br />
              <strong>Média do risco de fogo:</strong> {media.toFixed(3)}
            </Popup>
          </Marker>
        );
      }),
    [dadosAgrupados, modoAgrupamento]
  );

  return (
    <>
      {/* Filtro de agrupamento */}
      <div style={{ padding: '1rem' }}>
        <label>Agrupar por:</label>
        <select
          value={modoAgrupamento}
          onChange={e => setModoAgrupamento(e.target.value as 'estado' | 'bioma')}
          style={{ marginLeft: '0.5rem' }}
        >
          <option value="estado">Estado</option>
          <option value="bioma">Bioma</option>
        </select>
      </div>

      {/* Mapa */}
      <MapContainer
        center={[-15.78, -47.92]}
        zoom={4}
        style={{ height: '100vh', width: '100vw', zIndex: 0 }}
        maxBounds={brasilBounds}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {marcadoresMedia}
      </MapContainer>

      <Legenda />
    </>
  );
};

export default MapComponent;

// Legenda no canto do mapa
const Legenda = () => (
  <div style={{
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    background: 'black',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0,0,0,0.3)',
    fontSize: '12px',
    zIndex: 1000
  }}>
    <strong>Risco de Fogo</strong>
    <div><span style={bolinha('#800026')}></span> ≥ 0.9 (Muito Alto)</div>
    <div><span style={bolinha('#BD0026')}></span> ≥ 0.7 (Alto)</div>
    <div><span style={bolinha('#FC4E2A')}></span> ≥ 0.5 (Moderado)</div>
    <div><span style={bolinha('#FD8D3C')}></span> ≥ 0.3 (Baixo)</div>
    <div><span style={bolinha('#FEB24C')}></span> ≥ 0.1 (Muito Baixo)</div>
  </div>
);

const bolinha = (cor: string) => ({
  display: 'inline-block',
  width: 12,
  height: 12,
  marginRight: 6,
  borderRadius: '50%',
  backgroundColor: cor,
  border: '1px solid white'
});
