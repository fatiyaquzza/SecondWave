import User from '#models/user'
import { registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async store({ request, response, auth, session }: HttpContext) {
    try {
      const data = await request.validateUsing(registerValidator)
      const user = await User.create(data)

      await auth.use('web').login(user)

      return response.redirect().toPath('/')
    } catch (error) {
      session.flash({ error: error.message }) // Mengirim pesan kesalahan ke flash
      return response.redirect().back() // Kembali ke halaman pendaftaran dengan pesan kesalahan
    }
  }
}