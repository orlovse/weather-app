import { BASE_URL, CURRENT_CONDITIONS_URL, API_KEY, FIVE_DAYS_URL, AUTOCOMPLETE_SEARCH_URL } from './config';

export type CurrentWeatherResponse = {
	LocalObservationDateTime: string;
	EpochTime: number;
	WeatherText: string;
	WeatherIcon: number;
	HasPrecipitation: boolean;
	PrecipitationType: null;
	IsDayTime: boolean;
	Temperature: {
		Metric: {
			Value: number;
			Unit: string;
			UnitType: number;
		};
		Imperial: {
			Value: number;
			Unit: string;
			UnitType: number;
		};
	};
	MobileLink: string;
	Link: string;
}[];

export type FiveDaysResponse = {
	DailyForecasts: {
		Date: string;
		Temperature: {
			Minimum: {
				Value: number;
				Unit: string;
				UnitType: number;
			};
			Maximum: {
				Value: number;
				Unit: string;
				UnitType: number;
			};
		};
		Day: {
			Icon: number;
			IconPhrase: string;
			HasPrecipitation: boolean;
			PrecipitationType: string;
			PrecipitationIntensity: string;
		};
		Night: {
			Icon: number;
			IconPhrase: string;
			HasPrecipitation: boolean;
			PrecipitationType: string;
			PrecipitationIntensity: string;
		};
	}[];
};

export type SearchCityResponse = {
	Key: string;
	LocalizedName: string;
	Country: {
		ID: string;
		LocalizedName: string;
	};
	AdministrativeArea: {
		ID: string;
		LocalizedName: string;
	};
}[];

export const callApiCurrentWeather = (key: string): Promise<CurrentWeatherResponse> | CurrentWeatherResponse =>
	fetch(`${BASE_URL}${CURRENT_CONDITIONS_URL}/${key}?apikey=${API_KEY}`).then(res => res.json());

export const callApiFiveDaysWeather = (key: string): Promise<FiveDaysResponse> | FiveDaysResponse =>
	fetch(`${BASE_URL}${FIVE_DAYS_URL}/${key}?apikey=${API_KEY}&metric=true`).then(res => res.json());

export const callApiSearchCity = (city: string): Promise<SearchCityResponse> | SearchCityResponse =>
	fetch(`${BASE_URL}${AUTOCOMPLETE_SEARCH_URL}?apikey=${API_KEY}&q=${city}`).then(res => res.json());
