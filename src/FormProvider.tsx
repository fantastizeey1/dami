import { createContext, useContext, useState, lazy, Suspense } from "react";
import type { Dispatch, SetStateAction, ReactNode } from "react";

// Lazy load the ContactForm component
const ContactForm = lazy(() => import("./components/ContactForm"));

// Create Form Context
type FormContextType = {
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

// Form Provider Component
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [showForm, setShowForm] = useState(false);
  console.log("showForm:", showForm);

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
