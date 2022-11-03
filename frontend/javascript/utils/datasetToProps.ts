const rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/

// aus jquery data
const parseData = (data: string) => {
  if (data === "true") {
    return true
  }
  if (data === "false") {
    return false
  }
  if (data === "null") {
    return null
  }
  // Only convert to a number if it doesn't change the string
  if (data === +data + "") {
    return +data
  }
  if (rbrace.test(data)) {
    return JSON.parse(data)
  }
  return data
}

type Dataset = {
  [key: string]: true | false | null | number | string | Dataset | any[]
}


const datasetToProps = (el: HTMLElement): Dataset => {
  if (el && el.dataset && el.dataset.props) {
    return JSON.parse(el.dataset.props)
  }
  const rawData = Object.assign({}, el.dataset)
  const data = {}
  Object.keys(rawData).forEach(key => data[key] = parseData(rawData[key]))
  return data
}

export { datasetToProps, parseData }
export default datasetToProps

