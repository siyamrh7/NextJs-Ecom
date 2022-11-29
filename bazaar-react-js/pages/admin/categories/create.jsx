import { Box } from "@mui/material";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { H3 } from "components/Typography";
import CategoryForm from "pages-sections/admin/products/CategoryForm";
import React from "react";
import * as yup from "yup";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { AddCategoryAction } from 'redux/actions/CategoryAction'
const CreateCategory = () => {
    const initialValues = {
        name: "",
        subcategory: "",

    };
    const [file, setFile] = useState(null)
    const { stoken } = useSelector(state => state.Authentication)
    const dispatch = useDispatch()
    const handleFormSubmit = (values) => {
        let formData = new FormData();
        formData.append('name', values.name);
        formData.append('subcategory', values.subcategory);
        formData.append('image', file[0]);
        dispatch(AddCategoryAction(formData, stoken))
    };

    return (
        <Box py={4}>
            <H3 mb={2}>Add New Product</H3>

            <CategoryForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                handleFormSubmit={handleFormSubmit}
                setFile={setFile}
            />
        </Box>
    );
}; // =============================================================================

CreateCategory.getLayout = function getLayout(page) {
    return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

const validationSchema = yup.object().shape({
    name: yup.string().required("required"),
    subcategory: yup.string().required("required"),

});
export default CreateCategory;
