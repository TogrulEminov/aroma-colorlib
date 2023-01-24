import * as yup from 'yup';

export const  addFormValidation = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required().positive("price should be positive").integer().min(0, "minimum price is zero"),
    url: yup.string().url().required(),
    markName: yup.string().required().min(3, "minimum mark Name is 3"),
});