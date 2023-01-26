import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup"
import axios from 'axios';
import { Helmet } from 'react-helmet'
const AddSchema = Yup.object().shape({
    courseName: Yup.string().min(3, "Firstname must be min 3 character").required("Fill input"),
    price: Yup.string().max(30, "Too Long").required("Fill input"),
    courseSrc: Yup.string().required("Fill input"),
    courseInfo: Yup.string().max(30, "Too Long").required("Fill input"),
    avatarName: Yup.string().min(3, "Firstname must be min 3 character").required("Fill input"),
    avatarWork: Yup.string().min(3, "Firstname must be min 3 character").required("Fill input"),
    avatarSrc: Yup.string().min(3, "Firstname must be min 3 character").required("Fill input"),
})
function Add() {

    return (
        <div className='formm'>
            <Helmet>
                <meta name="description" content='React Application' />
                <title>Add Page</title>

            </Helmet>
            <Formik
                initialValues={{ courseName: '', courseInfo: '', avatarName: '', avatarWork: '', avatarSrc: '', price: 0, courseSrc: '' }}
                validationSchema={AddSchema}
                onSubmit={(values, { resetForm }) => {
                    axios.post('http://localhost:3000/datas', {
                        courseName: values.courseName,
                        price: values.price,
                        courseSrc: values.courseSrc,
                        courseInfo: values.courseInfo,
                        avatarName: values.avatarName,
                        avatarWork: values.avatarWork,
                        avatarSrc: values.avatarSrc
                    })
                    resetForm({ values: '' });
                }}
            >
                {({ errors, touched }) => (
                    <Form className='form'>
                        <Field placeholder='Course Name' type="text" name="courseName" />
                        {errors.courseName && touched.courseName ? <div style={{ color: "red", fontSize: 12, marginBottom: "30px" }}>{errors.courseName}</div> : null}

                        <Field placeholder='Price' type="number" name="price" />
                        {errors.price && touched.price ? <div style={{ color: "red", fontSize: 12, marginBottom: "30px" }}>{errors.price}</div> : null}

                        <Field placeholder='Course Src' type="text" name="courseSrc" />
                        {errors.courseSrc && touched.courseSrc ? <div style={{ color: "red", fontSize: 12, marginBottom: "30px" }}>{errors.courseSrc}</div> : null}

                        <Field placeholder='Avatar Name' type="text" name="avatarName" />
                        {errors.avatarName && touched.avatarName ? <div style={{ color: "red", fontSize: 12, marginBottom: "30px" }}>{errors.avatarName}</div> : null}

                        <Field placeholder='Course Info' type="text" name="courseInfo" />
                        {errors.courseInfo && touched.courseInfo ? <div style={{ color: "red", fontSize: 12, marginBottom: "30px" }}>{errors.courseInfo}</div> : null}

                        <Field placeholder='Avatar Work' type="text" name="avatarWork" />
                        {errors.avatarWork && touched.avatarWork ? <div style={{ color: "red", fontSize: 12, marginBottom: "30px" }}>{errors.avatarWork}</div> : null}

                        <Field placeholder='Avatar Src' type="text" name="avatarSrc" />
                        {errors.avatarSrc && touched.avatarSrc ? <div style={{ color: "red", fontSize: 12, marginBottom: "30px" }}>{errors.avatarSrc}</div> : null}

                        <button type="submit">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Add
