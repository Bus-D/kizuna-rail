import { getRouteById, getSchedulesByRoute } from '../../models/model.js';

export default async (req, res, next) => {
    const { routeId } = req.params;
    const details = await getRouteById(routeId);
    const sortBy = req.query.region || 'All Regions';
    details.schedules = await getSchedulesByRoute(routeId);

const getAbbreviatedMonth = (monthNumber) => {
    console.log('Month NUmber:', monthNumber);
    const date = new Date(2026, monthNumber -1, 1);
    const abbreviatedMonth = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
    return abbreviatedMonth;
}

    res.render('routes/details', { 
        title: 'Route Details',
        details,
        getAbbreviatedMonth,
        sortBy
    });
};