const ProjectLogo: React.FC = () => {
  return (
    <svg
      width="159"
      height="44"
      viewBox="0 0 159 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="159" height="44" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_367"
            transform="translate(0 -0.0027668) scale(0.00434783 0.0157115)"
          />
        </pattern>
        <image
          id="image0_1_367"
          width="230"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default ProjectLogo;
