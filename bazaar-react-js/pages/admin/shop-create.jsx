import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import DropZone from "components/DropZone";
import { FlexBox } from "components/flex-box";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { H3, Paragraph } from "components/Typography";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {ShopRegAction} from '../../src/redux/actions/AuthActions'
const initialValues = {
  shopName: "",
  shopPhone: "",
  shopAddress: "",
  category: "fashion",
  description:
    "",
  password: "",

};
const validationSchema = Yup.object().shape({
  shopName: Yup.string().required("Shop Name is required!"),
  shopPhone: Yup.string().required("Shop Phone is required!"),
  category: Yup.string().required("Category is required!"),
  description: Yup.string().required("Description is required!"),
  shopAddress: Yup.string().required("Shop Address is required!"),
  password: Yup.string().required("Shop Password is required!"),

}); // =============================================================================

ShopSettings.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

export default function ShopSettings() {

const dispatch=useDispatch()

  const handleFormSubmit = async (values) => {
    dispatch(ShopRegAction(values))
    // const data = await axios.post(process.env.NEXT_PUBLIC_URI + '/api/createshop', values)
    // console.log(data)
  };

  return (
    <Box py={4} maxWidth={740} margin="auto">
      <H3 mb={2}>Shop Create</H3>

      <Card
        sx={{
          p: 3,
        }}
      >
        <Paragraph fontWeight={700} mb={4}>
          Basic Settings
        </Paragraph>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Stack spacing={3} mb={3}>
                <TextField
                  color="info"
                  size="medium"
                  name="shopName"
                  label="Shop Name *"
                  onBlur={handleBlur}
                  value={values.shopName}
                  onChange={handleChange}
                  helperText={touched.shopName && errors.shopName}
                  error={Boolean(errors.shopName && touched.shopName)}
                />

                <TextField
                  color="info"
                  size="medium"
                  name="shopPhone"
                  label="Shop Phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shopPhone}
                  helperText={touched.shopPhone && errors.shopPhone}
                  error={Boolean(errors.shopPhone && touched.shopPhone)}
                />

                <TextField
                  select
                  fullWidth
                  color="info"
                  size="medium"
                  name="category"
                  onBlur={handleBlur}
                  placeholder="Category"
                  label="Select Category"
                  onChange={handleChange}
                  value={values.category}
                  helperText={touched.category && errors.category}
                  error={Boolean(errors.category && touched.category)}
                >
                  <MenuItem value="electronics">Electronics</MenuItem>
                  <MenuItem value="fashion">Fashion</MenuItem>
                </TextField>

                <TextField
                  rows={6}
                  multiline
                  fullWidth
                  color="info"
                  size="medium"
                  name="description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  label="Description (optional)"
                  helperText={touched.description && errors.description}
                  error={Boolean(errors.description && touched.description)}
                />

                <TextField
                  color="info"
                  size="medium"
                  name="shopAddress"
                  label="Shop Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shopAddress}
                  helperText={touched.shopAddress && errors.shopAddress}
                  error={Boolean(errors.shopAddress && touched.shopAddress)}
                />
                <TextField
                  color="info"
                  size="medium"
                  name="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  helperText={touched.password && errors.password}
                  error={Boolean(errors.password && touched.password)}
                />


              </Stack>

              <Button type="submit" color="info" variant="contained">
                Create Shop
              </Button>
            </form>
          )}
        </Formik>

        <Divider
          sx={{
            my: 4,
          }}
        />





      </Card>
    </Box>
  );
}
