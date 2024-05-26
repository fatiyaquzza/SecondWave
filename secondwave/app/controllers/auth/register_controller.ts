import type { HttpContext } from '@adonisjs/core/http'
import { registerValidator } from '../../validators/auth.js'
import User from '../../models/user.js'

export default class RegisterController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async store({ request, response, auth }: HttpContext) {
    // 1. grab our request data and validate it
    const data = await request.validateUsing(registerValidator)

    // 2. create our user
    const user = await User.create(data)


    // 3. Login that user
    
    await auth.use('web').login(user)

    return response.redirect().toPath('/')
  }
}