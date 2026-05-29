export function VersionBadge() {
  const version = process.env.NEXT_PUBLIC_APP_VERSION
  if (!version) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 18,
        left: 20,
        zIndex: 150,
        fontFamily: 'var(--font-mono), monospace',
        fontSize: 10,
        letterSpacing: '0.06em',
        color: 'rgba(78,78,104,0.7)',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      v{version}
    </div>
  )
}
