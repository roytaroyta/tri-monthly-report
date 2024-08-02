import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { FormItem } from '../../interface/MonthlyReport'; 

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

const validationSchema = Yup.object().shape({
	companyName: Yup.string().required('会社名は必須です'),
});

const FormikTest = ({ initialValues }: { initialValues: FormItem }) => (
	<div>
		<h1>Anywhere in your app!</h1>
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			validateOnChange={false}
			validateOnBlur={false}
			onSubmit={(values, { setSubmitting }) => {
				// 他のクラスで追加した項目のみを取得して処理
				console.log('Submit InitialValue:', initialValues);
				console.log('Submit Values:', values);
				setSubmitting(false);
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
							name="companyName"
							label="会社名"
							fullWidth
							error={touched.companyName && errors.companyName}
							helperText={touched.companyName && errors.companyName}
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