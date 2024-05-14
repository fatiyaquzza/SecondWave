import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  
  async home({ view }: HttpContext) {
    return view.render('pages/home')
  }

  async admin({ view }: HttpContext) {
    return view.render('pages/admin')
  }

  async signin({ view }: HttpContext) {
    return view.render('pages/signin')
  }

  async register({ view }: HttpContext) {
    return view.render('pages/register')
  }

}