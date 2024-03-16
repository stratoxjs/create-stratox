import { Router } from '@stratox/pilot';
import { Pages } from '@/controllers/Pages';
import { HttpStatus } from '@/controllers/HttpStatus';

const router = new Router();

router.get('/', [Pages, "start"]);
router.get('/{page:about}', [Pages, "about", {
	response: {
		path: ['home'],
		url: "https://testarea.creativearmy.se/systems/smartWidget/smart-widget/api/6504e455-9f0c-11ee-aeaf-fc349797688f",
		request: {
			get: "test=1&www=2"
		}
	}
}]);


router.get('/{page:contact}', [Pages, "contact"]);
router.post('/{page:contact}', [Pages, "contactPost"]);


// Will handle 404 and 405 HTTP Status errors codes
// Not required you can also handle it directly in the dispatcher
router.get('[STATUS_ERROR]', [HttpStatus, "statusError"]);

export default router;