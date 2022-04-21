import styled from "styled-components";
import { useState } from "react";
import SocialLinks from "../components/SocialLinks";

const Main = styled.main`
  margin-bottom: auto;
`;

const Container = styled.div`
  padding-block: 1.5rem 2rem;
  border-top: 1px solid rgba(var(--clr-rgb-dark), 0.15);
  border-bottom: 1px solid rgba(var(--clr-rgb-dark), 0.15);

  @media (min-width: 700px) {
    padding-block: 2rem;
  }

  @media (min-width: 1200px) {
    padding-block: 3rem;
    display: flex;

    & h1 {
      width: 42.793%;
    }

    & div {
      width: 57.207%;
    }
  }
`;

const P = styled.p`
  font-size: 0.9375rem;
  padding-block: 1.5rem;

  @media (min-width: 1200px) {
    font-size: 1rem;
    padding-block: 0 1.5rem;
  }
`;

const FormContainer = styled.div`
  padding-block: 2rem 5rem;

  & input,
  & textarea {
    border: none;
    background-color: rgba(var(--clr-rgb-dark), 0.1);
    font-family: inherit;
    font-size: 0.8125rem;
    line-height: 1.875rem;
    padding-inline: 1rem;
    width: 100%;
  }

  & input::placeholder,
  & textarea::placeholder {
    color: rgba(var(--clr-rgb-dark), 0.4);
  }

  & input:focus,
  & textarea:focus {
    outline: 1px solid var(--clr-highlight);
  }

  & .error {
    outline: 1px solid var(--clr-error);
  }

  & input {
    height: 3rem;
  }

  & textarea {
    display: block;
    padding-block: 0.5625rem;
  }

  @media (min-width: 1200px) {
    padding-block: 3rem 6.8125rem;
    display: flex;

    & h1 {
      width: 42.793%;
    }

    & div {
      width: 57.207%;
      margin-top: -1.5rem;
    }
  }
`;

const Button = styled.button`
  background-color: var(--clr-button);
  color: var(--clr-white);
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  height: 3rem;
  width: 12.5rem;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--clr-highlight);
  }
`;

const Label = styled.label`
  display: block;
  font-size: 0.8125rem;
  font-weight: 700;
  margin-block: 1.5rem 0.5rem;
`;

const Error = styled.p`
  line-height: 20.75px;
  position: absolute;
  font-size: 10px;
  font-style: italic;
  font-weight: 700;
  color: red;
`;

const Thanks = styled.p`
  margin-top: 2rem;
`;

const Contact = () => {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "This field is required";
    }
    if (!values.email) {
      errors.email = "This field is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please use a valid email address";
    }
    if (!values.message) {
      errors.message = "This field is required";
    }
    return errors;
  };

  return (
    <Main>
      <Container>
        <h1>Get in Touch</h1>
        <div>
          <P>
            I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that
            description. I’m a hard&#8209;working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.
          </P>
          <SocialLinks color="dark" />
        </div>
      </Container>
      <FormContainer>
        <h1>Contact Me</h1>
        <div>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <Thanks>Thanks for getting in touch!</Thanks>
          ) : (
            <form onSubmit={handleSubmit}>
              <Label htmlFor="name">Name</Label>
              <input type="text" name="name" id="name" placeholder="Insert your name here ..." value={formValues.name} onChange={handleChange} className={formErrors.name ? "error" : ""} aria-describedby="name-error" />
              <Error id="name-error" role="alert">
                {formErrors.name}
              </Error>
              <Label htmlFor="email">Email Address</Label>
              <input type="text" name="email" id="email" placeholder="email@example.com" value={formValues.email} onChange={handleChange} className={formErrors.email ? "error" : ""} aria-describedby="email-error" />
              <Error id="email-error" role="alert">
                {formErrors.email}
              </Error>
              <Label htmlFor="message">Message</Label>
              <textarea name="message" id="message" rows="4" placeholder="How can I help?" value={formValues.message} onChange={handleChange} className={formErrors.message ? "error" : ""} aria-describedby="message-error"></textarea>
              <Error id="message-error" role="alert">
                {formErrors.message}
              </Error>
              <Button type="submit">Send message</Button>
            </form>
          )}
        </div>
      </FormContainer>
    </Main>
  );
};

export default Contact;
