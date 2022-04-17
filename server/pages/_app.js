(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./src/app/main-app/components/Nav.jsx





const NavStyle = () => /*#__PURE__*/_jsx("style", {
  children: `
            #nav {
                z-index: 100;
            }
        `
});

const Nav = () => {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("nav", {
      id: "nav",
      className: "w-full md:fixed top-0 left-0",
      children: /*#__PURE__*/_jsx("div", {
        className: "flex justify-between items-center py-4 px-6 md:px-16",
        children: /*#__PURE__*/_jsx(Link, {
          href: "/",
          children: /*#__PURE__*/_jsx("a", {
            children: /*#__PURE__*/_jsx("img", {
              src: "/logo.png",
              className: "w-16 mr-4"
            })
          })
        })
      })
    }), /*#__PURE__*/_jsx(NavStyle, {})]
  });
};

/* harmony default export */ const components_Nav = ((/* unused pure expression or super */ null && (Nav)));
;// CONCATENATED MODULE: ./src/app/main-app/components/Footer.jsx



const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "pt-8 pb-8 sm:pb-12",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col items-center mx-auto container pt-4 px-4 text-center",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-gray-1 text-lg sm:text-xl",
        children: "\xA9 2021 Tai Pham. Made with Love, Figma and NextJS."
      })
    })
  });
};

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: ./src/app/main-app/components/Sidebar.jsx


const Sidebar = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "Sidebar"
  });
};

/* harmony default export */ const components_Sidebar = (Sidebar);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/app/main-app/components/MainApp.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const MainApp = ({
  Component,
  pageProps
}) => {
  const router = (0,router_namespaceObject.useRouter)();

  const handleRouteChange = url => {
    window.gtag('config', '[Tracking ID]', {
      page_path: url
    });
    Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 92, 23)).then(x => x.default).then(ReactPixel => {
      ReactPixel.init('421927635951889'); // facebookPixelId

      ReactPixel.pageView();
      router.events.on('routeChangeComplete', () => {
        ReactPixel.pageView();
      });
    });
  };

  (0,external_react_.useEffect)(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  const {
    0: _sidebarOpen,
    1: _setSidebarOpen
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_next_seo_namespaceObject.NextSeo, {
      title: "taipham1803.github.io",
      description: "Tai's personal website",
      openGraph: {
        url: 'https://taipham1803.github.io',
        title: 'taipham1803.github.io',
        description: `Tai's personal website`,
        images: [{
          url: 'taipham1803.github.io/avatar.png',
          width: 512,
          height: 512,
          alt: 'Taipn portfolio'
        }],
        site_name: 'taipn'
      }
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Sidebar, {
        setSidebarOpen: _setSidebarOpen
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
    })]
  });
};

/* harmony default export */ const components_MainApp = (MainApp);
;// CONCATENATED MODULE: ./src/app/main-app/index.js

/* harmony default export */ const main_app = (components_MainApp);
;// CONCATENATED MODULE: ./pages/_app.js



/* harmony default export */ const _app = (main_app);

/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 92:
/***/ ((module) => {

"use strict";
module.exports = require("react-facebook-pixel");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(437)));
module.exports = __webpack_exports__;

})();