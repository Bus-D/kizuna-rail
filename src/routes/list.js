import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();
    let filteredRoutes = await getAllRoutes();
    const seasons = await getListOfSeasons();

    const selectedRegion = req.query.regions || 'all';
    const selectedSeason = req.query.bestSeason || 'all';

    if (selectedRegion && selectedRegion != 'all') {
        filteredRoutes = filteredRoutes.filter(route => route.region === selectedRegion);
    }
    if (selectedSeason && selectedSeason != 'all') {
        filteredRoutes = filteredRoutes.filter(route => route.bestSeason == selectedSeason);
    }

    res.render('routes/list', { 
        title: 'Scenic Train Routes',
        regions,
        routes: filteredRoutes,
        selectedRegion,
        selectedSeason,
        seasons
    });
};