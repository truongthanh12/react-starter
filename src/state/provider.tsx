import React from "react";
import { persistor, store } from "@/state/store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import { PersistGate } from "redux-persist/integration/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </PersistGate>
    </Provider>
  );
}
