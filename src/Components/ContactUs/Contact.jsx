import React from "react";
import styles from "./contact.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useValidationSchema } from "../../Functions/FormValidation/validation";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function Contact() {
  const validationSchema = useValidationSchema();
  const { t } = useTranslation();
  


  const initialValues = {
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  };

  return (
    <div className={styles.contactconteiner}>
      <div className={styles.title}>
        <h1>{t("ContactUs.title")}</h1>
      </div>

      <div className={styles.contactus}>
        <div className={styles.formconteiner}>
          <div className={styles.contactustitle}>
            <h1 lang={i18n.language}>{t("ContactUs.formtext")}</h1>
          </div>

          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            validateOnChange={false}
            validateOnBlur={true}
          >
            {({ isValid,touched, errors  }) => (
              <Form className={styles.formikConteiner}>
                <div className={styles.form}>
                  <Field
                    type="text"
                    name="name"
                    placeholder={t("ContactUs.form.name")}
                    className={` ${touched.name && errors.name ? styles.inputError : ''}`}
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className={styles.error}
                  />

                  <Field
                    type="tel"
                    name="phoneNumber"
                    placeholder={t("ContactUs.form.phone")}
                    className={` ${touched.phoneNumber && errors.phoneNumber ? styles.inputError : ''}`}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="p"
                    className={styles.error}
                  />

                  <Field
                    type="email"
                    name="email"
                    placeholder={t("ContactUs.form.email")}
                    className={` ${touched.email && errors.email ? styles.inputError : ''}`}
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className={styles.error}
                  />

                  <Field
                    as="textarea"
                    name="message"
                    placeholder={t("ContactUs.form.message")}
          
                    className={`${styles.texarea} ${touched.name && errors.name ? styles.inputError : ''}`}
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className={styles.error}
                  />
                </div>
                <button type="submit" disabled={!isValid}>
                  {t("ContactUs.form.submit")}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <div className={styles.mapconteiner}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24304.78723255031!2d44.4783422703346!3d40.17918646776415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcf9d731a3fb%3A0x76b03181b05d1069!2z0JXQstGA0L7QtNC40LzQvdC40YbQsCDQndC-0LLQsA!5e0!3m2!1sru!2sru!4v1694063873494&disableDefaultUI=true"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
