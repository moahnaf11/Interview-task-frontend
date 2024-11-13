import { useState } from "react";

function App() {
  const [social, setSocial] = useState({
    whatsapp: false,
    telegram: false,
    instagram: false,
  });

  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");

  function handleSocial(platform) {
    setSocial((prev) => {
      const newState = {
        ...prev,
        whatsapp: platform === "whatsapp",
        telegram: platform === "telegram",
        instagram: platform === "instagram",
      };
      return newState;
    });
    setSelectedPlatform(platform); // Update selected platform
    setDialogOpen(true); // Open the dialog
  }

  function closeDialog() {
    setDialogOpen(false); // Close dialog
    setSocial({
      whatsapp: false,
      telegram: false,
      instagram: false,
    });
    setLink("");
    setName("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("platform", selectedPlatform);
    const data = { name, link };

    try {
      const response = await fetch(
        `http://localhost:3000/api/add${selectedPlatform}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        alert(`${selectedPlatform} added successfully!`);
        const data = await response.json();
        console.log(data);
        closeDialog();
      } else {
        alert("Error adding data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit.");
    }
  }

  return (
    <>
      <header className="bg-purple-700 gap-4 flex p-3 items-center">
        <h1 className="text-white font-bold text-xl">GirGir Auction</h1>
        <form className="border-1 flex border-black" action="#">
          <input
            className="min-w-[400px] px-2 py-1 rounded-md"
            type="text"
            placeholder="Search for inventory, Auction, Dealers, more..."
          />
          <button
            className="bg-black rounded-md px-2 py-1 text-white flex justify-center items-center"
            type="submit"
          >
            Search
          </button>
        </form>

        <nav className="ml-[30px]">
          <ul className="flex items-center gap-4 text-white">
            <li>English</li>
            <li>Currency</li>
            <li>Location</li>
          </ul>
        </nav>

        <div className="ml-auto text-white">Hi salah</div>
      </header>

      <div className="flex justify-between bg-black text-white p-2">
        <ul className="flex">
          <li className="px-2 py-1">Home</li>
          <li className="px-2 py-1">About</li>
          <li className="px-2 py-1">Contact Us</li>
        </ul>

        <ul className="flex gap-2 items-center">
          <li className="px-2 py-1 bg-blue-600 rounded-md">
            <button>Sell Your Items</button>
          </li>
          <li className="px-2 py-1 bg-blue-600 rounded-md">
            <button>How to bid</button>
          </li>
          <li className="px-2 py-1 bg-orange-600 rounded-md">
            <button>Services</button>
          </li>
        </ul>
      </div>

      <main className="p-3 min-h-screen relative">
        <div className="flex min-h-screen">
          <button className="self-start p-2 flex items-center gap-2">
            <svg
              className="size-6"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#000000"
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                ></path>
                <path
                  fill="#000000"
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                ></path>
              </g>
            </svg>
            Simon Junior
          </button>

          <section className="min-h-screen mx-auto">
            <div className="relative">
              <img
                className="w-full"
                src="https://placehold.co/400x300"
                alt="place holder image"
              />
              <img
                className="rounded-full bg-black absolute top-[90%]"
                src="https://placehold.co/120x120"
                alt="profile image"
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Simon Junior</h3>
              <div className="flex items-center gap-4">
                <div>Ogsi Moon</div>
                <div className="text-blue-700">Owner</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleSocial("whatsapp")}>
                  <svg
                    className="size-6"
                    viewBox="-2.73 0 1225.016 1225.016"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="#E0E0E0"
                        d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"
                      ></path>
                      <linearGradient
                        id="a"
                        gradientUnits="userSpaceOnUse"
                        x1="609.77"
                        y1="1190.114"
                        x2="609.77"
                        y2="21.084"
                      >
                        <stop offset="0" stop-color="#20b038"></stop>
                        <stop offset="1" stop-color="#60d66a"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"
                      ></path>
                      <image
                        overflow="visible"
                        opacity=".08"
                        width="682"
                        height="639"
                        xlink:href="FCC0802E2AF8A915.png"
                        transform="translate(270.984 291.372)"
                      ></image>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        fill="#FFF"
                        d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"
                      ></path>
                    </g>
                  </svg>
                </button>
                <button onClick={() => handleSocial("instagram")}>
                  <svg
                    className="size-6"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint0_radial_87_7153)"
                      ></rect>{" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint1_radial_87_7153)"
                      ></rect>{" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint2_radial_87_7153)"
                      ></rect>{" "}
                      <path
                        d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                        fill="white"
                      ></path>{" "}
                      <defs>
                        {" "}
                        <radialGradient
                          id="paint0_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                        >
                          {" "}
                          <stop stop-color="#B13589"></stop>{" "}
                          <stop offset="0.79309" stop-color="#C62F94"></stop>{" "}
                          <stop offset="1" stop-color="#8A3AC8"></stop>{" "}
                        </radialGradient>{" "}
                        <radialGradient
                          id="paint1_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                        >
                          {" "}
                          <stop stop-color="#E0E8B7"></stop>{" "}
                          <stop offset="0.444662" stop-color="#FB8A2E"></stop>{" "}
                          <stop offset="0.71474" stop-color="#E2425C"></stop>{" "}
                          <stop
                            offset="1"
                            stop-color="#E2425C"
                            stop-opacity="0"
                          ></stop>{" "}
                        </radialGradient>{" "}
                        <radialGradient
                          id="paint2_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                        >
                          {" "}
                          <stop
                            offset="0.156701"
                            stop-color="#406ADC"
                          ></stop>{" "}
                          <stop offset="0.467799" stop-color="#6A45BE"></stop>{" "}
                          <stop
                            offset="1"
                            stop-color="#6A45BE"
                            stop-opacity="0"
                          ></stop>{" "}
                        </radialGradient>{" "}
                      </defs>{" "}
                    </g>
                  </svg>
                </button>
                <button className="size-6">
                  <svg
                    viewBox="0 0 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>Facebook-color</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Icons"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Color-"
                          transform="translate(-200.000000, -160.000000)"
                          fill="#4460A0"
                        >
                          {" "}
                          <path
                            d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                            id="Facebook"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </button>
                <button>
                  <svg
                    className="size-6"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="#1DA1F2"
                      ></circle>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z"
                        fill="white"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
                <button>
                  <svg
                    className="size-6"
                    viewBox="0 -7 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>Youtube-color</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Icons"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Color-"
                          transform="translate(-200.000000, -368.000000)"
                          fill="#CE1312"
                        >
                          {" "}
                          <path
                            d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z"
                            id="Youtube"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </button>
                <button onClick={() => handleSocial("telegram")}>
                  <svg
                    className="size-6"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="url(#paint0_linear_87_7225)"
                      ></circle>{" "}
                      <path
                        d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                        fill="white"
                      ></path>{" "}
                      <defs>
                        {" "}
                        <linearGradient
                          id="paint0_linear_87_7225"
                          x1="16"
                          y1="2"
                          x2="16"
                          y2="30"
                          gradientUnits="userSpaceOnUse"
                        >
                          {" "}
                          <stop stop-color="#37BBFE"></stop>{" "}
                          <stop offset="1" stop-color="#007DBB"></stop>{" "}
                        </linearGradient>{" "}
                      </defs>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <button className="rounded-md bg-gray-300 px-2 py-1">Home</button>
              <button className="rounded-md bg-gray-300 px-2 py-1">
                Properties
              </button>
              <button className="rounded-md bg-gray-300 px-2 py-1">
                Services
              </button>
              <button className="rounded-md bg-gray-300 px-2 py-1">News</button>
              <button className="rounded-md bg-gray-300 px-2 py-1">
                Location
              </button>
              <button className="rounded-md bg-gray-300 px-2 py-1">
                Management
              </button>
              <button className="rounded-md bg-gray-300 px-2 py-1">
                About
              </button>
            </div>
          </section>
        </div>
        {dialogOpen && (
          <dialog
            className="min-w-[70%] p-3 border-2 border-black absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            open
          >
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-xl">
                {selectedPlatform + " "}
                Dialog
              </h2>
              <button
                onClick={closeDialog}
                className="border-2 border-red-500 bg-red-500 hover:bg-white px-2 py-1"
              >
                Close
              </button>
            </div>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col gap-3"
              action="#"
            >
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  className="border-black border-2 px-2 py-1"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="link">Link</label>
                <input
                  className="border-black border-2 px-2 py-1"
                  type="text"
                  id="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="link"
                  required
                />
              </div>
              <button
                className="max-w-[40%] bg-green-400 hover:bg-white border-green-400 self-center border-2 px-2 py-1"
                type="submit"
              >
                Submit
              </button>
            </form>
          </dialog>
        )}
      </main>
    </>
  );
}

export default App;
