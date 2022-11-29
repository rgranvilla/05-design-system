import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  showSpacingBar?: boolean
  showFontSizesExample?: boolean
  showFontWeights?: boolean
  showBorderRadius?: boolean
}

export function TokensGrid({
  tokens,
  hasRemValue = false,
  showSpacingBar = false,
  showFontSizesExample = false,
  showFontWeights = false,
  showBorderRadius = false,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {showSpacingBar && <th></th>}
          {showFontSizesExample && <th></th>}
          {showFontWeights && <th></th>}
          {showBorderRadius && <th></th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
              {showSpacingBar && (
                <td style={{ textAlign: 'left' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      width: `${Number(value.replace('rem', '')) * 16}px`,
                      height: '1rem',
                      background: '#22D3EE',
                    }}
                  />
                </td>
              )}
              {showFontSizesExample && (
                <td>
                  <span style={{ fontSize: `${value}` }}>
                    If you can dream it, you can do it.
                  </span>
                </td>
              )}
              {showFontWeights && (
                <td>
                  <span style={{ fontWeight: `${value}` }}>
                    You, me or nobody is gonna hit as hard as life...
                  </span>
                </td>
              )}
              {showBorderRadius && (
                <td>
                  <div
                    style={{
                      height: '4rem',
                      width: '4rem',
                      borderRadius: `${value}`,
                      background: '#22D3EE',
                    }}
                  />
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
