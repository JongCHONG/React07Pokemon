import { useFormik } from 'formik'
import * as Yup from 'yup'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      console.log(values)
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .min(5, "Email trop court")
        .email("Email invalid")
        .required("Email est requis"),
      password: Yup.string()
        .min(6, "Password trop court")
        .required("Password est requis")
    }),
    validateOnChange: false
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="email"
        type='email'
        placeholder='Enter your email'
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email && <p>{formik.errors.email}</p>}
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      {formik.errors.password && <p>{formik.errors.password}</p>}
      <button type="submit">Submit</button>
    </form>
  )
  
}

export default Login