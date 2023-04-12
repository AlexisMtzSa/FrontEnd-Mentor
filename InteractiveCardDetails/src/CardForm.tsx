import React from 'react'
import { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';

 const CardForm: React.FC<{setCardHolderName:  Function, setCardNumber: Function, setCVC: Function, setExpirationMonth: Function, setExpirationYear: Function, setSentInfo: Function}> = ({setCardHolderName, setCardNumber, setCVC, setExpirationMonth, setExpirationYear, setSentInfo}) => {

  const initialValues = {
    cardHolderName: '',
    cardNumber: '',
    cvc: '',
    expirationMonth: '',
    expirationYear: ''
  }

  const addTaskSchema = Yup.object().shape({
    cardHolderName: Yup.string().required('Cardholder name is required').max(35, 'Name too long'),
    cardNumber: Yup.string().required('Card number is required').matches(/([0-9]{4}[\s-]?){3}([0-9]{4})/, "Must be only digits").max(20, 'Must be 16 digits').min(19,'Must be 16 digits'),
    cvc: Yup.string().required().matches(/^[0-9]{3}$/, "Must be only digits").min(3, 'Must be exactly 3 digits').max(3, 'Must be exactly 3 digits'),
    expirationMonth: Yup.number().required('Expiration month is required').positive("Expiration month must be positive").integer("Expiration month must be an integer").max(12, "Expiration month must be lesser than 12"),
    expirationYear: Yup.number().required('Expiration year is required').positive("Expiration year must be positive").integer("Expiration year must be an integer").min(new Date().getFullYear()-2000, "Expiration year must be at least the actual year")
  })


  return (
    <Formik
    initialValues={initialValues}
    validationSchema={addTaskSchema}
    onSubmit={()=> setSentInfo(true)}>

      {({values, 
        touched, 
        errors, 
        isSubmitting, 
        handleChange, 
        handleBlur})=>(
          <Form className='form'>
              <div className='field'>
                <span>CARDHOLDER NAME</span><br/>
                <Field id='cardHolderName' type='text' name='cardHolderName' placeholder='e.g. Jhon Smith'  onKeyUp={()=>setCardHolderName(values.cardHolderName)} maxLength="35"/>
                {
                  errors.cardHolderName && touched.cardHolderName &&
                  ( <ErrorMessage name='cardHolderName' component='div'></ErrorMessage>)
                }
              </div>
              
              <div className='field'>
                <span>CARD NUMBER</span><br/>
                <Field id='cardNumber' type='text' name='cardNumber' placeholder='e.g. 1234 5678 9123 0000'  maxLength="19" onKeyUp={()=>{
                  if((values.cardNumber).replaceAll(' ','').length%4==0 && values.cardNumber.length<19 && values.cardNumber.length>1)
                    values.cardNumber+=' '
                  setCardNumber(values.cardNumber)}}></Field>
                {
                  errors.cardNumber && touched.cardNumber &&
                  ( <ErrorMessage name='cardNumber' component='div'></ErrorMessage>)
                }
              </div>
              
              <div className='group'>
              
              <div className='expirationDate'>
                <span>EXP. DATE (MM/YY)</span><br/>
                <div className='expirationFields'>
                  <div className='field'>
                    <Field id='expirationMonth' type='month' name='expirationMonth' placeholder='MM'  maxLength="2" onKeyUp={()=>{
                      if(values.expirationMonth.length==1) 
                        setExpirationMonth("0"+values.expirationMonth)
                      else
                        setExpirationMonth(values.expirationMonth)
                    }}></Field>
                    {
                      errors.expirationMonth && touched.expirationMonth &&
                      ( <ErrorMessage name='expirationMonth' component='div'></ErrorMessage>)
                    }
                  </div>
                  <div className='field'>
                  <Field id='expirationYear' type='text' name='expirationYear' placeholder='YY'  maxLength='2' onKeyUp={()=>setExpirationYear(values.expirationYear)}></Field>
                  {
                    errors.expirationYear && touched.expirationYear &&
                    ( <ErrorMessage name='expirationYear' component='div'></ErrorMessage>)
                  }
                  </div>
                </div>
                
              </div>

              <div className='field'>
               <span>CVC</span><br/>
              <Field id='CVC' type='text' name='cvc' placeholder='e.g. 123'  maxLength="3" onKeyUp={()=> setCVC(values.cvc)}></Field>
                {
                  errors.cvc && touched.cvc &&
                  ( <ErrorMessage name='cvc' component='div'></ErrorMessage>)
                }
              </div>
              </div>
              
              <button type='submit' className='btn btn-success btn-lg ms-2'>Confirm</button>
      
          </Form>
        )}

    </Formik>
  )
}

export default CardForm