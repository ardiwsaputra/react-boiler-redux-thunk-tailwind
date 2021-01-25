import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExample } from "../actions/ajaxActions";

function HeaderComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExample());
  }, []);
  return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">Testing App</h1>
        <p className="text-base text-gray-700 leading-normal">
          Ini Alamat Contoh di Header
        </p>
      </div>
    </div>
  );
}

export default HeaderComponent;
