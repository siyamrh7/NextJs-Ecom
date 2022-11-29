import { Button, Card, Grid, MenuItem, TextField } from "@mui/material";
import DropZone from "components/DropZone";
import { Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { useFormikContext } from "formik";
import { useEffect } from "react";
import { useState } from "react";
// ================================================================
const ProductForm = (props) => {
  const { initialValues, validationSchema, handleFormSubmit,setFiles } = props;
  const {categories}=useSelector(state=>state.Category)
  const [subcategory,setSubcategory]=useState([])
  const handleChanges=(e)=>{
    let y = e.target.innerText; 
    const sub=categories.find(c=>c.name===y)
setSubcategory(sub.subcategory)    
  }

  return (
    <Card
      sx={{
        p: 6,
      }}
    >
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
          <form onSubmit={handleSubmit} >
            <Grid container spacing={3}>
              <Grid item  xs={12}>
                <TextField
                  fullWidth
                  name="title"
                  label="Title"
                  color="info"
                  size="medium"
                  placeholder="Title"
                  value={values.title}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.title && !!errors.title}
                  helperText={touched.title && errors.title}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  select
                  fullWidth
                  color="info"
                  size="medium"
                  name="category"
                  onBlur={handleBlur}
                  placeholder="Category"
                  onChange={handleChange}
                  value={values.category}
                  label="Select Category"
                  error={!!touched.category && !!errors.category}
                  helperText={touched.category && errors.category}
                >
                  {
                    categories.map((cat)=>(
                      <MenuItem key={cat._id} value={cat._id} onClick={handleChanges}>{cat.name}</MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  select
                  fullWidth
                  color="info"
                  size="medium"
                  name="subcategory"
                  onBlur={handleBlur}
                  placeholder="Sub Category"
                  onChange={handleChange}
                  value={values.subcategory}
                  label="Select Sub Category"
                  error={!!touched.subcategory && !!errors.subcategory}
                  helperText={touched.subcategory && errors.subcategory}
                >
                  {
                    subcategory.map((cat,i)=>(
                      <MenuItem key={i} value={cat.name}>{cat.name}</MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="brand"
                  label="Brand"
                  color="info"
                  size="medium"
                  placeholder="Brand"
                  value={values.brand}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.brand && !!errors.brand}
                  helperText={touched.brand && errors.brand}
                />
              </Grid> <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="size"
                  label="Size"
                  color="info"
                  size="medium"
                  placeholder="Large"
                  value={values.size}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.size && !!errors.size}
                  helperText={touched.size && errors.size}
                />
              </Grid>
              <Grid item xs={12}>
                <DropZone onChange={(files) => setFiles(files)} />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  rows={6}
                  multiline
                  fullWidth
                  color="info"
                  size="medium"
                  name="description"
                  label="Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Description"
                  value={values.description}
                  error={!!touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  rows={6}
                  multiline
                  fullWidth
                  color="info"
                  size="medium"
                  name="tdetails"
                  label="Technical Details"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Technical Details"
                  value={values.tdetails}
                  error={!!touched.tdetails && !!errors.tdetails}
                  helperText={touched.tdetails && errors.tdetails}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  rows={6}
                  multiline
                  fullWidth
                  color="info"
                  size="medium"
                  name="ntdetails"
                  label="Non Technical Details"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Technical Details"
                  value={values.ntdetails}
                  error={!!touched.ntdetails && !!errors.ntdetails}
                  helperText={touched.ntdetails && errors.ntdetails}
                />
              </Grid>
           
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="price"
                  color="info"
                  size="medium"
                  type="number"
                  onBlur={handleBlur}
                  value={values.price}
                  label="Regular Price"
                  onChange={handleChange}
                  placeholder="Regular Price"
                  error={!!touched.price && !!errors.price}
                  helperText={touched.price && errors.price}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  color="info"
                  size="medium"
                  type="number"
                  name="discount"
                  label="Sale Price"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Sale Price"
                  value={values.discount}
                  error={!!touched.discount && !!errors.discount}
                  helperText={touched.discount && errors.discount}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="info" type="submit">
                  Create product
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default ProductForm;
