import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';

import {
	TextField,
	Select,
	MenuItem,
	Button,
	Grid,
	Typography,
	FormControl,
	InputLabel,
	FormHelperText
} from '@mui/material';

interface initial {
	companyName: string,
};

const validationSchema = Yup.object().shape({
	companyName: Yup.string().required('会社名は必須です'),
});

const FormikTest = ({ data }: { data: initial }) => (
	<div>
		<h1>Anywhere in your app!</h1>
		<Formik
			initialValues={{ data }}
			// validate={values => {
			// }}
			validationSchema={validationSchema}
			validateOnChange={false}
			validateOnBlur={false}
			onSubmit={(values, { setSubmitting }) => {
				console.log('submittest');
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => (
				<form onSubmit={handleSubmit}>

					<Grid item xs={12}>
						<Field
							as={TextField}
							name="data.companyName"
							label="会社名"
							fullWidth
							error={touched.data?.companyName && errors.data?.companyName}
							helperText={touched.data?.companyName && errors.data?.companyName}
							//helperText="iiiiii"
						/>
					</Grid>
					<Grid item xs={12}>
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Grid>
				</form>
			)}
		</Formik>
	</div>
);

export default FormikTest;