import { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Layout = ({ children, seoData, isNoIndex }) => {
  const { asPath: canonicalPath } = useRouter();
  const canonicalUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

  // const [scrollActive, setScrollActive] = useState(true);

  useEffect(() => {
    const nav = document.querySelector('nav');

    document.addEventListener('scroll', () => {
      if (window.pageYOffset > 80) {
        nav.classList.add('bg-white', 'shadow-sm');
      } else {
        nav.classList.remove('bg-white', 'shadow-sm');
      }
    });
  }, []);

  // window.addEventListener('scroll', function () {
  //   if (window.pageYOffset > 80) {
  //     nav.classList.add('bg-white', 'shadow-sm');
  //   } else {
  //     nav.classList.remove('bg-white', 'shadow-sm');
  //   }
  // });

  return (
    <Fragment>
      <Head>
        {/* SEO Begin  */}
        <title>{`${seoData?.title}`}</title>
        {isNoIndex && <meta name="robots" content="noindex" />}
        <meta name="description" content={seoData?.description} />
        {/* <meta name="author" content={seoData?.author} /> */}
        {/* SEO End */}

        {/* Open Graph Start  */}
        <meta property="og:type" content={seoData?.openGraph.type} />
        <meta property="og:locale" content={seoData?.openGraph.locale} />
        <meta property="og:url" content={seoData?.openGraph.url} />
        <meta property="og:title" content={seoData?.openGraph.title} />
        <meta
          property="og:description"
          content={seoData?.openGraph.description}
        />
        <meta property="og:image" content={seoData?.openGraph.image} />
        <meta property="og:site_name" content={seoData?.openGraph.site_name} />
        {/* Open Graph End */}

        {/* Twitter Card Info Start */}
        <meta name="twitter:card" content={seoData?.twitter.card} />
        <meta name="twitter:site" content={seoData?.twitter.site} />
        <meta name="twitter:title" content={seoData?.twitter.title} />
        <meta
          name="twitter:description"
          content={seoData?.twitter.description}
        />
        <meta name="twitter:image" content={seoData?.twitter.image} />
        {/* Twitter Card Info End */}

        {/* Canonical */}
        <link rel="canonical" href={`${canonicalUrl}${canonicalPath}`} />
      </Head>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="/" passHref>
            <img src="/img/logo-seia-web.png" alt="logo" height="40" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link" passHref>
                  Beranda
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href=""
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Layanan
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a href="/branding" className="dropdown-item" passHref>
                      Branding & Design
                    </a>
                  </li>
                  <li>
                    <a href="/content" className="dropdown-item" passHref>
                      Content Provider
                    </a>
                  </li>
                  <li>
                    <a href="/web-dev" className="dropdown-item" passHref>
                      Website Development
                    </a>
                  </li>
                  <li>
                    <a href="/workshop" className="dropdown-item" passHref>
                      Workshop
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/tentang-kami" className="nav-link">
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item">
                <a href="/kontak" className="nav-link">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <footer>
        <div className="container">
          <div className="row text-white">
            <div className="col-lg-6 col-md-12">
              <h3>SEIA</h3>
              <ul className="social-link">
                <li>
                  <a href="">
                    <i className="fas fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fas fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fas fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-info col-lg-6 col-md-12">
              <h5>Alamat</h5>
              <ul>
                <li>
                  {/* <i className="fas fa-map-marker-alt"></i> */}
                  <a href="">
                    Perumahan Tiara Indah No. 3, Jl. Dr. Soebandi, Patrang,
                    Jember, Jawa Timur - Indonesia. 68111
                  </a>
                </li>
                <li>
                  {/* <i className="fas fa-phone-alt"></i> */}
                  <a href="">+6283898598090</a>
                </li>
                <li>
                  {/* <i className="fas fa-envelope"></i> */}
                  <a href="">seia@kodekoding.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Layout;
