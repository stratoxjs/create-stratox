import { Router } from '@stratox/pilot/src/Router';
import { Pages } from './controllers/Pages';
import { HttpStatus } from './controllers/HttpStatus';

const router = new Router();

router.get('/', [Pages, "start"]);
router.get('/{page:about}', [Pages, "about"]);
router.get('/{page:contact}/{id:[0-9]+}', [Pages, "contact"]);
router.post('/{page:contact}/{id:[0-9]+}', [Pages, "contactPost"]);


// Will catch 404 and 405 HTTP Status Errors codes
// Not required you can also handle it directly in the dispatcher
router.get('[STATUS_ERROR]', [HttpStatus, "statusError"]);


export default router;