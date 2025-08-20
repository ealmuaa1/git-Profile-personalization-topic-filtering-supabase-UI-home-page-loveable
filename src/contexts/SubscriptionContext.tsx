import React, { createContext, useContext, useState, useEffect } from "react";

interface SubscriptionContextType {
  isPro: boolean;
  planName: string;
  loading: boolean;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

interface SubscriptionProviderProps {
  children: React.ReactNode;
}

export const SubscriptionProvider: React.FC<SubscriptionProviderProps> = ({ children }) => {
  const [isPro, setIsPro] = useState(false);
  const [planName, setPlanName] = useState("Free");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, default to free plan
    // In a real app, you would check the user's subscription status
    setLoading(false);
  }, []);

  const value: SubscriptionContextType = {
    isPro,
    planName,
    loading,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error("useSubscription must be used within a SubscriptionProvider");
  }
  return context;
};
