import React, {
  createContext,
  useContext,
  useState,
  lazy,
  Suspense,
} from "react";

// Lazy load the ContactForm component
const ContactForm = lazy(() => import("./components/ContactForm"));

// Create Form Context
const FormContext = createContext();

// Form Provider Component
export const FormProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <FormContext.Provider value={{ showForm, setShowForm }}>
      {children}
      {showForm && (
        <Suspense fallback={<div>Loading form...</div>}>
          <ContactForm onClose={() => setShowForm(false)} />
        </Suspense>
      )}
    </FormContext.Provider>
  );
};

// Custom hook to use form context
export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
