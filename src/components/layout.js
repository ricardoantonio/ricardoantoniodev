import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  logoContainer,
  logo,
  navBar,
  navContainer,
  navLink,
  navLinkActive,
  navIcon,
} from "./layout.module.css";

const Layout = ({ pageTitle, children, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isNotRootPath = location.pathname !== rootPath;
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const linkPages = [
    {
      name: "Inicio",
      link: "/",
      icon: (
        <>
          <path
            d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </>
      ),
      iconFill: (
        <>
          <path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z" />
          <path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" />
        </>
      ),
    },
    {
      name: "Blog",
      link: "/blog",
      icon: (
        <>
          <path
            d="M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            d="M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192"
          />
          <path d="M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z" />
        </>
      ),
      iconFill: (
        <><path d="M439.91 112h-23.82a.09.09 0 00-.09.09V416a32 32 0 0032 32 32 32 0 0032-32V152.09A40.09 40.09 0 00439.91 112z"/><path d="M384 416V72a40 40 0 00-40-40H72a40 40 0 00-40 40v352a56 56 0 0056 56h342.85a1.14 1.14 0 001.15-1.15 1.14 1.14 0 00-.85-1.1A64.11 64.11 0 01384 416zM96 128a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16h-64a16 16 0 01-16-16zm208 272H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 368h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 400zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 304h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 336zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 240h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 272zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01240 176h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 208zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01240 112h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 144z"/></>
      ),
    },
  ];

  return (
    <div>
      <title>
        {data.site.siteMetadata.title} | {pageTitle}
      </title>

      <header className={navBar}>
        {isNotRootPath && (
          <span ><Link to='/' className={logoContainer}>
            <svg
              viewBox="0 0 1080 1080"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className={logo}
            >
              <path d="M540,0C838.034,0 1080,241.966 1080,540C1080,838.034 838.034,1080 540,1080C241.966,1080 0,838.034 0,540C0,241.966 241.966,0 540,0ZM517.674,757.545L517.308,758.549L370.174,758.549L300.22,624.975C291.356,607.682 283.455,596.451 276.517,591.283C267.074,584.525 256.379,581.146 244.431,581.146L232.868,581.146L232.868,758.549L101.343,758.549L101.343,321.451L319.588,321.451C360.057,321.451 390.987,325.029 412.378,332.185C433.768,339.34 451.016,352.608 464.12,371.988C477.225,391.369 483.777,414.973 483.777,442.801C483.777,467.051 478.766,487.972 468.745,505.563C458.724,523.154 444.946,537.416 427.409,548.348C416.232,555.305 400.911,561.07 381.448,565.642C397.057,571.008 408.427,576.375 415.557,581.742C420.375,585.32 427.361,592.973 436.515,604.7C445.668,616.428 451.787,625.472 454.87,631.832L517.674,757.545ZM651.146,758.549L518.176,758.549L517.674,757.545L676.583,321.451L819.382,321.451L978.657,758.549L841.64,758.549L820.827,686.395L671.669,686.395L651.146,758.549ZM793.366,591.879L746.537,434.751L699.998,591.879L793.366,591.879ZM232.868,498.556L288.08,498.556C294.054,498.556 305.616,496.568 322.767,492.593C331.439,490.804 338.521,486.232 344.014,478.878C349.506,471.523 352.252,463.075 352.252,453.534C352.252,439.422 347.916,428.589 339.244,421.035C330.572,413.482 314.288,409.705 290.392,409.705L232.868,409.705L232.868,498.556Z" />
            </svg>
            <span>Ricardo Antonio</span></Link>
          </span>
        )}
        <nav style={{ marginLeft: "auto" }}>
          <ul className={navContainer}>
            {linkPages.map((page) => (
              <li key={page.name}>
                <Link
                  to={page.link}
                  className={navLink}
                  activeClassName={navLinkActive}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className={navIcon}
                  >
                    {page.link === location.pathname && page.iconFill}
                    {page.link !== location.pathname && page.icon}
                  </svg>
                  <span>{page.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
