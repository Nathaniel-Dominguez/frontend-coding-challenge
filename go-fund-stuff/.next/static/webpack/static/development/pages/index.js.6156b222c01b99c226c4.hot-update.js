webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cards; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nathanieldominguez/Projects/frontend-coding-challenge/go-fund-stuff/pages/index.js";





function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(post.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, post.title)));
};

function Cards() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1333883085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Campaign Cards"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1333883085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1333883085",
    __self: this
  }, "h1.jsx-1333883085,a.jsx-1333883085{font-family:'Arial';}ul.jsx-1333883085{padding:0;}li.jsx-1333883085{list-style:none;margin:5px 0;}a.jsx-1333883085{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-1333883085:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRoYW5pZWxkb21pbmd1ZXovUHJvamVjdHMvZnJvbnRlbmQtY29kaW5nLWNoYWxsZW5nZS9nby1mdW5kLXN0dWZmL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCZSxBQUkwQixBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmIsRUFjQSxJQVZjLElBUmQsU0FTQSxxQkFJWSxXQUNaIiwiZmlsZSI6Ii9Vc2Vycy9uYXRoYW5pZWxkb21pbmd1ZXovUHJvamVjdHMvZnJvbnRlbmQtY29kaW5nLWNoYWxsZW5nZS9nby1mdW5kLXN0dWZmL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuXHRyZXR1cm4gW1xuXHRcdHsgaWQ6ICdoZWxsby1uZXh0anMnLCB0aXRsZTogJ0hlbGxvIE5leHQuanMnIH0sXG5cdFx0eyBpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJyB9LFxuXHRcdHsgaWQ6ICdkZXBsb3ktbmV4dGpzJywgdGl0bGU6ICdEZXBsb3kgYXBwcyB3aXRoIFpFSVQnIH1cblx0XTtcbn1cblxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcblx0PGxpPlxuXHRcdDxMaW5rIGhyZWY9Jy9wL1tpZF0nIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxuXHRcdFx0PGE+e3Bvc3QudGl0bGV9PC9hPlxuXHRcdDwvTGluaz5cblx0PC9saT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRzKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHQ8aDE+Q2FtcGFpZ24gQ2FyZHM8L2gxPlxuXHRcdFx0PHVsPlxuXHRcdFx0XHR7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG5cdFx0XHRcdFx0PFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRoMSxcblx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdBcmlhbCc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1bCB7XG5cdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxpIHtcblx0XHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhIHtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0Y29sb3I6IGJsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhOmhvdmVyIHtcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjY7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L0xheW91dD5cblx0KTtcbn1cblxuLyogXG5Ib3cgdG8gZmV0Y2ggZGF0YSBmcm9tIGFwaSBmb3IgZHluYW1pYyBwYWdlc1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuXHQ8TGF5b3V0PlxuXHRcdDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuXHRcdDx1bD5cblx0XHRcdHtwcm9wcy5zaG93cy5tYXAoc2hvdyA9PiAoXG5cdFx0XHRcdDxsaSBrZXk9e3Nob3cuaWR9PlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9wL1tpZF0nIGFzPXtgL3AvJHtzaG93LmlkfWB9PlxuXHRcdFx0XHRcdFx0PGE+e3Nob3cubmFtZX08L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0PC9MYXlvdXQ+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG5cdGNvbnNvbGUubG9nKGBzaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQgJHtkYXRhLmxlbmd0aH1gKTtcblxuXHRyZXR1cm4ge1xuXHRcdHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4qL1xuXG4vKlxuXG5OZXh0LmpzIGNyZWF0aW5nIGR5bmFtaWMgcGFnZXMgd2l0aCBjbGVhbiB1cmwgcm91dGluZ1xuXG5jb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcblx0PGxpPlxuXHRcdDxMaW5rIGhyZWY9Jy9wL1tpZF0nIGFzPXtgL3AvJHtwcm9wcy5pZH1gfT5cblx0XHRcdDxhPntwcm9wcy5pZH08L2E+XG5cdFx0PC9MaW5rPlxuXHQ8L2xpPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZHMoKSB7XG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHRcdDxoMT5DYW1wYWlnbnM8L2gxPlxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8UG9zdExpbmsgaWQ9J2hlbGxvLW5leHRqcycgLz5cblx0XHRcdFx0PFBvc3RMaW5rIGlkPSdsZWFybi1uZXh0anMnIC8+XG5cdFx0XHRcdDxQb3N0TGluayBpZD0nZGVwbG95LW5leHRqcycgLz5cblx0XHRcdDwvdWw+XG5cdFx0PC9MYXlvdXQ+XG5cdCk7XG59XG4qLyJdfQ== */\n/*@ sourceURL=/Users/nathanieldominguez/Projects/frontend-coding-challenge/go-fund-stuff/pages/index.js */"));
}
/* 
How to fetch data from api for dynamic pages
import fetch from 'isomorphic-unfetch';

const Index = props => (
	<Layout>
		<h1>Batman TV Shows</h1>
		<ul>
			{props.shows.map(show => (
				<li key={show.id}>
					<Link href='/p/[id]' as={`/p/${show.id}`}>
						<a>{show.name}</a>
					</Link>
				</li>
			))}
		</ul>
	</Layout>
);

Index.getInitialProps = async function() {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
	const data = await res.json();

	console.log(`show data fetched. Count ${data.length}`);

	return {
		shows: data.map(entry => entry.show)
	};
};

export default Index;
*/

/*

Next.js creating dynamic pages with clean url routing

const PostLink = props => (
	<li>
		<Link href='/p/[id]' as={`/p/${props.id}`}>
			<a>{props.id}</a>
		</Link>
	</li>
);

export default function Cards() {
	return (
		<Layout>
			<h1>Campaigns</h1>
			<ul>
				<PostLink id='hello-nextjs' />
				<PostLink id='learn-nextjs' />
				<PostLink id='deploy-nextjs' />
			</ul>
		</Layout>
	);
}
*/

/***/ })

})
//# sourceMappingURL=index.js.6156b222c01b99c226c4.hot-update.js.map