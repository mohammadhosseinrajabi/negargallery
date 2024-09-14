// import React, { useEffect } from "react";
// import {  Form, Formik, isEmptyArray } from "formik";
// import * as Yup from "yup";
// import FormikControl from "./Formikcomponent/formikControl";
// import { Link } from "react-router-dom";

// import './loginRegister.css';
// const initialValues={
//     user_name:"",
//     first_name:"",
//     last_name:"",
//     email:"",
//     mobile:"",
//     password:"",
//     confirm_password:"",
//     auth_mode:"mobile",
//     date:"",
//     image:null

// }
// const onSubmit=(values)=>{
// console.log(values);
// alert("sabte nam anjam shod")
// }
// const validationSchema=Yup.object({
//     //when باگ
//     // email:Yup.string().when('auth_mode',{
//     //     is:"email",
//     //     then:Yup.string().required("لطفا این فیلد پر شود").email("لطفا قالب نوشتاری را رعایت کنید مثال: aaa@eXample.bbb"),
       
//     // }),
//     email:Yup.string().required("لطفا این فیلد پر شود").email("لطفا قالب نوشتاری را رعایت کنید مثال: aaa@eXample.bbb"),
//     password:Yup.string().required("لطفا این فیلد پر شود").min(8,"حداقل 8 کاراکتر")
//     .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'حداقل یک حرف کوچک و یک حرف بزرگ و یک اعداد و کاراکتر های خاص استغاده کنید'),

//     confirm_password:Yup.string()
//     .oneOf([Yup.ref('password'),''],'با رمز عبور مطابقت ندارد')
//     .required('لطفا این قسمت را پر کنید'),

//     user_name:Yup.string().required('لطفا این قسمت را پر کنید').matches(/^[0-9a-zA-Z]+$/),

//     first_name:Yup.string().required('لطفا این قسمت را پر کنید'),

//     last_name:Yup.string().required('لطفا این قسمت را پر کنید'),
//   //when باگ
//     // mobile:Yup.number().when('auth_mode',{
//     //     is:"mobile",
//     //     then:Yup.number().required('لطفا این قسمت را پر کنید'),
        
//     // })
//     mobile:Yup.number().required('لطفا این قسمت را پر کنید'),

//     image:Yup.mixed().required('لطفا این قسمت را پر کنید').test('filesize',"حجم فایل نمیتواند بیشتر از 500 کیلوبایت باشد",
//         value=>value && value.size <= (500*1024) )
//         .test("format","فرمت فایل باید jpegباشد", value => value && value.type === "image/jpeg")
   

// })

// const authModeValues =[
//     {id:"mobile",value:"موبایل"},
//     {id:"email",value:"ایمیل"}
// ]

// const Register =()=>{
//     useEffect(()=>{

//         document.title = "ثبت نام  | گالری نگار ";
//       },[])
// return(
    	
// 	<div className="limiter">
//     <div className="container-login100">
//         <Formik
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         validationSchema={validationSchema}
//         >    
//          {
            
//             formik=>{
//                 console.log(formik);
//                 return(
//                     <div className="wrap-login100">
//                     <div className="login100-pic js-tilt" data-tilt>
//                         <img src="/assets/images/logo.png" alt="IMG"/>
//                     </div>
        
//                     <Form className="login100-form validate-form">
//                         <span className="login100-form-title">
//                            فرم  ثبت نام
//                         </span>
//                         <FormikControl
//                      formik={formik}
//                      control="input"
//                      type="text"
//                      name="user_name"
//                      icon="fa fa-user"
//                      label="نام کاربری"
//                      />
//                        <FormikControl
//                      formik={formik}
//                      control="input"
//                      type="text"
//                      name="first_name"
//                      icon="fa fa-user"
//                      label="نام"
//                      />
                     
//                       <FormikControl
//                      formik={formik}
//                      control="input"
//                      type="text"
//                      name="first_name"
//                      icon="fa fa-user"
//                      label=" نام خانوادگی"
//                      />

//                     <FormikControl
//                      formik={formik}
//                      control="radio"
                     
//                      name="auth_mode"
                     
//                      label="نوع اعتبار سنجی"
//                      options={authModeValues}
//                      />
//                         {
//                             formik.values.auth_mode=="mobile"?(
//                                 <FormikControl
//                                 formik={formik}
//                                 control="input"
//                                 type="number"
//                                 name="mobile"
//                                 icon="fa fa-phone"
//                                 label="موبایل"
//                                 />
//                             ):(
//                                 <FormikControl
//                                 formik={formik}
//                                 control="input"
//                                 type="email"
//                                 name="email"
//                                 icon="fa fa-envelope"
//                                 label="ایمیل"
//                                 />
//                             )

//                         }
                  
                     
                  


//                     <FormikControl
//                     formik={formik}
//                     control="input"
//                     type="password"
//                     name="password"
//                     icon="fa fa-lock"
//                     label="رمز عبور"
//                     />

//                     <FormikControl
//                     formik={formik}
//                     control="input"
//                     type="password"
//                     name="confirm_password"
//                     icon="fa fa-lock"
//                     label="تایید رمز عبور"
//                     />
//                     <FormikControl
//                     formik={formik}
//                     control="date"
//                     type="date"
//                     name="date"
//                     icon="fa fa-calender"
//                     label="تاریخ تولد"
//                     />

//                     <FormikControl
//                     formik={formik}
//                     control="file"
                    
//                     name="image"
//                     icon="fa fa-file"
//                     label="تصویر کاربر"
//                     />
//                         {/* <div className={`wrap-input100 validate-input ${formik.errors.password && formik.touched.password ? 'alert-validate' : null}`} data-validate ={formik.errors.password}>
//                             <FastField className="input100" type="password" name="password" placeholder="رمز عبور"/>
//                             <span className="focus-input100"></span>
//                             <span className="symbol-input100">
//                                 <i className="fa fa-lock" aria-hidden="true"></i>
//                             </span>
//                         </div> */}
                   
                    
//                         <div className="container-login100-form-btn">
//                             <button className="login100-form-btn">
//                                 ثبت نام
//                             </button>
//                         </div>
        
                    
        
//                         <div className="text-center p-t-136">
//                             <Link className="txt2" to={"/login"}>
//                            فرم ورود
//                                 <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
//                             </Link>
//                         </div>
//                     </Form>
//                     </div>
//                 )
//             }
//          }    
//         </Formik>
//     </div>
// </div>
// )
// }
// export default Register;









// // end 























