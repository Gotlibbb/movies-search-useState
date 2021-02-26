(this["webpackJsonpmovies-search"]=this["webpackJsonpmovies-search"]||[]).push([[0],{2:function(e,t,c){e.exports={logo:"App_logo__26551",searchingContainer:"App_searchingContainer__34sVT",searchResult:"App_searchResult__1VvsH",searchingBlock:"App_searchingBlock__35kqj",inputZone:"App_inputZone__O1aU2",searchError:"App_searchError__1WBtE",filmPreview:"App_filmPreview__1R6kf",Title:"App_Title__2be9x",movieContainer:"App_movieContainer__35hpZ",movieInfo:"App_movieInfo__3KNJa",moviePage:"App_moviePage__gUhHy",pagesBlock:"App_pagesBlock__x5z86",checked:"App_checked__LOm8_",pageSwitch:"App_pageSwitch__1H6VZ",toggleBlock:"App_toggleBlock__2uD1f",pageToggle:"App_pageToggle__1Fuo4",currentPage:"App_currentPage__fZj-p",totalPage:"App_totalPage__3wWgF",changePage:"App_changePage__3R8Fg"}},34:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(1),n=c.n(r),i=c(26),s=c.n(i),l=(c(34),c(3)),j=c(2),o=c.n(j),u=c(27),b="&apikey=ff4140ae",d=c.n(u).a.create({baseURL:"https://www.omdbapi.com/"}),h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1";return d.get("?s=".concat(e,"&page=").concat(t).concat(b)).then((function(e){return e.data}))},m=function(e){return d.get("?i=".concat(e).concat(b)).then((function(e){return e}))},g=c(4),O=n.a.memo((function(e){var t=Object(g.f)(),c=function(){e.searchingFilm(),e.setCurrentPage(1),t.push("/movies-search-useState/search-results/"+e.filmName+"/"+e.currentPage)};return Object(a.jsx)("div",{className:o.a.searchingBlock,children:Object(a.jsxs)("div",{className:o.a.inputZone,children:[Object(a.jsx)("input",{type:"text",autoFocus:!0,placeholder:"Enter name of movie ",value:e.filmName,onChange:function(t){return e.setFilmName(t.target.value)},onKeyPress:function(e){"Enter"===e.key&&c()}}),Object(a.jsx)("button",{onClick:c,children:"Search"})]})})})),p=c(10),x=c.p+"static/media/151.5b8af3aa.gif",f=function(){return Object(a.jsx)("img",{src:x,alt:"preloader",style:{width:"200px",paddingTop:"180px"}})},v=n.a.memo((function(e){var t=Object(g.g)();return Object(r.useEffect)((function(){e.setFilmName(t.filmNameUrl),e.viewMovie(t.movieId)}),[]),e.preloader?Object(a.jsx)(f,{}):Object(a.jsxs)("div",{className:o.a.moviePage,children:[Object(a.jsx)(p.b,{to:"/movies-search-useState/search-results/"+t.filmNameUrl+"/"+e.currentPage,children:"\u21e6 Back to search"}),Object(a.jsxs)("div",{className:o.a.movieContainer,children:[Object(a.jsx)("img",{src:e.Poster,alt:"poster"}),Object(a.jsxs)("div",{className:o.a.movieInfo,children:[Object(a.jsx)("div",{className:o.a.Title,children:e.Title}),Object(a.jsxs)("div",{children:[Object(a.jsx)("u",{children:Object(a.jsx)("b",{children:"Production"})}),": ",e.Production]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("u",{children:Object(a.jsx)("b",{children:"Type"})}),": ",e.Type]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("u",{children:Object(a.jsx)("b",{children:"Genre"})}),": ",e.Genre]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("u",{children:Object(a.jsx)("b",{children:"imdbRating"})}),": ",e.imdbRating]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("u",{children:Object(a.jsx)("b",{children:"Country"})}),": ",e.Country]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("u",{children:Object(a.jsx)("b",{children:"Year"})}),": ",e.Year]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("u",{children:Object(a.jsx)("b",{children:"Language"})}),": ",e.Language]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("u",{children:Object(a.jsx)("b",{children:"Director"})}),": ",e.Director]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("u",{children:Object(a.jsx)("b",{children:"Actors"})}),": ",e.Actors]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("u",{children:Object(a.jsx)("b",{children:"Brief description"})}),": ",e.Plot]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("u",{children:Object(a.jsx)("b",{children:"Box office"})}),": ",e.BoxOffice]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("u",{children:Object(a.jsx)("b",{children:"Runtime"})}),": ",e.Runtime]})]})]})]})})),P=function(e){return Object(a.jsxs)("div",{className:o.a.filmPreview,children:[Object(a.jsxs)(p.b,{to:"/movies-search-useState/movie/"+e.filmName+"/"+e.imdbID,onClick:function(){return e.viewMovie(e.imdbID)},children:[Object(a.jsx)("div",{className:o.a.Title,children:e.Title}),Object(a.jsx)("img",{src:e.Poster,alt:"poster"})]}),Object(a.jsxs)("div",{className:o.a.Year,children:["Year: ",e.Year]}),Object(a.jsxs)("div",{className:o.a.Type,children:["Type: ",e.Type]})]})},_=n.a.memo((function(e){for(var t=Object(r.useState)(),c=Object(l.a)(t,2),n=c[0],i=c[1],s=Object(g.f)(),j=Math.ceil(Number(e.totalResults)/10),u=[],b=0;b<=j;b++)u.push(b);var d=function(t){s.push("/movies-search-useState/search-results/"+e.filmName+"/"+String(t))};if(j>=10){var h=Number(n)>=u.length||Number(n)<=0,m=e.currentPage+1>=u.length||e.currentPage<=0;return Object(a.jsxs)("div",{className:o.a.toggleBlock,style:e.onlySwitch?{justifyContent:"center",paddingLeft:"75px"}:{},children:[Object(a.jsxs)("div",{className:o.a.changePage,hidden:e.onlySwitch,children:[Object(a.jsx)("div",{hidden:e.onlySwitch,children:"Change page:"}),Object(a.jsx)("input",{hidden:e.onlySwitch,type:"number",value:n,onChange:function(e){i(e.currentTarget.value)},onKeyPress:function(t){"Enter"!==t.key||h||(e.setCurrentPage(Number(n)),e.searchingFilm(n),d(Number(n)))}}),Object(a.jsx)("button",{hidden:e.onlySwitch,onClick:function(){e.setCurrentPage(Number(n)),e.searchingFilm(n),d(Number(n))},disabled:h,children:"\u21aa"})]}),Object(a.jsxs)("div",{className:o.a.pageToggle,children:[1!==e.currentPage&&Object(a.jsx)("button",{onClick:function(){e.onlySwitch&&window.scrollTo(0,300),e.setCurrentPage(u[e.currentPage-1]),e.searchingFilm(String(e.currentPage-1)),d(e.currentPage-1)},children:"\u21d0...prev "}),Object(a.jsxs)("div",{className:o.a.currentPage,children:[" ",e.currentPage," "]}),Object(a.jsx)("button",{disabled:m,onClick:function(){e.onlySwitch&&window.scrollTo(0,300),e.setCurrentPage(u[e.currentPage+1]),e.searchingFilm(String(e.currentPage+1)),d(e.currentPage+1)},children:" next...\u21d2"})]}),Object(a.jsxs)("div",{className:o.a.totalPage,hidden:e.onlySwitch,children:["Total pages: ",u.length-1]})]})}return Object(a.jsx)("div",{className:o.a.pagesBlock,children:u.map((function(t){return Object(a.jsx)("span",{hidden:0===t,className:e.currentPage===t?o.a.checked:" ",onClick:function(){e.setCurrentPage(t),e.searchingFilm(String(t)),d(t)},children:t},t)}))})})),N=n.a.memo((function(e){var t=Object(g.g)();return Object(r.useEffect)((function(){e.setCurrentPage(Number(t.page)),e.setFilmName(t.filmNameUrl),e.searchingFilm(t.page,t.filmNameUrl)}),[]),Object(a.jsx)("div",{className:o.a.searchingBlock,children:Object(a.jsxs)("div",{className:o.a.searchResult,children:[Object(a.jsx)(_,{searchingFilm:e.searchingFilm,totalResults:e.totalResults,currentPage:e.currentPage,setCurrentPage:e.setCurrentPage,filmName:e.filmName}),e.preloader?Object(a.jsx)(f,{}):Object(a.jsx)("div",{className:o.a.searchResult,children:e.searchResult}),Object(a.jsx)(_,{searchingFilm:e.searchingFilm,totalResults:e.totalResults,onlySwitch:!0,currentPage:e.currentPage,setCurrentPage:e.setCurrentPage,filmName:e.filmName})]})})})),S=n.a.memo((function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)(),s=Object(l.a)(i,2),j=s[0],u=s[1],b=Object(r.useState)(""),d=Object(l.a)(b,2),p=d[0],x=d[1],f=Object(r.useState)(1),_=Object(l.a)(f,2),S=_[0],C=_[1],y=Object(r.useState)(!1),w=Object(l.a)(y,2),T=w[0],k=w[1],F=Object(r.useCallback)((function(e,t){k(!0);var r=t||c;h(r.trim(),e).then((function(e){if(x(e.totalResults),e.Error&&(k(!1),u('"'+r.trim()+'" - '+e.Error.toLowerCase())),!e.Error){k(!1);var t=0;u(e.Search.map((function(e){return Object(a.jsx)(P,{filmName:c,viewMovie:Le,imdbID:e.imdbID,Poster:e.Poster,Title:e.Title,Type:e.Type,Year:e.Year},t+=1)})))}}))}),[c,x,u]),R=Object(r.useState)(""),A=Object(l.a)(R,2),B=A[0],I=A[1],D=Object(r.useState)(""),E=Object(l.a)(D,2),L=E[0],U=E[1],Y=Object(r.useState)(""),M=Object(l.a)(Y,2),Z=M[0],G=M[1],H=Object(r.useState)(""),J=Object(l.a)(H,2),K=J[0],V=J[1],W=Object(r.useState)(""),q=Object(l.a)(W,2),z=q[0],Q=q[1],X=Object(r.useState)(""),$=Object(l.a)(X,2),ee=$[0],te=$[1],ce=Object(r.useState)(""),ae=Object(l.a)(ce,2),re=ae[0],ne=ae[1],ie=Object(r.useState)(""),se=Object(l.a)(ie,2),le=se[0],je=se[1],oe=Object(r.useState)(""),ue=Object(l.a)(oe,2),be=ue[0],de=ue[1],he=Object(r.useState)(""),me=Object(l.a)(he,2),ge=me[0],Oe=me[1],pe=Object(r.useState)(""),xe=Object(l.a)(pe,2),fe=xe[0],ve=xe[1],Pe=Object(r.useState)(""),_e=Object(l.a)(Pe,2),Ne=_e[0],Se=_e[1],Ce=Object(r.useState)(""),ye=Object(l.a)(Ce,2),we=ye[0],Te=ye[1],ke=Object(r.useState)(""),Fe=Object(l.a)(ke,2),Re=Fe[0],Ae=Fe[1],Be=Object(r.useState)(""),Ie=Object(l.a)(Be,2),De=Ie[0],Ee=Ie[1],Le=Object(r.useCallback)((function(e){k(!0),m(e).then((function(e){k(!1),I(e.data.Title),U(e.data.Year),G(e.data.Runtime),V(e.data.Genre),Q(e.data.Director),te(e.data.Actors),ne(e.data.Plot),je(e.data.Language),de(e.data.Country),Oe(e.data.Poster),ve(e.data.imdbRating),Se(e.data.imdbID),Te(e.data.Type),Ae(e.data.BoxOffice),Ee(e.data.Production)}))}),[]);return Object(a.jsxs)("div",{className:o.a.searchingContainer,children:[Object(a.jsx)("div",{className:o.a.logo,children:Object(a.jsx)("h1",{children:"Movies_Search"})}),Object(a.jsx)(O,{currentPage:S,filmName:c,searchingFilm:F,setFilmName:n,setCurrentPage:C}),Object(a.jsxs)(g.c,{children:[Object(a.jsx)(g.a,{path:"/movies-search-useState/search-results/:filmNameUrl/:page",children:Object(a.jsx)(N,{setFilmName:n,searchingFilm:F,currentPage:S,setCurrentPage:C,searchResult:j,totalResults:p,preloader:T,filmName:c})}),Object(a.jsx)(g.a,{path:"/movies-search-useState/movie/:filmNameUrl/:movieId",children:Object(a.jsx)(v,{setFilmName:n,preloader:T,Title:B,imdbID:Ne,Year:L,Type:we,Poster:ge,Actors:ee,BoxOffice:Re,Director:z,Country:be,Genre:K,imdbRating:fe,Language:le,Plot:re,Production:De,Runtime:Z,viewMovie:Le,currentPage:S})})]})]})})),C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),r(e),n(e),i(e)}))};s.a.render(Object(a.jsx)(p.a,{children:Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(S,{})})}),document.getElementById("root")),C()}},[[58,1,2]]]);
//# sourceMappingURL=main.33c2252e.chunk.js.map