import type { HttpContext } from '@adonisjs/core/http'
import User from '../../models/user.js'
import { loginValidator } from '../../validators/auth.js'

export default class LoginController {
  
  async show({ view }: HttpContext) {
    return view.render('pages/auth/signin')
  }

  async store({ request, response, auth }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    return response.redirect().toPath('/')
  }
}