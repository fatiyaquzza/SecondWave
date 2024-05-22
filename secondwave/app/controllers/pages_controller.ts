import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  
  async home({ view }: HttpContext) {
    return view.render('pages/home')
  }

  async admin({ view }: HttpContext) {
    return view.render('pages/admin/dashboard')
  }

  async signin({ view }: HttpContext) {
    return view.render('pages/auth/signin')
  }

  async register({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async profile({ view }: HttpContext) {
    return view.render('pages/admin/profile')
  }

  async product({ view }: HttpContext) {
    return view.render('pages/admin/product')
  }

  async order({ view }: HttpContext) {
    return view.render('pages/admin/order')
  }

  async cart({ view }: HttpContext) {
    return view.render('pages/cart')
  }

  async checkout({ view }: HttpContext) {
    return view.render('pages/checkout')
  }


}