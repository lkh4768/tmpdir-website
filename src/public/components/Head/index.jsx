import React from 'react';
import { Helmet } from 'react-helmet';

import logoIco from '_static/images/favicon.ico';
import logo152h from '_static/images/logo_152h.png';
import logo167h from '_static/images/logo_167h.png';
import logo180h from '_static/images/logo_180h.png';
import logo192h from '_static/images/logo_192h.png';

function Head() {
  return (
    <Helmet>
      <title>tmpdir</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="application-name" content="tmpdir" />
      <meta name="theme-color" content="#009688" />
      <link rel="icon" sizes="151x192" href={logo192h} />
      <link rel="apple-touch-icon" href={logo192h} />
      <link rel="apple-touch-icon" sizes="152x152" href={logo152h} />
      <link rel="apple-touch-icon" sizes="167x167" href={logo167h} />
      <link rel="apple-touch-icon" sizes="180x180" href={logo180h} />
      <link rel="shortcut icon" href={logoIco} />
      <link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />
    </Helmet>
  );
}

export default Head;
