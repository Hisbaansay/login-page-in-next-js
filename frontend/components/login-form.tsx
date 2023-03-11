import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from './LoginForm.module.css';

interface Values {
  username: string;
  password: string;
}

export default function LoginForm() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}

          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}

        >
          <Form  className='form-input'>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
              <Field className="form-input" id="username" name="username" type="text" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <Field className="form-input" id="password" name="password" type="password" />
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
