import { Router } from "express";

import { createSpecificationsController } from "../modules/useCases/createSpefications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
