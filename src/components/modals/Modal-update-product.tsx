import {Modal} from './Modal';
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import {InputField} from '../forms-controls/InputField';
import {Field} from "../forms-controls/Field";
import {IModalUpdate} from "./modal-types";
import {useDispatch, useSelector} from "react-redux";
import {getAllCities, getAllCountries, getFilterCities} from "../../redux/delivery/selectors";

// @ts-ignore
import FormikErrorFocus from 'formik-error-focus';
import React, {ChangeEvent, useCallback, useState} from "react";
import {typeSortCity} from "../../redux/delivery/delivery-actions";

// По сути можно обернуть в useMemo( () => ojb, [])
// Или хранить за пределами Компонента - обсудить

const validateSchema = Yup.object().shape({
  name: Yup.string()
      .matches(/^\S/, 'Присутствует пробел вначале поля ввода')
      .max(15, 'Пароль не должен быть длинее 15 символов')
      .required('Обязательное поле'),
  email: Yup.string()
      .email('Не валидный E-mail')
      .required('Обязательное поле'),
  count: Yup.number().required('Обязательное поле'),
  price: Yup.number().required('Обязательное поле'),
});

export const ModalUpdateProduct = (props: IModalUpdate) => {
  const countries = useSelector(getAllCountries)
  // const cities = useSelector(getAllCities)
  const filterCities = useSelector(getFilterCities)
  const dispatch = useDispatch()

  const {isOpen, onCancel, submitUpdateProduct, id, name, count, price, title = 'Новый продукт'} = props;

  // const [deliveryView, setDeliveryView] = useState({
  //   notDelivery: true,
  //   cities: false,
  //   countries: false
  // })

  /// НЕ понятно почитать
  // const handleDelivery = (e: React.ChangeEvent<HTMLInputElement> ) => {
  //   const type = e.target.value as keyof boolean
  //   setDeliveryView( state => {
  //     for(let key in state) {
  //       state[key as keyof key] = false
  //     }
  //     return state
  //   })
    // setDeliveryView( (delivery) => ({
    //   ...delivery,
    //   [type]: !delivery[type]
    // }))
  // }

  const handleSortCities = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    dispatch(typeSortCity(e.currentTarget.value))
  }, [dispatch])

  return (
      <Modal onCancel={onCancel} isOpen={isOpen} title={name ?? title}>
        <Formik
            validationSchema={validateSchema}
            initialValues={{
              name: name ?? '',
              email: '',
              count: count ?? '',
              price: price ?? '',
              typeDelivery: '',
              cities: '',
              countries: []
            }}
            onSubmit={(values) => {
              const product = {
                id: id ?? Date.now(),
                name: values?.name,
                count: values?.count as number,
                price: values?.price,
              };
              submitUpdateProduct(product);
              onCancel();
            }}>

          {({handleSubmit}) => (
              <Form onSubmit={handleSubmit} noValidate>
                <InputField label="Name" name="name" type="text"/>
                <InputField label="Email" name="email" type="email"/>
                <InputField label="Count" name="count" type="number"/>
                <InputField label="Price" name="price" type="number"/>

                <div className="form-group">
                  <select name='typeDelivery' className='form-control'>
                    <option value="notDelivery"> - </option>
                    <option value="countries">Страна</option>
                    <option value="cities">Город</option>
                  </select>
                </div>

                <div className="form-group">
                  { Object.keys(countries)?.map((country, idx) => {
                      return (
                          <Field
                              key={countries[country]}
                              name='country'
                              type='radio'
                              id={country + (idx + 1)}
                              value={country}
                              label={countries[country]}
                              handleChange={handleSortCities} />
                      )
                    }) }
                </div>
                <div className="form-group">
                  <Field
                      id='all-cities'
                      name='city'
                      type='checkbox'
                      value='All'
                      label='All'
                      handleChange={() => {}} />
                  { filterCities.map( el => {
                      return (
                          <Field
                              key={el}
                              name='city'
                              type='checkbox'
                              id={el}
                              value={el}
                              label={el}
                              handleChange={() => {}} />
                      )
                    }) }
                </div>

                <FormikErrorFocus focusDelay={0} duration={0}/>

                <div className="form-group">
                  <button className="btn btn-success" type="submit">
                    Add/Update
                  </button>
                </div>
              </Form>
          )}
        </Formik>
      </Modal>
  );
};
