import {Modal} from './Modal';
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
// @ts-ignore
import FormikErrorFocus from 'formik-error-focus';
import {InputField} from '../forms-controls/InputField';
import { IModalUpdate} from "./modal-types";
import {IProduct} from "../../redux/products/types";

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
    const {
        isOpen,
        onCancel,
        submitUpdateProduct,
        id,
        name,
        count,
        price,
    } = props;

    return (
        <Modal onCancel={onCancel} isOpen={isOpen}>
            <Formik
                validationSchema={validateSchema}
                initialValues={{
                    name: name ?? '',
                    email: '',
                    count: count ?? '',
                    price: price ?? '',
                }}
                onSubmit={(values) => {
                    const product: IProduct = {
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
