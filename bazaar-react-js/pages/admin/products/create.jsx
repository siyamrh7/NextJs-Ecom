import { Box } from "@mui/material";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { H3 } from "components/Typography";
import { ProductForm } from "pages-sections/admin";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { AddProductAction } from 'redux/actions/ProductAction'

const CreateProduct = () => {
  const initialValues = {
    title: "",
    description: "",
    price: "",
    discount: "",
    ntdetails: "",
    tdetails: "",
    category: "",
    size:"",
    brand:"",
    subcategory:""
  };
  const {stoken}=useSelector(state=>state.Authentication)
const [files,setFiles]=useState(null)
const dispatch =useDispatch()

  const handleFormSubmit = (values) => {
  let formData=new FormData()
    formData.append('title',values.title)
    formData.append('description',values.description)
    formData.append('price',values.price)
    formData.append('discount',values.discount)
    formData.append('ntdetails',values.ntdetails)
    formData.append('tdetails',values.tdetails)
    formData.append('category',values.category)
    formData.append('size',values.size)
    formData.append('brand',values.brand)
    formData.append('subcategory',values.subcategory)

    files.map((f)=>(
      formData.append('images',f)
    ))
    dispatch(AddProductAction(formData,stoken))
  };
 
  return (
    <Box py={4}>
      <H3 mb={2}>Add New Product</H3>

      <ProductForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        handleFormSubmit={handleFormSubmit}
        setFiles={setFiles}

      />
    </Box>
  );
}; // =============================================================================

CreateProduct.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

const validationSchema = yup.object().shape({
  title: yup.string().required("required"),
  category: yup.string().required("required"),
  description: yup.string().required("required"),
  price: yup.number().required("required"),
  discount: yup.number().required("required"),
});
export default CreateProduct;
