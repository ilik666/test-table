import {Modal} from './Modal';
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import {InputField} from '../forms-controls/InputField';
import {Field} from "../forms-controls/Field";
import {IModalUpdate} from "./modal-types";
import {useDispatch, useSelector} from "react-redux";
import {getAllCountries, getFilterCities} from "../../redux/delivery/selectors";

// @ts-ignore
import FormikErrorFocus from 'formik-error-focus';
import React, {useCallback, useState} from "react";
import {typeSortCity} from "../../redux/delivery/delivery-actions";
import {SelectField} from "../forms-controls/SelectField";

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
  const [deliveryView, setDeliveryView] = useState({
    notDelivery: true,
    cities: false,
    countries: false
  })

  const handleDelivery = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const typeDelivery = e.target.value as '-' | 'cities' | 'countries'

    setDeliveryView((state)  => {
      dispatch(typeSortCity('all'))
      switch (typeDelivery) {
        case '-':
          return Object.fromEntries(
                Object.entries(state)
                    .map(([key]) => [key, false]) ) as typeof state
        default:
          return {
            ...Object.fromEntries(
                Object.entries(state)
                    .map(([key]) => [key, false]) ) as typeof state,
            [typeDelivery]: true
          }
      }
    })
  }

  const handleSortCities = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryView( state => {
      return {
        ...state,
        ['cities']: true
      } as typeof state
    })
    dispatch(typeSortCity(e.target.value))
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

                <SelectField name='typeDelivery' options={['-', 'countries', 'cities']} handleValue={handleDelivery}/>

                <div className="form-group">
                  {deliveryView.countries && Object.keys(countries)?.map((country, idx) => {
                    return (<Field
                            key={countries[country]}
                            name='countries'
                            type='radio'
                            id={country + (idx + 1)}
                            value={country}
                            label={countries[country]}
                            handleChange={handleSortCities}/>
                    )
                  })}
                </div>

                { (deliveryView.cities || (deliveryView.countries && deliveryView.cities)) &&
                  <div className="form-group">
                    {filterCities.map(el => (<Field key={el} name='city' type='checkbox' id={el} value={el} label={el} handleChange={() => {}}/> )) }
                </div> }

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
