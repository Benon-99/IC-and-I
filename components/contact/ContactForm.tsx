import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import * as Yup from "yup";

// Define form data type
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [notification, setNotification] = useState<{
    visible: boolean;
    type: "success" | "error";
    message: string;
  }>({
    visible: false,
    type: "success",
    message: "",
  });

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
      
      // Show success notification
      setNotification({
        visible: true,
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, visible: false }));
      }, 5000);
      
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Show error notification
      setNotification({
        visible: true,
        type: "error",
        message: "Failed to send the message. Please try again later.",
      });
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, visible: false }));
      }, 5000);
    }
  };

  return (
    <Container>
      {notification.visible && (
        <NotificationWrapper type={notification.type}>
          <NotificationIcon type={notification.type}>
            {notification.type === "success" ? "✓" : "✕"}
          </NotificationIcon>
          <NotificationContent>
            <NotificationTitle>
              {notification.type === "success" ? "Success!" : "Error!"}
            </NotificationTitle>
            <NotificationMessage>{notification.message}</NotificationMessage>
          </NotificationContent>
          <CloseButton 
            onClick={() => setNotification((prev) => ({ ...prev, visible: false }))}
          >
            ×
          </CloseButton>
        </NotificationWrapper>
      )}

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

// Animation for notification
const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Notification Styles
const NotificationWrapper = styled.div<{ type: "success" | "error" }>`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ type }) => (type === "success" ? "#ecfdf5" : "#fef2f2")};
  border-left: 4px solid ${({ type }) => (type === "success" ? "#10b981" : "#ef4444")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 320px;
  z-index: 1000;
  animation: ${slideIn} 0.3s ease-out forwards;
`;

const NotificationIcon = styled.div<{ type: "success" | "error" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ type }) => (type === "success" ? "#10b981" : "#ef4444")};
  color: white;
  font-weight: bold;
  margin-right: 12px;
`;

const NotificationContent = styled.div`
  flex: 1;
`;

const NotificationTitle = styled.h4`
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
`;

const NotificationMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: #4b5563;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #9ca3af;
  cursor: pointer;
  padding: 0;
  margin-left: 8px;
  
  &:hover {
    color: #6b7280;
  }
`;

// Styled-components for design (same as before)
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  background-color: transparent;
  padding: 2rem;
  margin-bottom: 60px;
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
