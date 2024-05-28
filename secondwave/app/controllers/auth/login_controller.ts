import User from '#models/user'
import { loginValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  async store({ request, response, auth, session  }: HttpContext) {
    const { email, password, role } = await request.validateUsing(loginValidator)
    
    try {
      // Verifikasi kredensial pengguna
      const user = await User.verifyCredentials(email, password)

      // Verifikasi peran pengguna
      if (user.role !== role) {
        session.flash({ error: 'Invalid role' })
        return response.redirect().back()
      }

      await auth.use('web').login(user)

      // Menentukan halaman mana yang akan diarahkan berdasarkan peran pengguna
      if (user.role === 'Buyer') {
        return response.redirect().toRoute('/home')
      } else if (user.role === 'Seller') {
        return response.redirect().toRoute('/dashboard')
      }

      // Pengalihan default jika peran bukan Buyer atau Seller
      return response.redirect().toPath('/home')
    } catch (error) {
      session.flash({ error: 'Invalid credentials' })
      return response.redirect().back()
    }
  }
}