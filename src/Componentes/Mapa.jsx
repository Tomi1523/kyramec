import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix de íconos
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const position = [-30.742691315491715, -59.57965427415202];

const CustomControl = () => {
  const map = useMap();
  const controlRef = useRef(null);

  useEffect(() => {
    if (!controlRef.current) {
      const customControl = L.control({ position: 'topleft' });
      customControl.onAdd = () => {
        const div = L.DomUtil.create('div', 'info-control');
        div.innerHTML = `
  <div style="border: 1px solid #ddd; border-radius: 8px; padding: 12px 16px; max-width: 300px; font-family: 'Segoe UI', sans-serif; background-color: #f9f9f9; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; font-size: 1.2rem; color: #333;"> Kyramec S.A.</div>
    <div style="margin: 6px 0; color: #555;">📍 RN12 km 601<br>La Paz, Entre Ríos</div>
    
    <a href="https://www.google.com/maps/dir/?api=1&destination=Kyramec+S.A.,+RN12+km+601,+La+Paz,+Entre+Ríos" 
       target="_blank" 
       rel="noopener noreferrer" 
       style="display: inline-block; margin-top: 8px; color: #0066cc; text-decoration: none; font-weight: 500;">
      <i class="fas fa-road"></i> Cómo llegar




    </a>
  </div>
`;
return div;

      };
      customControl.addTo(map);
      controlRef.current = customControl;
    }

    map.zoomControl.setPosition('bottomright');
  }, [map]);

  return null;
};

const Mapa = () => {
  return (
    
      <div>
        
          <div style={{ height: '400px', width: '100%' }}>
            <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={position}>
                <Popup>
                  RN12 km 601, La Paz, Entre Ríos
                </Popup>
              </Marker>
              <CustomControl />
            </MapContainer>
          </div>
        </div>
      
    
  );
};

export default Mapa;
