import React from 'react'
import Input from './input';
import Radio from './radioButton';
import Date from './date';
import File from './file';

 const FormikControl=(props)=> {

        switch (props.control) {
            case 'input':
                return <Input {...props}/>
              
            case 'radio':
            return <Radio {...props}/>

            case 'date':
                return <Date {...props}/>
            case 'file':
                return <File {...props}/>
           
            default:
                break;
        }
  
}
export default FormikControl;