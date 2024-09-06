export default function About() {
  return (
    <div className="sm:mt-[130px] mt-[100px] container" id="about">
      <div className=" mx-auto max-w-screen-xl text-center">
        <div id="title_container" className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 sm:text-4xl text-3xl tracking-tight font-extrabold text-gray-900">
            Our Team
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl ">
            Meet the team behind our exceptional car collection, dedicated to
            delivering an outstanding experience to every customer.
          </p>
        </div>
      </div>

      <div className="grid grid-col-1 lg:grid-cols-3 sm:grid-cols-2 gap-8 max-md:justify-center mt-12">
        <div className="border rounded-md overflow-hidden w-full sm:max-w-[300px]">
          <img
            src="https://readymadeui.com/team-1.webp"
            className="w-full h-60 object-contain object-top  bg-gray-200"
          />

          <div className="p-4">
            <h4 className="text-gray-800 text-lg font-bold">Ryan Doe</h4>
            <p className="text-gray-600 text-base mt-1">General Manager</p>

            <div className="space-x-4 mt-4">
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 155.139 155.139"
                >
                  <path
                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                    data-original="#010002"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                    data-original="#03a9f4"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                    data-original="#0077b5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
          <img
            src="https://readymadeui.com/team-2.webp"
            className="w-full h-60 object-contain object-top bg-gray-200"
          />

          <div className="p-4">
            <h4 className="text-gray-800 text-lg font-bold">Mark Adair</h4>
            <p className="text-gray-600 text-base mt-1">
              General Sales Manager
            </p>

            <div className="space-x-4 mt-4">
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 155.139 155.139"
                >
                  <path
                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                    data-original="#010002"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                    data-original="#03a9f4"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                    data-original="#0077b5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
          <img
            src="https://readymadeui.com/team-3.webp"
            className="w-full h-60 object-contain object-top bg-gray-200"
          />

          <div className="p-4">
            <h4 className="text-gray-800 text-lg font-bold">
              Madeline Konecki
            </h4>
            <p className="text-gray-600 text-lg mt-1">Service Director</p>

            <div className="space-x-4 mt-4">
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 155.139 155.139"
                >
                  <path
                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                    data-original="#010002"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                    data-original="#03a9f4"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                    data-original="#0077b5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
          <img
            src="https://readymadeui.com/team-4.webp"
            className="w-full h-60 object-contain object-top bg-gray-200"
          />

          <div className="p-4">
            <h4 className="text-gray-800 text-lg font-bold">Sophia</h4>
            <p className="text-gray-600 text-base mt-1">Inventory Manager</p>

            <div className="space-x-4 mt-4">
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 155.139 155.139"
                >
                  <path
                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                    data-original="#010002"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                    data-original="#03a9f4"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                    data-original="#0077b5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
          <img
            src="https://readymadeui.com/team-5.webp"
            className="w-full h-60 object-contain object-top bg-gray-200"
          />

          <div className="p-4">
            <h4 className="text-gray-800 text-lg font-bold">Alen</h4>
            <p className="text-gray-600 text-base mt-1">Office Manager</p>

            <div className="space-x-4 mt-4">
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 155.139 155.139"
                >
                  <path
                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                    data-original="#010002"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                    data-original="#03a9f4"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                    data-original="#0077b5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
          <img
            src="https://readymadeui.com/team-6.webp"
            className="w-full h-60 object-contain object-top bg-gray-200"
          />

          <div className="p-4">
            <h4 className="text-gray-800 text-lg font-bold">Eleanor</h4>
            <p className="text-gray-600 text-base mt-1">CEO</p>

            <div className="space-x-4 mt-4">
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 155.139 155.139"
                >
                  <path
                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                    data-original="#010002"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                    data-original="#03a9f4"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                    data-original="#0077b5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
