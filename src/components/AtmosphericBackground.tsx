interface AtmosphericLayerProps {
  glow?: boolean;
  grid?: boolean;
  texture?: boolean;
}

export const AtmosphericLayer = ({
  glow = true,
  grid = true,
  texture = true,
}: AtmosphericLayerProps) => {
  return (
    <>
      {glow && (
        <>
          <div className="atmospheric-glow-forest" aria-hidden />
          <div className="atmospheric-glow-gold" aria-hidden />
        </>
      )}
      {texture && <div className="atmospheric-texture" aria-hidden />}
      {grid && <div className="atmospheric-grid" aria-hidden />}
    </>
  );
};
