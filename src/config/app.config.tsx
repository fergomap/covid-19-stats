interface AppConfig {
	ROUTES: {
		ROOT: string;
		HOME: string;
		COUNTRY: string;
		COUNTRY_INFO: string;
	};
	ENDPOINTS: {
		FULL_DATA: string;
		MAP_DATA: string;
	}
}

export const APP_CONSTANTS: AppConfig = {
	ROUTES: {
		ROOT: `${process.env.PUBLIC_URL}/`,
		HOME: `${process.env.PUBLIC_URL}/home`,
		COUNTRY: `${process.env.PUBLIC_URL}/country`,
		COUNTRY_INFO: `${process.env.PUBLIC_URL}/country/:countryName`
	},
	ENDPOINTS: {
		FULL_DATA: 'https://covid.ourworldindata.org/data/ecdc/full_data.csv',
		MAP_DATA: `${process.env.PUBLIC_URL}/countries.geojson`
	}
};
