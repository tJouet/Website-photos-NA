import { error } from "console";
import { create } from "zustand";

interface FormState {
  isSent: boolean;
  isLoading: boolean;
  error: string | null;
  sendForm: (formData: Record<string, string>) => Promise<void>;
}

const useContactStore = create<FormState>((set) => ({
  isSent: false,
  isLoading: false,
  error: null,
  sendForm: async (formData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("/api", {
        method: "POST",
        body: new URLSearchParams(formData),
      });
      const result = await response.json();

      if (response.ok) {
        set({ isSent: true });
        console.log("Email successfully sent", result);
      } else {
        set({ error: result.message || "Email couldn't be sent" });
      }
    } catch (error) {
      console.error("Request error", error);
      set({ error: "Error connection to server" });
    }
  },
}));

export default useContactStore;
