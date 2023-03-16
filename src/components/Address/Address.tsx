import axios from "axios";
import React, { useEffect, useState } from "react";
import AddressList from "./AddressList";

const REQUEST_URL = "https://juso.sendy.ai/app/search/addrSearchApi.do";
const Address = ({ searchAddr }: any) => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    axios
      .get(REQUEST_URL, { params: { keyword: { searchAddr } } })
      .then((response) => {
        setAddresses(response.data.result.juso);
        console.log(response.data);
      });
  }, [addresses, searchAddr]);
  return (
    <div>
      <AddressList addresses={addresses} />
    </div>
  );
};

export default Address;
