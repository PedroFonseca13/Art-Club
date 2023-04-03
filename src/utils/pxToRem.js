const pixelToRem = (...values) => {
  return values
    .reduce((acc, current) => (acc += current / 16 + 'rem '), '')
    .trim()
}

export default pixelToRem
