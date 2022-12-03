import { Tag } from "@chakra-ui/react";
import React from "react";
import { Enum_Resolution_Type } from "../api/graphql";

const styles = {
  [Enum_Resolution_Type.Normalna]: {
    bgColor: "green.100",
    color: "green.800",
  },
  [Enum_Resolution_Type.Porzadkowa]: {
    bgColor: "yellow.100",
    color: "yellow.800",
  },
};

export const ResolutionType = ({
  resolutionType,
}: {
  resolutionType: Enum_Resolution_Type;
}) => {
  return (
    <Tag variant="solid" {...styles[resolutionType]}>
      {resolutionType}
    </Tag>
  );
};
