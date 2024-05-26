/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import RegisterController from '../app/controllers/auth/register_controller.js'
import LogoutController from '../app/controllers/auth/logout_controller.js'
import LoginController from '../app/controllers/auth/login_controller.js'
import { middleware } from './kernel.js'
import { group } from 'console'
const PagesController = () => import('#controllers/pages_controller')

router.get('/', async (ctx) => {
    await ctx.auth.check()
    return ctx.view.render('pages/home')
  })

router.get('/home', [PagesController, 'home'])
router.get('/signin', [PagesController, 'signin'])
router.get('/admin', [PagesController, 'admin'])
router.get('/cart', [PagesController, 'cart'])
router.get('/checkout', [PagesController, 'checkout'])
router.get('/profile', [PagesController, 'profile'])
router.get('/product', [PagesController, 'product'])
router.get('/order', [PagesController, 'order'])
router.get('/account', [PagesController, 'account'])
router.get('/detail', [PagesController, 'detail'])


router.group(()=>{
    router.get('/register',[RegisterController, 'show']).as('register.show').use(middleware.guest())
    router.post('/register',[RegisterController, 'store']).as('register.store').use(middleware.guest())

    router.get('/login', [LoginController, 'show']).as('login.show').use(middleware.guest())
    router.post('/login', [LoginController, 'store']).as('login.store').use(middleware.guest())

    router.post('/logout', [LogoutController, 'handle']).as('logout').use(middleware.auth())

}).as('auth')

router.group(() => {
  router.get('/', async(ctx)=> {
    return "you are here"
  }).as('index')
}).prefix('/gatau').as('admin').use(middleware.auth())


