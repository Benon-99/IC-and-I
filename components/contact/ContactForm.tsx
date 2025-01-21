<<<<<<< HEAD
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as Yup from "yup";
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
=======
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824

// Define form data type
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
<<<<<<< HEAD
  const router = useRouter();
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

=======
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824
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
<<<<<<< HEAD
    formState: { errors },
=======
    formState: { errors, isSubmitting },
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  // Form submission handler
<<<<<<< HEAD
  const onSubmit = async (formData: FormData) => {
    setIsSending(true);
    try {
      const response = await axios.post("http://localhost:8000/api/email/send-email", formData);
      
      if (response.status === 200) {
        setShowSuccess(true);
        reset();
        // Hide success message after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } else {
        throw new Error(response.data?.message || "Failed to send message");
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSending(false);
=======
  const onSubmit = async (data: FormData) => {
    try {
      // Send data to backend
      await axios.post("http://localhost:3001/api/send-email", data);
      // alert("Email sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send the email. Please try again.");
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824
    }
  };

  return (
    <Container>
<<<<<<< HEAD
      <AnimatePresence>
        {showSuccess && (
          <SuccessNotification
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <CheckCircle2 size={20} />
            Message sent successfully
          </SuccessNotification>
        )}
      </AnimatePresence>
      <FormWrapper onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit)(e);
      }}>
=======
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824
        <Title>Contact Us</Title>
        <Description>
          We would love to hear from you! Fill out the form below.
        </Description>

        <InputWrapper>
          <Input
            type="text"
            placeholder="Your Name"
            {...register("name")}
<<<<<<< HEAD
            $isError={!!errors.name}
          />
          {errors.name && (
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          )}
=======
            isError={!!errors.name}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824
        </InputWrapper>

        <InputWrapper>
          <Input
            type="email"
            placeholder="Your Email"
            {...register("email")}
<<<<<<< HEAD
            $isError={!!errors.email}
          />
          {errors.email && (
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          )}
=======
            isError={!!errors.email}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            placeholder="Subject"
            {...register("subject")}
<<<<<<< HEAD
            $isError={!!errors.subject}
          />
          {errors.subject && (
            <ErrorMessage>{errors.subject?.message}</ErrorMessage>
          )}
=======
            isError={!!errors.subject}
          />
          {errors.subject && <Error>{errors.subject.message}</Error>}
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824
        </InputWrapper>

        <InputWrapper>
          <Textarea
            placeholder="Your Message"
            {...register("message")}
<<<<<<< HEAD
            $isError={!!errors.message}
          />
          {errors.message && (
            <ErrorMessage>{errors.message?.message}</ErrorMessage>
          )}
        </InputWrapper>

        <SubmitButton type="submit" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Message'}
        </SubmitButton>
=======
            isError={!!errors.message}
          />
          {errors.message && <Error>{errors.message.message}</Error>}
        </InputWrapper>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824
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
<<<<<<< HEAD
  min-height: 50vh;
  background-color: transparent;
  padding: 2rem;
  margin-bottom: 60px;
=======
  min-height: 100vh;
  background-color: transparent;
  padding: 2rem;
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824
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

<<<<<<< HEAD
const Input = styled.input<{ $isError?: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ $isError }) => ($isError ? "#ff4d4f" : "#cccccc")};
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  background: ${({ $isError }) => ($isError ? "#ffeef0" : "#ffffff")};

  &:focus {
    border-color: ${({ $isError }) => ($isError ? "#ff4d4f" : "#9c3aaf")};
  }
`;

const Textarea = styled.textarea<{ $isError?: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ $isError }) => ($isError ? "#ff4d4f" : "#cccccc")};
=======
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
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  min-height: 100px;
<<<<<<< HEAD
  background: ${({ $isError }) => ($isError ? "#ffeef0" : "#ffffff")};

  &:focus {
    border-color: ${({ $isError }) => ($isError ? "#ff4d4f" : "#9c3aaf")};
  }
`;

const ErrorMessage = styled.div`
=======
  background: ${({ isError }) => (isError ? "#ffeef0" : "#ffffff")};

  &:focus {
    border-color: ${({ isError }) => (isError ? "#ff4d4f" : "#9c3aaf")};
  }
`;

const Error = styled.div`
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824
  color: #ff4d4f;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

<<<<<<< HEAD
const SubmitButton = styled.button`
=======
const Button = styled.button`
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824
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
<<<<<<< HEAD

const SuccessNotification = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #22c55e;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
`;
=======
>>>>>>> 141992f52ab3f2143b4cf2a58d7d79730fff6824
