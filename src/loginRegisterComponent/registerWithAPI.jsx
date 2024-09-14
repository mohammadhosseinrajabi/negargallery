import React, { useEffect, useState } from "react";
import {  Form, Formik, isEmptyArray } from "formik";
import * as Yup from "yup";
import FormikControl from "./Formikcomponent/formikControl";
import axios from "axios";



const initialValues={
    phone:"",
    password:"",
    c_password:""
}



const onSubmit=(values,submitProps)=>{

console.log(values);
setTimeout(() => {
        submitProps.setSubmitting(false)
}, 5000);

axios.post('',values)
.then(res=>{
    console.log(res);
    localStorage.setItem("token",res.data.token)
})
// alert("sabte nam anjam shod")
  
}

const validationSchema=Yup.object({


    password:Yup.string().required("لطفا این فیلد پر شود").min(8,"حداقل 8 کاراکتر")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'حداقل یک حرف کوچک و یک حرف بزرگ و یک اعداد و کاراکتر های خاص استغاده کنید'),




    c_password:Yup.string()
    .oneOf([Yup.ref('password'),''],'با رمز عبور مطابقت ندارد')
    .required('لطفا این قسمت را پر کنید'),



   



      phone:Yup.number().required('لطفا این قسمت را پر کنید'),

})

const RegisterWithAPI =()=>{

  
    const [value,setvalue]=useState(5);
    const [isactive,setisactive]=useState(false)
    const decrem =()=>{
       setisactive(true);
    }
    useEffect(()=>{
        let interval;
        if(isactive && value > 0){
            interval = setInterval(() => {
                setvalue(prev=>Math.max(prev - 1 ,0))
            }, 1000);
        }else if(value === 0){
            setisactive(false)
        }
        return()=>{
            clearInterval(interval)
        }
    },[isactive,value])
 
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
                // console.log(formik);
                return(
                    <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src="auth/images/img-01.png" alt="IMG"/>
                    </div>
            
          
                    <Form className="login100-form validate-form">
                        <span className="login100-form-title">
                           فرم  ثبت نام
                        </span>
                      
                            <FormikControl
                    formik={formik}
                    control="input"
                    type="phone"
                    name="phone"
                    icon="fa fa-phone"
                    label="تلفن همراه"
                    />

                    <FormikControl
                    formik={formik}
                    control="input"
                    type="password"
                    name="password"
                    icon="fa fa-lock"
                    label="رمز عبور"
                    />

                    <FormikControl
                    formik={formik}
                    control="input"
                    type="password"
                    name="c_password"
                    icon="fa fa-lock"
                    label="تایید رمز عبور"
                    />

                  
                    
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn" onClick={decrem} disabled={formik.isSubmitting}>
                               
                                { 
                                
                                        formik.isSubmitting ?(
                                   
                                          <div>
                                               {value}
                                          </div>
                                          
                                         
                                         ) :  ("ورود")
                                }
                            </button> 
                        </div>
        
                                          
        
                        <div className="text-center p-t-136">
                            <a className="txt2" href="">
                           فرم ورود
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
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
export default RegisterWithAPI;
