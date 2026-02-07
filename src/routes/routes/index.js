import { bookingPage, processBookingRequest } from './book.js';
import confirmationPage from './confirm.js';
import listRoutesPage from '../list.js';
import routeDetailsPage from './details.js';
import { Router } from 'express';

const railRoutesRouter = Router();

// List all routes
railRoutesRouter.get('/', listRoutesPage);



// Book ticket
railRoutesRouter.post('/book', processBookingRequest);
railRoutesRouter.get('/booking/:scheduleId', bookingPage);

// Route details page
railRoutesRouter.get('/:routeId', routeDetailsPage);

// Booking confirmation page
railRoutesRouter.get('/confirmation/:confirmationId', confirmationPage);

export default railRoutesRouter;
