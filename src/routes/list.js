import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();
    let filteredRoutes = await getAllRoutes();
    const seasons = await getListOfSeasons();

    const selectedRegion = req.query.region || 'all';
    const selectedSeason = req.query.season || 'all'; 

    if (selectedRegion && selectedRegion != 'all') {
        filteredRoutes = filteredRoutes.filter(route => route.region.toLowerCase() === selectedRegion.toLowerCase());
    }
    if (selectedSeason && selectedSeason != 'all') {
        filteredRoutes = filteredRoutes.filter(route => route.bestSeason.toLowerCase() == selectedSeason.toLowerCase());
    }

    console.log('Region:', req.query.region);
    console.log('Season:', req.query.season);

    res.render('routes/list', { 
        title: 'Scenic Train Routes',
        regions,
        routes: filteredRoutes,
        selectedRegion,
        selectedSeason,
        seasons
    });
};