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
		ROOT: '/',
		HOME: '/home',
		COUNTRY: '/country',
		COUNTRY_INFO: '/country/:countryName'
	},
	ENDPOINTS: {
		FULL_DATA: 'https://covid.ourworldindata.org/data/full_data.csv',
		MAP_DATA: `${process.env.PUBLIC_URL}/countries.geojson`
	}
};
