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
