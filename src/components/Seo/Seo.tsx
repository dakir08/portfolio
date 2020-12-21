import React from "react";
import { Helmet } from "react-helmet";

export interface SeoProps {}

export const Seo: React.FunctionComponent<SeoProps> = () => {
  return (
    <>
      <Helmet>
        <title>Max Phuong Le - Front End Developer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="I'm a Front End Developer, love anime, and coding :)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="canonical" content="http://maxphuongle.com" />
      </Helmet>
    </>
  );
};
