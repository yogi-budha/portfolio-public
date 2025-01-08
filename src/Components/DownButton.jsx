function DownButton({scrollToSection}) {
  return (
    <div className="w-fit   relative ">
      <button onClick={scrollToSection} className=" px-3 py-1  hover:scale-110 ease-in-out duration-100 bg-[#4595eb] md:py-2 md:px-5 rounded font-semibold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] group self-center ">
        Latest Work{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
          className="w-10 cursor-pointer absolute rotate-90  top-12 translate-x-1/2   group-hover:top-14 ease-in-out duration-100"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#FFFFFF"
            stroke="none"
          >
            <path
              d="M3785 3784 c-97 -50 -140 -163 -100 -262 11 -25 133 -154 378 -399
l362 -363 -2144 0 -2144 0 -43 -25 c-63 -37 -94 -95 -94 -175 0 -80 31 -138
94 -175 l43 -25 2144 0 2144 0 -362 -362 c-245 -246 -367 -375 -378 -400 -34
-83 -6 -183 67 -242 29 -22 51 -30 92 -34 117 -9 76 -42 678 551 303 298 561
560 574 583 34 57 34 151 0 208 -30 52 -1105 1112 -1141 1126 -40 15 -136 12
-170 -6z"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}

export default DownButton;
