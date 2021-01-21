import React, { FC } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Box, TextField } from '@material-ui/core';
import { searchCity } from '../../mockData';

const AutocompleteSearch: FC = () => {
	return (
		<Box className="box-padding">
			<Autocomplete
				style={{ maxWidth: 400, margin: '0 auto' }}
				getOptionSelected={(option, value) => option.LocalizedName === value.LocalizedName}
				getOptionLabel={option => option.LocalizedName}
				options={searchCity}
				// onInput={e => loadSearchCity(e.target.value)}
				// onChange={(event, newValue) => {
				// 	if (newValue) {
				// 		const city = {
				// 			key: newValue.Key,
				// 			name: newValue.LocalizedName,
				// 			country: get(newValue, 'Country.LocalizedName', null),
				// 		};
				// 		loadAllWeather(newValue.Key);
				// 		setCurrentCity(city);
				// 	}
				// }}
				renderInput={params => (
					<TextField
						{...params}
						placeholder="search"
						variant="outlined"
						InputProps={{
							...params.InputProps,
							endAdornment: <>{params.InputProps.endAdornment}</>,
						}}
					/>
				)}
			/>
		</Box>
	);
};

export default AutocompleteSearch;
