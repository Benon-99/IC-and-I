import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";

// Define form data type
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: Yup.string()
      .min(5, "Subject must be at least 5 characters")
      .required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  // Form submission handler
  const onSubmit = async (data: FormData) => {
    try {
      // Send data to backend
      await axios.post("http://localhost:3001/api/send-email", data);
      // alert("Email sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send the email. Please try again.");
    }
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>Contact Us</Title>
        <Description>
          We would love to hear from you! Fill out the form below.
        </Description>

        <InputWrapper>
          <Input
            type="text"
            placeholder="Your Name"
            {...register("name")}
            isError={!!errors.name}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </InputWrapper>

        <InputWrapper>
          <Input
            type="email"
            placeholder="Your Email"
            {...register("email")}
            isError={!!errors.email}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            placeholder="Subject"
            {...register("subject")}
            isError={!!errors.subject}
          />
          {errors.subject && <Error>{errors.subject.message}</Error>}
        </InputWrapper>

        <InputWrapper>
          <Textarea
            placeholder="Your Message"
            {...register("message")}
            isError={!!errors.message}
          />
          {errors.message && <Error>{errors.message.message}</Error>}
        </InputWrapper>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </FormWrapper>
    </Container>
  );
};

export default ContactForm;

// Styled-components for design (same as before)
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: transparent;
  padding: 2rem;
`;

const FormWrapper = styled.form`
  background: #ffffff;
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333333;
  text-align: center;
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin-bottom: 2rem;
  color: #666666;
  text-align: center;
`;

const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input<{ isError?: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ isError }) => (isError ? "#ff4d4f" : "#cccccc")};
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  background: ${({ isError }) => (isError ? "#ffeef0" : "#ffffff")};

  &:focus {
    border-color: ${({ isError }) => (isError ? "#ff4d4f" : "#9c3aaf")};
  }
`;

const Textarea = styled.textarea<{ isError?: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ isError }) => (isError ? "#ff4d4f" : "#cccccc")};
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  min-height: 100px;
  background: ${({ isError }) => (isError ? "#ffeef0" : "#ffffff")};

  &:focus {
    border-color: ${({ isError }) => (isError ? "#ff4d4f" : "#9c3aaf")};
  }
`;

const Error = styled.div`
  color: #ff4d4f;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const Button = styled.button`
  width: 100%; /* Full width */
  padding: 1rem 2rem; /* Padding similar to */
  font-size: 1rem; /* Font size */
  font-weight: 500; /* Font medium */
  color: #ffffff; /* Text color */
  background: linear-gradient(
    to right,
    #3785cc,
    #5b8af0
  ); /* Gradient background */
  border: none; /* No border */
  border-radius: 0.5rem; /* Rounded corners similar to  */
  display: inline-flex; /* Inline flex for proper alignment */
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
  gap: 0.5rem; /* Spacing between items similar to  */
  cursor: pointer; /* Pointer cursor on hover */
  box-shadow: 0 0 0 transparent; /* Initial shadow */
  transition: all 0.3s ease; /* Smooth transition */

  &:hover {
    box-shadow: 0 4px 10px rgba(55, 133, 204, 0.2); /* Shadow on hover */
  }

  &:disabled {
    background: #cccccc; /* Disabled background color */
    cursor: not-allowed; /* Disabled cursor */
    box-shadow: none; /* Remove hover shadow when disabled */
  }
`;
