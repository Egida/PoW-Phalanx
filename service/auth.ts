import config from '../config'
import parse from 'url-parse'

export default class Auth {
  public static async checkToken(url: string | undefined) {
    if (!url) {
      return undefined
    }
    const parsedUrl = parse(url, true)
    if (!parsedUrl.query.token) {
      return undefined
    }
    if (parsedUrl.query.token == config.subscription_token) {
      return 'subscription'
    }
    if (parsedUrl.query.token == config.synchronization_token) {
      return 'synchronization'
    }
    return undefined
  }
}
