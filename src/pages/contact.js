import React from "react";
import PageHeader from "../components/PageHeader/page-header";
import CompanyInfo from "../components/Contact/CompanyInfo/companyInfo";
import Form from "../components/Contact/Form/form";

function Contact() {
  return (
    <main>
      <PageHeader title="Contact" subtitle="A taste of our best work" />
      <Form />
      <CompanyInfo />
    </main>
  );
}

export default Contact;
