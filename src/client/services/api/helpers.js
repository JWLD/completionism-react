import axios from 'axios'

export const makeRequest = async ({ method, params, url }) => {
  try {
    const { data } = await axios({ method, params, url })

    return data
  } catch (err) {
    console.error(err)

    // TODO: show some sort of error to user
  }
}
