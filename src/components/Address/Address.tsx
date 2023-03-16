import axios from "axios";
import React, { useEffect, useState } from "react";
import AddressList from "./AddressList";

const REQUEST_URL = "https://juso.sendy.ai/app/search/addrSearchApi.do";

interface searchType {
  keyword: string;
  currentPage: string;
  countPerPage: string;
  resultType: JSON;
}

const Address = ({
  keyword,
  currentPage,
  countPerPage,
  resultType,
}: searchType) => {
  const [addresses, setAddresses] = useState([]);
  const temp = new FormData();
  temp.append("keyword", keyword);
  temp.append("currentPage", "1");
  temp.append("countPerPage", "5");
  temp.append("resultType", "json");

  useEffect(() => {
    axios
      .post(REQUEST_URL, temp)
      .then((response) => {
        console.log(response.data);
        setAddresses(response.data.results.juso);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [temp]);
  return (
    <div>
      <AddressList addresses={addresses} />
    </div>
  );
};

export default Address;
