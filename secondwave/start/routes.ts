/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const PagesController = () => import('#controllers/pages_controller')

router.get('/', [PagesController, 'home'])
router.get('/home', [PagesController, 'home'])
router.get('/signin', [PagesController, 'signin'])
router.get('/register', [PagesController, 'register'])
router.get('/admin', [PagesController, 'admin'])
router.get('/cart', [PagesController, 'cart'])
router.get('/checkout', [PagesController, 'checkout'])
router.get('/profile', [PagesController, 'profile'])
router.get('/product', [PagesController, 'product'])
router.get('/order', [PagesController, 'order'])
router.get('/account', [PagesController, 'account'])
router.get('/detail', [PagesController, 'detail'])



