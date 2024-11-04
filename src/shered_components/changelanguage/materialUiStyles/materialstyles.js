export const getCustomStyles = (style, styforpc) => ({
  backgroundColor: "#98896c",
  color: "white",

  "& .MuiSelect-icon": {
    color: "white",
  },
  "&.Mui-selected": {
    backgroundColor: "rgb(93, 64, 55)",
    color: "white",
  },
  "& .MuiInputBase-root": {
    color: "white",
    padding: 0,
  },
  "& .MuiOutlinedInput-input": {
    fontSize: "16px",
    padding: 0,
    fontFamily: "Times New Roman",
    "@media (min-width:600px)": {
      fontSize: "18px",
    },
    "@media (min-width:960px)": {
      fontSize: style,
    },
    "@media (min-width:1280px)": {
      fontSize: styforpc,
    },
  },

  "& .MuiOutlinedInput-notchedOutline": {
    padding: 0,
    border: "none",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:hover .MuiSelect-icon": {
    color: "rgba(234, 225, 225);",
  },
  "&:hover": {
    color: "rgba(234, 225, 225);",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});
