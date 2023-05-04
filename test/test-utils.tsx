import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { setupStore } from "../store/store";
import { SessionProvider } from "next-auth/react";
import type { AppStore, RootState } from "../store/store";
import type { PreloadedState } from "@reduxjs/toolkit";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store. For
// future dependencies, such as wanting to test with react-router, you can extend
// this interface to accept a path and route and use those in a <MemoryRouter />
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
  session = {
    expires: "1",
    user: { email: "a", name: "Delta", image: "c" },
  }
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <SessionProvider
        session={{
          expires: new Date(
            new Date().setDate(new Date().getDate() + 7)
          ).toISOString(),
          user: { email: "dev@creatiff.com", name: "Creatiff" },
        }}
      >
        <Provider store={store}>{children}</Provider>
      </SessionProvider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export { renderWithProviders };
