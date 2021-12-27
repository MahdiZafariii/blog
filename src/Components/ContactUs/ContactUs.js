import Input from "../../common/Input";
import { useState } from "react";
import { Field, useFormik, useFormikContext, FormikProvider } from "formik";
import * as yup from "yup";
import "./contactUs.css";
const ContactUs = () => {
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: yup
      .string()
      .required("phone Number is required")
      .matches(/^[0-9]{10}$/, "Invalid phone number ")
      .nullable(),
    description: yup.string().required("description is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
    },
    validationSchema,
    validateOnMount: true,
  });
  return (
    <FormikProvider value={formik}>
      <main>
        <section className="contactUs">
          <form onSubmit={formik.handleSubmit}>
            <Input name="name" label="Name" formik={formik} />
            <Input name="email" label="Email" formik={formik} type="email" />
            <Input
              name="phoneNumber"
              label="Phone Number"
              formik={formik}
              type="number"
            />
            <div className="formControl">
              <label>Description</label>

              <Field as={textarea} name="description" />
              {formik.errors.description && formik.touched.description && (
                <div className="error">{formik.errors.description}</div>
              )}
            </div>
            <button
              type="submit"
              disabled={!formik.isValid}
              className="submitBtn"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </FormikProvider>
  );
};

export default ContactUs;

const textarea = (props) => (
  <textarea
    maxLength="300"
    rows="4"
    cols="50"
    className="textarea"
    {...props}
  />
);
