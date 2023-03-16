import React from "react";

interface addressType {
  roadAddr: String;
  jibunAddr: String;
}
const index = [0, 1, 2, 3, 4];
const AddressList = ({ addresses }: any) => {
  return (
    <div>
      {addresses.map(({ roadAddr, jibunAddr }: addressType) => {
        return (
          <div key={index.toString()}>
            {jibunAddr}
            {roadAddr}
          </div>
        );
      })}
    </div>
  );
};

export default AddressList;
