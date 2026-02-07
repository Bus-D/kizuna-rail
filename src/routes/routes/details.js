import { getRouteById, getSchedulesByRoute } from '../../models/model.js';

export default async (req, res, next) => {
    const { routeId } = req.params;
    const details = await getRouteById(routeId);
    const sortBy = req.query.region || 'All Regions';
    details.schedules = await getSchedulesByRoute(routeId);

    // TODO: getCompleteRouteDetails instead

    res.render('routes/details', { 
        title: 'Route Details',
        details,
        sortBy
    });
};