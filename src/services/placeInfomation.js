// import { locationDetais } from '../config/etec.js'

const getPlaceInformation = async () => {

  import('../config/etec.js').then(data => {
    console.log('bacon', data)
  })

  // const test = {...data}
  // console.log('date', test)
  return {}
}

export {
  getPlaceInformation
}