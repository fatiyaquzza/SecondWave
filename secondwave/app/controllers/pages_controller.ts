import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  
  async home({ view }: HttpContext) {
    return view.render('pages/home')
  }

  async dashboard({ view }: HttpContext) {
    return view.render('pages/admin/dashboard')
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

  async account({ view }: HttpContext) {
    return view.render('pages/account')
  }

  async all({ view }: HttpContext) {
    return view.render('pages/all')
  }

  async cart({ view }: HttpContext) {
    return view.render('pages/cart')
  }

  async checkout({ view }: HttpContext) {
    return view.render('pages/checkout')
  }


}