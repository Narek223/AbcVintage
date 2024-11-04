import * as Yup from "yup";
import { useTranslation } from "react-i18next";

export const useValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    name: Yup.string()
      .required(t("ContactUs.form.errors.username"))
      .min(4, t("ContactUs.form.errors.minimum")),
      
    email: Yup.string()
      .required(t("ContactUs.form.errors.mail"))
      .email(t("ContactUs.form.errors.incorect"))
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, t("ContactUs.form.errors.incorect")),
      
    phoneNumber: Yup.string()
      .required(t("ContactUs.form.errors.phone"))
      .matches(/^[0-9+()-]*$/, t("ContactUs.form.errors.contein"))
      .min(7, t("ContactUs.form.errors.toshort"))
      .max(15, t("ContactUs.form.errors.tolong")),
      
    message: Yup.string()
      .min(5, t("ContactUs.form.errors.short")),
  });
};
