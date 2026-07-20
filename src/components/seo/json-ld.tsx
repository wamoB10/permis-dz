export default function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" suppressHydrationWarning>
      {JSON.stringify(data)}
    </script>
  )
}
