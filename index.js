const formatRp = (num) => {
  try {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(num)) {
      return 'not a number'
    }

    let str = num.toString().replace('', '')
    let parts = false
    const output = []
    let i = 1
    if (str.indexOf('.') > 0) {
      parts = str.split('.')
      // eslint-disable-next-line prefer-destructuring
      str = parts[0]
    }
    str = str.split('').reverse()
    // eslint-disable-next-line no-plusplus
    for (let j = 0, len = str.length; j < len; j++) {
      if (str[j] !== ',') {
        output.push(str[j])
        if (i % 3 === 0 && j < (len - 1)) {
          output.push(',')
        }
        // eslint-disable-next-line no-plusplus
        i++
      }
    }
    const formated = output.reverse().join('')
    const part = ((parts) ? `${parts[1].substr(0, 2)}` : '')

    return `Rp. ${formated} ${part}`
  } catch (error) {
    return error
  }
}

module.exports = { formatRp }
