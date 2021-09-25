import express from "express";
import {
  getFlightsController,
  createFlightController,
  getFlightByIdController,
  deleteFlightByIdController,
} from "./flights.controller.js";
import { flightValidation } from "./flights.middleware.js";

const router = express.Router();

// CRUD Flights

router
  .route("/")
  .get(getFlightsController)
  .post(flightValidation, createFlightController);

router
  .route("/:id")
  .get(getFlightByIdController)
  .delete(deleteFlightByIdController);

/** ESTO TAMBIEN ES VALIDO PERO A MI ME GUSTA MAS LO DE ARRIBA (DECISION PERSONAL) */
// router.get('/', getFlightsController); // asocio el get del / al controlador de getFlights
// router.post('/', createFlightController); // asocio el post del / al controlador de createFlight
// router.get('/:id', getFlightByIdController); // asocio el get del /:id al controlador de getFlightsById
// router.delete('/:id', deleteFlightByIdController); // asocio el delete del /:id al controlador de deleteFlights

export default router;
