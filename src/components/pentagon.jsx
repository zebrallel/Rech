import * as React from 'react'

export default function createPentagon(options) {
  const { width, height, base, score } = Object.assign(
    {
      width: 100,
      height: 100,
      base: 20,
      score: {
        a: 0.8, // 右上角那个点，余下逆时针方向
        b: 0.9,
        c: 0.95,
        d: 0.97,
        e: 0.6
      }
    },
    options
  )
  const { a, b, c, d, e } = score
  const points = [
    [a * base * Math.cos((1 / 10) * Math.PI), -a * base * Math.sin((1 / 10) * Math.PI)],
    [0, -b * base],
    [-c * base * Math.cos((1 / 10) * Math.PI), -c * base * Math.sin((1 / 10) * Math.PI)],
    [-d * base * Math.sin((1 / 5) * Math.PI), d * base * Math.cos((1 / 5) * Math.PI)],
    [e * base * Math.sin((1 / 5) * Math.PI), e * base * Math.cos((1 / 5) * Math.PI)]
  ]

  return (
    <svg height={height} width={width}>
      <circle cx={base} cy={base} r={base} fill="#fff" stroke="#aaa" strokeWidth="1" />
      <polygon
        fill="#f9d368"
        points={points
          .map(p => {
            return `${p[0] + base},${p[1] + base} `
          })
          .join(' ')}
      />
    </svg>
  )
}
