import React, { FC } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Box, TextField } from '@material-ui/core';
import { searchCity } from '../../mockData';
import { connect, ConnectedProps } from 'react-redux';
import { setCurrentCity } from 'store/actions/localUserOptions.actions';

const connector = connect(null, { setCurrentCity });

type PropsFromRedux = ConnectedProps<typeof connector>;

const AutocompleteSearch: FC<PropsFromRedux> = ({ setCurrentCity }: PropsFromRedux) => {
	return (
		<Box>
			<Autocomplete
				style={{ maxWidth: 400, margin: '0 auto', padding: '1rem' }}
				getOptionSelected={(option, value) => option.LocalizedName === value.LocalizedName}
				getOptionLabel={option => option.LocalizedName}
				options={searchCity}
				// onInput={e => loadSearchCity(e.target.value)}
				onChange={(event, newValue) => {
					if (newValue) {
						const city = {
							key: newValue.Key,
							name: newValue.LocalizedName,
							country: newValue.Country.LocalizedName,
						};
						// loadAllWeather(newValue.Key);
						setCurrentCity(city);
					}
				}}
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

export default connector(AutocompleteSearch);
