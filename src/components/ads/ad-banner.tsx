interface Props {
  slot?: string
  className?: string
}

/**
 * Composant publicitaire AdSense — désactivé par défaut.
 * Activer en définissant ADSENSE_CLIENT après approbation Google AdSense.
 * Le script adsbygoogle.js ne doit être ajouté au layout qu'après approbation.
 */
export default function AdBanner({ slot, className }: Props) {
  const adClient = process.env.ADSENSE_CLIENT
  if (!adClient) return null

  return (
    <div className={`flex justify-center ${className || ""}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adClient}
        data-ad-slot={slot || ""}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
