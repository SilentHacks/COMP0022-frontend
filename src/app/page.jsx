import PieChart from "@/components/pie-chart";
import "../styles/globals.css";

export default function Home() {
    const data = [
        {
            "id": "drama",
            "label": "Drama",
            "value": 6.7
        },
        {
            "id": "fantasy",
            "label": "Fantasy",
            "value": 7.8
        },
        {
            "id": "action",
            "label": "Action",
            "value": 6.2
        },
        {
            "id": "adventure",
            "label": "Adventure",
            "value": 7.1
        },
        {
            "id": "sci-fi",
            "label": "Sci-Fi",
            "value": 8.5
        }
    ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
          className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 ">
        <aside
            className=" w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block ">

          <div className=" font-bold text-lg flex items-center gap-x-3">
            <svg className="h-8 w-8 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                  d="M10 15.5v-7c0-.41.47-.65.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5c-.33.25-.8.01-.8-.4Zm11.96-4.45c.58 6.26-4.64 11.48-10.9 10.9 -4.43-.41-8.12-3.85-8.9-8.23 -.26-1.42-.19-2.78.12-4.04 .14-.58.76-.9 1.31-.7v0c.47.17.75.67.63 1.16 -.2.82-.27 1.7-.19 2.61 .37 4.04 3.89 7.25 7.95 7.26 4.79.01 8.61-4.21 7.94-9.12 -.51-3.7-3.66-6.62-7.39-6.86 -.83-.06-1.63.02-2.38.2 -.49.11-.99-.16-1.16-.64v0c-.2-.56.12-1.17.69-1.31 1.79-.43 3.75-.41 5.78.37 3.56 1.35 6.15 4.62 6.5 8.4ZM5.5 4C4.67 4 4 4.67 4 5.5 4 6.33 4.67 7 5.5 7 6.33 7 7 6.33 7 5.5 7 4.67 6.33 4 5.5 4Z"></path>
            </svg>
            <div className="tracking-wide dark:text-white">Group 7 - COMP0022<span className="text-red-600">.</span></div>
          </div>

          <div className="mt-12 flex flex-col gap-y-4 text-gray-500 fill-gray-500 text-sm">
            <div className="text-gray-400/70  font-medium uppercase">Menu</div>
            <a className="flex items-center space-x-2 py-1 dark:text-white  font-semibold  border-r-4 border-r-red-600 pr-20 "
               href="#">
              <svg className="h-5 w-5 fill-red-600 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M5 22h14v0c1.1 0 2-.9 2-2v-9 0c0-.27-.11-.53-.29-.71l-8-8v0c-.4-.39-1.02-.39-1.41 0l-8 8h0c-.2.18-.3.44-.3.71v9 0c0 1.1.89 2 2 2Zm5-2v-5h4v5Zm-5-8.59l7-7 7 7V20h-3v-5 0c0-1.11-.9-2-2-2h-4v0c-1.11 0-2 .89-2 2v5H5Z"></path>
              </svg>
              <span>Home</span>
            </a>
            {/*<a className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"*/}
            {/*   href="#">*/}
            {/*  <svg className="h-5 w-5 group-hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">*/}
            {/*    <g>*/}
            {/*      <path*/}
            {/*          d="M12 2C6.48 2 2 6.48 2 12c0 5.51 4.48 10 10 10 5.51 0 10-4.49 10-10 0-5.52-4.49-10-10-10Zm0 18c-4.42 0-8-3.59-8-8 0-4.42 3.58-8 8-8 4.41 0 8 3.58 8 8 0 4.41-3.59 8-8 8Z"></path>*/}
            {/*      <path d="M8 16l5.991-2 2-6 -6 2Z"></path>*/}
            {/*    </g>*/}
            {/*  </svg>*/}
            {/*  <span>Discovery</span>*/}
            {/*</a>*/}
          </div>

        </aside>

        <main className=" flex-1 py-10  px-5 sm:px-10 ">

          <header className=" font-bold text-lg flex items-center  gap-x-3 md:hidden mb-12 ">
                <span className="mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700 dark:text-white"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7"/>
                      </svg>
                </span>
            <svg className="h-8 w-8 fill-red-600 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                  d="M10 15.5v-7c0-.41.47-.65.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5c-.33.25-.8.01-.8-.4Zm11.96-4.45c.58 6.26-4.64 11.48-10.9 10.9 -4.43-.41-8.12-3.85-8.9-8.23 -.26-1.42-.19-2.78.12-4.04 .14-.58.76-.9 1.31-.7v0c.47.17.75.67.63 1.16 -.2.82-.27 1.7-.19 2.61 .37 4.04 3.89 7.25 7.95 7.26 4.79.01 8.61-4.21 7.94-9.12 -.51-3.7-3.66-6.62-7.39-6.86 -.83-.06-1.63.02-2.38.2 -.49.11-.99-.16-1.16-.64v0c-.2-.56.12-1.17.69-1.31 1.79-.43 3.75-.41 5.78.37 3.56 1.35 6.15 4.62 6.5 8.4ZM5.5 4C4.67 4 4 4.67 4 5.5 4 6.33 4.67 7 5.5 7 6.33 7 7 6.33 7 5.5 7 4.67 6.33 4 5.5 4Z"></path>
            </svg>
            <div className="tracking-wide dark:text-white flex-1">Group 7 - COMP0022<span className="text-red-600">.</span></div>

            <div className="relative items-center content-center flex ml-2">
                    <span className="text-gray-400 absolute left-4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </span>
              <input type="text"
                     className="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 text-gray-600 dark:text-white  py-3 rounded-full w-full outline-none focus:ring-1"
                     placeholder="Search ...">
              </input>
            </div>
          </header>

          <section>
            <nav className="flex space-x-6 text-gray-400 font-medium">
              <a href="#" className="text-gray-700 dark:text-white font-semibold">Dashboard</a>
              <a href="#" className="hover:text-gray-700 dark:hover:text-white ">Movies</a>
            </nav>

            <div className="dashboard-container">
                {/*<div style={{*/}
                {/*    border: '1px solid #ccc',*/}
                {/*    borderRadius: '10px',*/}
                {/*    padding: '20px',*/}
                {/*    margin: '20px',*/}
                {/*    boxShadow: '0px 0px 10px #ccc',*/}
                {/*    height: '400px'*/}
                {/*}}>*/}
                {/*    /!*<div style={{ height: '100%' }}>*!/*/}
                {/*        <PieChart data={data}/>*/}
                {/*    /!*</div>*!/*/}
                {/*</div>*/}

                    <div className="chart-container">
                        <PieChart data={data}/>
                </div>

              {/*<div className="flex -space-x-1 items-center ">*/}
              {/*  <img className="rounded-full w-7 h-7 shadow-lg border border-white"*/}
              {/*       src="https://api.lorem.space/image/face?w=32&amp;h=32&amp;hash=zsrj8csk" alt="" srcSet="">*/}
              {/*  </img>*/}
              {/*    <img className="rounded-full w-7 h-7 shadow-lg border border-white"*/}
              {/*         src="https://api.lorem.space/image/face?w=32&amp;h=32&amp;hash=zsrj8cck"*/}
              {/*         alt="" srcSet="">*/}
              {/*    </img>*/}
              {/*      <img className="rounded-full w-7 h-7 shadow-lg border border-white"*/}
              {/*           src="https://api.lorem.space/image/face?w=32&amp;h=32&amp;hash=zsfj8cck"*/}
              {/*           alt="" srcSet="">*/}
              {/*      </img>*/}
              {/*        <span className="pl-4 text-xs drop-shadow-lg">+8 friends are watching</span>*/}
              {/*</div>*/}

              {/*<div className="bg-gradient-to-r from-black/30 to-transparent -mx-7 -mb-6 px-7 pb-6 pt-2">*/}
              {/*  <span className="uppercase text-3xl font-semibold drop-shadow-lg ">Inception</span>*/}
              {/*  <div className="text-xs text-gray-200 mt-2">*/}
              {/*    <a href="#" className="">Action</a>,*/}
              {/*    <a href="#" className="">Adventure</a>,*/}
              {/*    <a href="#" className="">Sci-Fi</a>*/}
              {/*  </div>*/}
              {/*  <div className="mt-4 flex space-x-3 items-center">*/}
              {/*    <a href="#"*/}
              {/*       className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-xs inline-block">Watch</a>*/}
              {/*    <a href="#" className="p-2.5 bg-gray-800/80 rounded-lg hover:bg-red-600">*/}
              {/*      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">*/}
              {/*        <path fillRule="evenodd"*/}
              {/*              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"*/}
              {/*              clipRule="evenodd"/>*/}
              {/*      </svg>*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </section>

          {/*<section className="mt-9">*/}
          {/*  <div className="flex items-center justify-between">*/}
          {/*    <span className="font-semibold text-gray-700 text-base dark:text-white">Top Stars</span>*/}
          {/*    <div className="flex items-center space-x-2 fill-gray-500">*/}
          {/*      <svg*/}
          {/*          className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"*/}
          {/*          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">*/}
          {/*        <path d="M13.293 6.293L7.58 12l5.7 5.7 1.41-1.42 -4.3-4.3 4.29-4.293Z"></path>*/}
          {/*      </svg>*/}
          {/*      <svg*/}
          {/*          className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"*/}
          {/*          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">*/}
          {/*        <path d="M10.7 17.707l5.7-5.71 -5.71-5.707L9.27 7.7l4.29 4.293 -4.3 4.29Z"></path>*/}
          {/*      </svg>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className="mt-4 grid grid-cols-2  sm:grid-cols-4 gap-x-5 gap-y-5">*/}
          {/*    <div className="relative rounded-xl overflow-hidden">*/}
          {/*      <img*/}
          {/*          src="https://www.jolie.de/sites/default/files/styles/image_gallery360w/public/2020-02/leonardo-dicaprio-oscars.jpg?h=64dbc2fc&itok=EH0B3oo4"*/}
          {/*          className="object-cover h-full w-full -z-10" alt=""></img>*/}
          {/*        <div*/}
          {/*            className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between">*/}

          {/*          <a href="#"*/}
          {/*             className="p-2.5 bg-gray-800/80 bg-white rounded-lg text-white self-end hover:bg-red-600/80">*/}
          {/*            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"*/}
          {/*                 fill="currentColor">*/}
          {/*              <path fillRule="evenodd"*/}
          {/*                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"*/}
          {/*                    clipRule="evenodd"/>*/}
          {/*            </svg>*/}
          {/*          </a>*/}

          {/*          <div className="self-center flex flex-col items-center space-y-2">*/}
          {/*            <span className="capitalize text-white font-medium drop-shadow-md">Leonardo DiCaprio</span>*/}
          {/*            <span className="text-gray-100 text-xs">+12 Movies</span>*/}

          {/*          </div>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*    <div className="relative rounded-xl overflow-hidden ">*/}
          {/*      <img*/}
          {/*          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/WP_-_random_-5_%2814094372762%29.jpg/319px-WP_-_random_-5_%2814094372762%29.jpg"*/}
          {/*          className="object-cover w-full h-full -z-10" alt="">*/}
          {/*      </img>*/}
          {/*        <div*/}
          {/*            className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between">*/}

          {/*          <a href="#" className="p-2.5 bg-gray-800/80 rounded-lg text-white self-end hover:bg-red-600/80">*/}
          {/*            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"*/}
          {/*                 fill="currentColor">*/}
          {/*              <path fillRule="evenodd"*/}
          {/*                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"*/}
          {/*                    clipRule="evenodd"/>*/}
          {/*            </svg>*/}
          {/*          </a>*/}

          {/*          <div className="self-center flex flex-col items-center space-y-2">*/}
          {/*            <span className="capitalize text-white font-medium drop-shadow-md">Joseph Gordon-Levitt</span>*/}
          {/*            <span className="text-gray-300 text-xs">+24 Movies</span>*/}

          {/*          </div>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*    <div className="relative rounded-xl overflow-hidden ">*/}
          {/*      <img src="https://img.zeit.de/kultur/film/2020-12/elliot-page-tranmann/wide__450x253__mobile__scale_1"*/}
          {/*           className="object-cover h-full w-full -z-10" alt="">*/}
          {/*      </img>*/}
          {/*        <div*/}
          {/*            className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between">*/}

          {/*          <a href="#" className="p-2.5 bg-gray-800/80 rounded-lg text-white self-end hover:bg-red-600/80">*/}
          {/*            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"*/}
          {/*                 fill="currentColor">*/}
          {/*              <path fillRule="evenodd"*/}
          {/*                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"*/}
          {/*                    clipRule="evenodd"/>*/}
          {/*            </svg>*/}
          {/*          </a>*/}

          {/*          <div className="self-center flex flex-col items-center space-y-2">*/}
          {/*            <span className="capitalize text-white font-medium drop-shadow-md">Elliot Page</span>*/}
          {/*            <span className="text-gray-300 text-xs">+10 Movies</span>*/}

          {/*          </div>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*    <div className="relative rounded-xl overflow-hidden ">*/}
          {/*      <img src="https://de.web.img3.acsta.net/c_310_420/pictures/16/01/19/11/06/274206.jpg"*/}
          {/*           className="object-cover h-full w-full -z-10" alt="">*/}
          {/*      </img>*/}
          {/*        <div*/}
          {/*            className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between">*/}

          {/*          <a href="#" className="p-2.5 bg-gray-800/80 rounded-lg text-white self-end hover:bg-red-600/80">*/}
          {/*            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"*/}
          {/*                 fill="currentColor">*/}
          {/*              <path fillRule="evenodd"*/}
          {/*                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"*/}
          {/*                    clipRule="evenodd"/>*/}
          {/*            </svg>*/}
          {/*          </a>*/}

          {/*          <div className="self-center flex flex-col items-center space-y-2">*/}
          {/*            <span className="capitalize text-white font-medium drop-shadow-md">Tom Hardy</span>*/}
          {/*            <span className="text-gray-300 text-xs">+27 Movies</span>*/}

          {/*          </div>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</section>*/}

          <section className="mt-9">
            {/*<div className="flex items-center justify-between">*/}
            {/*  <span className="font-semibold text-gray-700 text-base dark:text-white">Similar Movies</span>*/}
            {/*  <div className="flex items-center space-x-2 fill-gray-500">*/}
            {/*    <svg*/}
            {/*        className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"*/}
            {/*        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">*/}
            {/*      <path d="M13.293 6.293L7.58 12l5.7 5.7 1.41-1.42 -4.3-4.3 4.29-4.293Z"></path>*/}
            {/*    </svg>*/}
            {/*    <svg*/}
            {/*        className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"*/}
            {/*        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">*/}
            {/*      <path d="M10.7 17.707l5.7-5.71 -5.71-5.707L9.27 7.7l4.29 4.293 -4.3 4.29Z"></path>*/}
            {/*    </svg>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*<div className="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">*/}
            {/*  <div className="flex flex-col rounded-xl overflow-hidden aspect-square border dark:border-zinc-600">*/}
            {/*    <img src="https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg"*/}
            {/*         className=" h-4/5 object-cover w-full  " alt="">*/}
            {/*    </img>*/}
            {/*      <div*/}
            {/*          className="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">*/}
            {/*        <span className="capitalize  font-medium truncate">Tenet</span>*/}
            {/*        <div className="flex space-x-2 items-center text-xs">*/}
            {/*          <svg className="w-8 h-5" xmlns="http://www.w3.org/2000/svg" width="64" height="32"*/}
            {/*               viewBox="0 0 64 32" version="1.1">*/}
            {/*            <g fill="#F5C518">*/}
            {/*              <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>*/}
            {/*            </g>*/}
            {/*            <g transform="translate(8.000000, 7.000000)" fill="#000000" fillRule="nonzero">*/}
            {/*              <polygon points="0 18 5 18 5 0 0 0"></polygon>*/}
            {/*              <path*/}
            {/*                  d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>*/}
            {/*              <path*/}
            {/*                  d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>*/}
            {/*              <path*/}
            {/*                  d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>*/}
            {/*            </g>*/}
            {/*          </svg>*/}
            {/*          <span>7.4</span>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*  </div>*/}
            {/*  <div className="flex flex-col rounded-xl overflow-hidden aspect-square border dark:border-zinc-600">*/}
            {/*    <img src="https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg"*/}
            {/*         className=" h-4/5 object-cover w-full  " alt="">*/}
            {/*    </img>*/}
            {/*      <div*/}
            {/*          className="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">*/}
            {/*        <span className="capitalize  font-medium truncate">Fight Club</span>*/}
            {/*        <div className="flex space-x-2 items-center text-xs">*/}
            {/*          <svg className="w-8 h-5" xmlns="http://www.w3.org/2000/svg" width="64" height="32"*/}
            {/*               viewBox="0 0 64 32" version="1.1">*/}
            {/*            <g fill="#F5C518">*/}
            {/*              <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>*/}
            {/*            </g>*/}
            {/*            <g transform="translate(8.000000, 7.000000)" fill="#000000" fillRule="nonzero">*/}
            {/*              <polygon points="0 18 5 18 5 0 0 0"></polygon>*/}
            {/*              <path*/}
            {/*                  d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>*/}
            {/*              <path*/}
            {/*                  d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>*/}
            {/*              <path*/}
            {/*                  d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>*/}
            {/*            </g>*/}
            {/*          </svg>*/}
            {/*          <span>8.8</span>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*  </div>*/}
            {/*  <div className="flex flex-col rounded-xl overflow-hidden aspect-square border dark:border-zinc-600">*/}
            {/*    <img src="https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg"*/}
            {/*         className=" h-4/5 object-cover w-full  " alt="">*/}
            {/*    </img>*/}
            {/*      <div*/}
            {/*          className="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">*/}
            {/*        <span className="capitalize  font-medium truncate">Dune</span>*/}
            {/*        <div className="flex space-x-2 items-center text-xs">*/}
            {/*          <svg className="w-8 h-5" xmlns="http://www.w3.org/2000/svg" width="64" height="32"*/}
            {/*               viewBox="0 0 64 32" version="1.1">*/}
            {/*            <g fill="#F5C518">*/}
            {/*              <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>*/}
            {/*            </g>*/}
            {/*            <g transform="translate(8.000000, 7.000000)" fill="#000000" fillRule="nonzero">*/}
            {/*              <polygon points="0 18 5 18 5 0 0 0"></polygon>*/}
            {/*              <path*/}
            {/*                  d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>*/}
            {/*              <path*/}
            {/*                  d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>*/}
            {/*              <path*/}
            {/*                  d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>*/}
            {/*            </g>*/}
            {/*          </svg>*/}
            {/*          <span>8.1</span>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*  </div>*/}


            {/*</div>*/}
          </section>

        </main>

        {/*<aside*/}
        {/*    className=" w-1/5 py-10 px-10  min-w-min  border-l border-gray-300 dark:border-zinc-700 hidden lg:block ">*/}

        {/*  <div className="relative items-center content-center flex">*/}
        {/*        <span className="text-gray-400 absolute left-4 cursor-pointer">*/}
        {/*            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"*/}
        {/*                 stroke="currentColor">*/}
        {/*                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
        {/*                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>*/}
        {/*            </svg>*/}
        {/*        </span>*/}
        {/*    <input type="text"*/}
        {/*           className="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 text-gray-600 dark:text-white  py-3 rounded-full w-full outline-none focus:ring-1"*/}
        {/*           placeholder="Search ...">*/}
        {/*    </input>*/}
        {/*  </div>*/}

        {/*  <div className="mt-10">*/}
        {/*    <span className="font-semibold text-gray-700 dark:text-white">Popular Movies</span>*/}
        {/*    <ul className="mt-4 text-gray-400 text-xs space-y-3">*/}
        {/*      <li className="flex space-y-3 space-x-3 ">*/}
        {/*        <img src="https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"*/}
        {/*             className="w-1/3 rounded-md" alt="">*/}
        {/*        </img>*/}
        {/*          <div className="flex flex-col justify-between  ">*/}
        {/*            <div className="flex flex-col space-y-1">*/}
        {/*              <span className="text-gray-700 dark:text-white font-semibold">The Shawshank Redemption</span>*/}
        {/*              <span className="text-xxs hidden xl:block">Drama</span>*/}
        {/*            </div>*/}
        {/*            <div className="flex space-x-2 items-center">*/}
        {/*              <svg className="w-8 h-5" xmlns="http://www.w3.org/2000/svg" width="64" height="32"*/}
        {/*                   viewBox="0 0 64 32" version="1.1">*/}
        {/*                <g fill="#F5C518">*/}
        {/*                  <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>*/}
        {/*                </g>*/}
        {/*                <g transform="translate(8.000000, 7.000000)" fill="#000000" fillRule="nonzero">*/}
        {/*                  <polygon points="0 18 5 18 5 0 0 0"></polygon>*/}
        {/*                  <path*/}
        {/*                      d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>*/}
        {/*                  <path*/}
        {/*                      d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>*/}
        {/*                  <path*/}
        {/*                      d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>*/}
        {/*                </g>*/}
        {/*              </svg>*/}
        {/*              <span>9.2</span>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*      </li>*/}
        {/*      <li className="flex space-x-3 ">*/}
        {/*        <img src="https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"*/}
        {/*             className="object-cover w-1/3 rounded-md" alt="">*/}
        {/*        </img>*/}
        {/*          <div className="flex flex-col justify-between  ">*/}
        {/*            <div className="flex flex-col space-y-1">*/}
        {/*              <span className="text-gray-700 dark:text-white font-semibold">The Dark Knight</span>*/}
        {/*              <span className="text-xxs hidden xl:block">Action, Crime, Drama</span>*/}
        {/*            </div>*/}
        {/*            <div className="flex space-x-2 items-center">*/}
        {/*              <svg className="w-8 h-5" xmlns="http://www.w3.org/2000/svg" width="64" height="32"*/}
        {/*                   viewBox="0 0 64 32" version="1.1">*/}
        {/*                <g fill="#F5C518">*/}
        {/*                  <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>*/}
        {/*                </g>*/}
        {/*                <g transform="translate(8.000000, 7.000000)" fill="#000000" fillRule="nonzero">*/}
        {/*                  <polygon points="0 18 5 18 5 0 0 0"></polygon>*/}
        {/*                  <path*/}
        {/*                      d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>*/}
        {/*                  <path*/}
        {/*                      d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>*/}
        {/*                  <path*/}
        {/*                      d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>*/}
        {/*                </g>*/}
        {/*              </svg>*/}
        {/*              <span>9.1</span>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*      </li>*/}
        {/*      <li className="flex space-x-3 ">*/}
        {/*        <img src="https://m.media-amazon.com/images/I/81vZ6tNxuoL._SY500_.jpg"*/}
        {/*             className="object-cover w-1/3 rounded-md" alt="">*/}
        {/*        </img>*/}
        {/*          <div className="flex flex-col justify-between  ">*/}
        {/*            <div className="flex flex-col space-y-1">*/}
        {/*              <span className="text-gray-700 dark:text-white font-semibold">John Wick 4</span>*/}
        {/*              <span className="text-xxs hidden xl:block">Action, Crime, Thriller</span>*/}
        {/*            </div>*/}
        {/*            <div className="flex space-x-2 items-center">*/}
        {/*              <svg className="w-8 h-5" xmlns="http://www.w3.org/2000/svg" width="64" height="32"*/}
        {/*                   viewBox="0 0 64 32" version="1.1">*/}
        {/*                <g fill="#F5C518">*/}
        {/*                  <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>*/}
        {/*                </g>*/}
        {/*                <g transform="translate(8.000000, 7.000000)" fill="#000000" fillRule="nonzero">*/}
        {/*                  <polygon points="0 18 5 18 5 0 0 0"></polygon>*/}
        {/*                  <path*/}
        {/*                      d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>*/}
        {/*                  <path*/}
        {/*                      d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>*/}
        {/*                  <path*/}
        {/*                      d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>*/}
        {/*                </g>*/}
        {/*              </svg>*/}
        {/*              <span>7.4</span>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*      </li>*/}
        {/*      <li className="pt-1">*/}
        {/*        <a href="#"*/}
        {/*           className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white">See*/}
        {/*          More</a>*/}
        {/*      </li>*/}

        {/*    </ul>*/}
        {/*  </div>*/}
        {/*  <div className="mt-10">*/}
        {/*    <span className="font-semibold text-gray-700 dark:text-white">Favorites</span>*/}
        {/*    <ul className="mt-4 text-gray-400 text-xs space-y-3">*/}
        {/*      <li className="flex space-x-3 ">*/}
        {/*        <img src="https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"*/}
        {/*             className="object-cover w-1/3 rounded-md" alt="">*/}
        {/*        </img>*/}
        {/*          <div className="flex flex-col justify-between  ">*/}
        {/*            <div className="flex flex-col space-y-1">*/}
        {/*              <span className="text-gray-700 dark:text-white font-semibold">The Matrix</span>*/}
        {/*              <span className="text-xxs hidden xl:block">Action, Sci-Fi</span>*/}
        {/*            </div>*/}
        {/*            <div className="flex space-x-2 items-center">*/}
        {/*              <svg className="w-8 h-5" xmlns="http://www.w3.org/2000/svg" width="64" height="32"*/}
        {/*                   viewBox="0 0 64 32" version="1.1">*/}
        {/*                <g fill="#F5C518">*/}
        {/*                  <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>*/}
        {/*                </g>*/}
        {/*                <g transform="translate(8.000000, 7.000000)" fill="#000000" fillRule="nonzero">*/}
        {/*                  <polygon points="0 18 5 18 5 0 0 0"></polygon>*/}
        {/*                  <path*/}
        {/*                      d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>*/}
        {/*                  <path*/}
        {/*                      d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>*/}
        {/*                  <path*/}
        {/*                      d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>*/}
        {/*                </g>*/}
        {/*              </svg>*/}
        {/*              <span>8.7</span>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*      </li>*/}
        {/*      <li className="flex space-x-3 ">*/}
        {/*        <img src="https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"*/}
        {/*             className="object-cover w-1/3 rounded-md" alt="">*/}
        {/*        </img>*/}
        {/*          <div className="flex flex-col justify-between  ">*/}
        {/*            <div className="flex flex-col space-y-1">*/}
        {/*              <span className="text-gray-700 dark:text-white font-semibold">Interstellar</span>*/}
        {/*              <span className="text-xxs hidden xl:block">Adventure, Crime, Sci-Fi</span>*/}
        {/*            </div>*/}
        {/*            <div className="flex space-x-2 items-center">*/}
        {/*              <svg className="w-8 h-5" xmlns="http://www.w3.org/2000/svg" width="64" height="32"*/}
        {/*                   viewBox="0 0 64 32" version="1.1">*/}
        {/*                <g fill="#F5C518">*/}
        {/*                  <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>*/}
        {/*                </g>*/}
        {/*                <g transform="translate(8.000000, 7.000000)" fill="#000000" fillRule="nonzero">*/}
        {/*                  <polygon points="0 18 5 18 5 0 0 0"></polygon>*/}
        {/*                  <path*/}
        {/*                      d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>*/}
        {/*                  <path*/}
        {/*                      d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>*/}
        {/*                  <path*/}
        {/*                      d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>*/}
        {/*                </g>*/}
        {/*              </svg>*/}
        {/*              <span>8.6</span>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*      </li>*/}
        {/*      <li className="flex space-x-3 ">*/}
        {/*        <img src="https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg"*/}
        {/*             className="object-cover w-1/3 rounded-md" alt="">*/}
        {/*        </img>*/}
        {/*          <div className="flex flex-col justify-between  ">*/}
        {/*            <div className="flex flex-col space-y-1">*/}
        {/*              <span className="text-gray-700 dark:text-white font-semibold">The Silence of the Lambs</span>*/}
        {/*              <span className="text-xxs hidden xl:block">Crime, Drama, Thriller</span>*/}
        {/*            </div>*/}
        {/*            <div className="flex space-x-2 items-center">*/}
        {/*              <svg className="w-8 h-5" xmlns="http://www.w3.org/2000/svg" width="64" height="32"*/}
        {/*                   viewBox="0 0 64 32" version="1.1">*/}
        {/*                <g fill="#F5C518">*/}
        {/*                  <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>*/}
        {/*                </g>*/}
        {/*                <g transform="translate(8.000000, 7.000000)" fill="#000000" fillRule="nonzero">*/}
        {/*                  <polygon points="0 18 5 18 5 0 0 0"></polygon>*/}
        {/*                  <path*/}
        {/*                      d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>*/}
        {/*                  <path*/}
        {/*                      d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>*/}
        {/*                  <path*/}
        {/*                      d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>*/}
        {/*                </g>*/}
        {/*              </svg>*/}
        {/*              <span>8.6</span>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*      </li>*/}
        {/*      <li className="pt-1">*/}
        {/*        <a href="#"*/}
        {/*           className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-center font-medium block text-white">See*/}
        {/*          More</a>*/}
        {/*      </li>*/}

        {/*    </ul>*/}
        {/*  </div>*/}
        {/*</aside>*/}
      </div>
    </main>
  );
}