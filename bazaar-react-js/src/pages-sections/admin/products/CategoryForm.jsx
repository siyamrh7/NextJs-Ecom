import { Button, Card, Grid, MenuItem, TextField } from "@mui/material";
import DropZone from "components/DropZone";
import { Formik } from "formik";
import React from "react";

// ================================================================
const CategoryForm = (props) => {
  const { initialValues, validationSchema, handleFormSubmit,setFile } = props;
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
          <form onSubmit={handleSubmit}  encType="multipart/form-data">
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  color="info"
                  size="medium"
                  placeholder="Name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="subcategory"
                  label="Sub Category"
                  color="info"
                  size="medium"
                  placeholder="title"
                  value={values.subcategory}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.subcategory && !!errors.subcategory}
                  helperText={touched.subcategory && errors.subcategory}
                />
              </Grid>
              <Grid item xs={12}>
                <DropZone onChange={(files) => setFile(files)} />
              </Grid>


              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="info" type="submit">
                  Create Category
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default CategoryForm;
