import { FastField, Form, Formik, isEmptyArray } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import FormikControl from "./Formikcomponent/formikControl";
import './loginRegister.css';
import { Link } from "react-router-dom";


const initialValues={
    email:"",
    password:""
}
const onSubmit=(values)=>{
console.log(values);
}   
const validationSchema=Yup.object({

    email:Yup.string().required("لطفا این فیلد پر شود").email("لطفا قالب نوشتاری را رعایت کنید مثال: aaa@eXample.bbb"),
    password:Yup.string().required("لطفا این فیلد پر شود").min(8,"حداقل 8 کاراکتر")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'حداقل یک حرف کوچک و یک حرف بزرگ و یک اعداد و کاراکتر های خاص استغاده کنید')

})


const Login =()=>{
    useEffect(()=>{

        document.title = "ورود  | گالری نگار ";
      },[])
return(
    	
	<div className="limiter">
    <div className="container-login100">
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >    
         {
            formik=>{
                console.log(formik);
                return(
                    <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src="/assets/images/logo.png" alt="IMG"/>
                    </div>
        
                    <Form className="login100-form validate-form">
                        <span className="login100-form-title">
                           فرم  ورود
                        </span>
        
                     <FormikControl
                     formik={formik}
                     control="input"
                     type="email"
                     name="email"
                     icon="fa fa-envelope"
                     label="ایمیل"
                     />


                    <FormikControl
                    formik={formik}
                    control="input"
                    type="password"
                    name="password"
                    icon="fa fa-lock"
                    label="رمز عبور"
                    />
                        {/* <div className={`wrap-input100 validate-input ${formik.errors.password && formik.touched.password ? 'alert-validate' : null}`} data-validate ={formik.errors.password}>
                            <FastField className="input100" type="password" name="password" placeholder="رمز عبور"/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div> */}
                        
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                ورود
                            </button>
                        </div>
        
                        <div className="text-center p-t-12">
                            
                            <br />
                            <a className="txt2" href="#">
                            فراموشی رمز
                            </a>
                        </div>
        
                        <div className="text-center p-t-136">
                            <Link className="txt2" to={"/register"}>
                            ساخت اکانت
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </Form>
                    </div>
                )
            }
         }    
        </Formik>
    </div>
</div>
)
}
export default Login;