import axios from "axios";
import React, { useEffect, useState } from "react";
import AddressList from "./AddressList";

const REQUEST_URL = "https://juso.sendy.ai/app/search/addrSearchApi.do";

interface searchType {
  keyword: string;
  currentPage: string;
  countPerPage: string;
  resultType: JSON;
  setRoad: React.Dispatch<React.SetStateAction<string>>;
  setJibun: React.Dispatch<React.SetStateAction<string>>;
  setConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Address = ({
  keyword,
  currentPage,
  countPerPage,
  resultType,
  setRoad,
  setJibun,
  setConfirmed,
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
  }, [keyword]);
  return (
    <div>
      <AddressList
        addresses={addresses}
        setRoad={setRoad}
        setJibun={setJibun}
        isConfirmed={setConfirmed}
        setAddresses={setAddresses}
      />
    </div>
  );
};

export default Address;
