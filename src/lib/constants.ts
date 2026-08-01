export const WHATSAPP = "https://wa.me/5588994454680";

export const SITE_URL =
  (typeof window !== "undefined" ? window.location.origin : null) ||
  import.meta.env.VITE_SITE_URL ||
  "https://oliveiraesiqueira-adv.vercel.app/";

export const wa = (msg: string) => `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// Coordenadas aproximadas — Rua Cel. Vicente, 312, Centro, Ubajara/CE
export const OFFICE_COORDS: [number, number] = [-3.8536, -40.9211];
export const OFFICE_ADDRESS = "Rua Cel. Vicente, 312, Centro, Ubajara, CE";
export const GMAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  OFFICE_ADDRESS,
)}`;
