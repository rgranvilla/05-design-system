interface LineHeightsProps {
  lineHeights: Record<string, string>
}

export function LineHeights({ lineHeights }: LineHeightsProps) {
  return (
    <>
      <div
        style={{
          backgroundColor: '#44444460',
          padding: '0.75rem 1rem',
          borderRadius: '8px',
        }}
      >
        {Object.entries(lineHeights).map(([key, value]) => {
          return (
            <div
              key={key}
              style={{
                marginBottom: '2rem',
              }}
            >
              <strong style={{ color: '#fff' }}>{key}</strong>
              <p style={{ lineHeight: `${value}`, color: '#ccc' }}>
                Let me tell you something you already know. The world ain&apos;t
                all sunshine and rainbows. It&apos;s a very mean and nasty place
                and I don&apos;t care how tough you are it will beat you to your
                knees and keep you there permanently if you let it. You, me, or
                nobody is gonna hit as hard as life. But it ain&apos;t about how
                hard you hit. It&apos;s about how hard you can get hit and keep
                moving forward. How much you can take and keep moving forward.
                That&apos;s how winning is done! Now if you know what
                you&apos;re worth then go out and get what you&apos;re worth.
              </p>
            </div>
          )
        })}
      </div>
      <div
        style={{
          backgroundColor: '#444444',
          border: '1px solid #333',
          lineHeight: '140%',
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          marginTop: '1rem',
        }}
      >
        {Object.entries(lineHeights).map(([key, value]) => {
          return (
            <div key={key}>
              <span style={{ color: 'cyan' }}>&lt;</span>
              <span style={{ color: '#E06AAA' }}>p</span>
              <span style={{ color: 'lightgray' }}> class=</span>
              <span style={{ color: '#E06AAA' }}>&quot;</span>
              <span style={{ color: 'cyan' }}>{key} ... </span>
              <span style={{ color: '#E06AAA' }}>&quot;</span>
              <span style={{ color: 'cyan' }}>&gt;</span>
              <span style={{ color: 'white' }}>
                Let me tell you something you already know..
              </span>
              <span style={{ color: 'cyan' }}>&lt;&#47;</span>
              <span style={{ color: '#E06AAA' }}>p</span>
              <span style={{ color: 'cyan' }}>&gt;</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
