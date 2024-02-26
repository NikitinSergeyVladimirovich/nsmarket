
import type { AppProps } from "next/app";
import type { ReactNode, ReactElement } from "react";
import type { NextPage } from "next";
import React from "react";
import Products from "./containers/products/products";

export type NextPageWithLayout = NextPage & {
  /** Нужна ли авторизация на странице. ПО-умолчанию: true */
  auth?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


function App() {

  return (
    <>
      <Products />
    </>
  )
};

export default App;