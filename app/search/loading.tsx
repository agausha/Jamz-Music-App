"use client";

import { CircleLoader } from "react-spinners";

import Box from "@/components/box/Box";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <CircleLoader color="#22c55e" size={40} />
    </Box>
  );
};

export default Loading;
