import { useEffect, useState } from "react";
import type {
  MapContainer as MapContainerType,
  TileLayer as TileLayerType,
  Marker as MarkerType,
  Popup as PopupType,
} from "react-leaflet";
import type { DivIcon } from "leaflet";
import { OFFICE_COORDS, OFFICE_ADDRESS } from "@/lib/constants";
import "leaflet/dist/leaflet.css";

export function AddressMap() {
  const [mounted, setMounted] = useState(false);
  const [Comp, setComp] = useState<null | {
    MapContainer: typeof MapContainerType;
    TileLayer: typeof TileLayerType;
    Marker: typeof MarkerType;
    Popup: typeof PopupType;
    icon: DivIcon;
  }>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [rl, L] = await Promise.all([import("react-leaflet"), import("leaflet")]);
      if (cancelled) return;
      const goldPin = L.divIcon({
        className: "",
        html: `
          <div style="position:relative;width:28px;height:28px;">
            <span style="position:absolute;inset:0;border-radius:9999px;background:var(--color-accent);opacity:.25;animation:pulse 2.4s ease-out infinite;"></span>
            <span style="position:absolute;top:6px;left:6px;width:16px;height:16px;border-radius:9999px;background:var(--color-accent);border:2px solid var(--color-ivory);box-shadow:0 4px 12px rgba(15,31,23,.4);"></span>
          </div>
          <style>@keyframes pulse{0%{transform:scale(.6);opacity:.5}100%{transform:scale(2);opacity:0}}</style>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });
      setComp({
        MapContainer: rl.MapContainer,
        TileLayer: rl.TileLayer,
        Marker: rl.Marker,
        Popup: rl.Popup,
        icon: goldPin,
      });
      setMounted(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!mounted || !Comp) {
    return (
      <div className="address-map-shell flex items-center justify-center">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-(--ink)/50">
          Carregando mapa…
        </span>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, icon } = Comp;

  return (
    <div className="address-map-shell relative">
      <MapContainer
        center={OFFICE_COORDS}
        zoom={16}
        scrollWheelZoom={false}
        zoomControl={true}
        attributionControl={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          subdomains={["a", "b", "c", "d"]}
        />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"
          subdomains={["a", "b", "c", "d"]}
        />
        <Marker position={OFFICE_COORDS} icon={icon}>
          <Popup>
            <div style={{ fontFamily: "DM Serif Display, serif" }}>
              <strong>Oliveira &amp; Siqueira</strong>
              <br />
              <span style={{ fontFamily: "Fira Sans, sans-serif", fontSize: "0.75rem" }}>
                {OFFICE_ADDRESS}
              </span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
