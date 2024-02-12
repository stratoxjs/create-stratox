import { Router } from './assets/Router.js';
import { Pages } from './Controllers/Pages.js';

const router = new Router();
router.get('', [Pages, "start"]);
router.get('{page:about}', [Pages, "about"]);
router.get('{page:contact}/{id:[0-9]+}', [Pages, "contact"]);
router.post('{page:contact}/{id:[0-9]+}', [Pages, "contactPost"]);


export default router;