import React, { useEffect, useState } from "react";
import { truncateText } from "../services/stringFunction";
import { formatterCurrency } from "../services/numberFunction";
import { generalApiUrl } from "../services/axiosConfig";

const Home = () => {
  const [itemCategories, setItemCategories] = useState([]);
  const [itemCategoryValue, setItemCategoryValue] = useState("");

  useEffect(() => {
    fetch(
      `${generalApiUrl}/merchant/1a094799-1c55-4b1a-9cb1-ad288306b948/item-categories`
    )
      .then((response) => response.json())
      .then((data) => {
        setItemCategories(data);
        if (data.length > 0) {
          setItemCategoryValue(data[0].itemCategoryName);
        }
      });
  }, []);

  const filterItems = itemCategories.find(
    (item) => item.itemCategoryName === itemCategoryValue
  );

  const itemList = filterItems ? filterItems.items : [];

  return (
    <div className="sm:p-48 p-10 text-center">
      <div className="mb-12">
        <div className="font-bold text-3xl mb-4 text-gray-700">MENU</div>
        <div className="flex flex-wrap space-x-4 mb-2 justify-center">
          {itemCategories.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setItemCategoryValue(item.itemCategoryName)}
                className={
                  itemCategoryValue.toUpperCase() ===
                  item.itemCategoryName.toUpperCase()
                    ? "text-white bg-yellow-900 px-3 py-2 rounded-md text-lg font-medium mb-4 cursor-pointer"
                    : "text-white bg-yellow-600 hover:bg-yellow-900 px-3 py-2 rounded-md text-lg font-medium mb-4 cursor-pointer"
                }
              >
                {item.itemCategoryName.toUpperCase()}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-1
          md:grid-cols-3
          lg:grid-cols-3
          xl:grid-cols-3
          gap-6
        "
      >
        {itemList.map((item, index) => {
          const description = item.description ? item.description : "";
          return (
            <div class="rounded-lg overflow-hidden shadow-lg" key={index}>
              <img
                class="w-full h-48 object-cover object-center"
                src="http://intiboga.oss-ap-southeast-5.aliyuncs.com/images/1a3c1e80-b2e3-11eb-bff5-7d59c8fbe7eb.jpg?x-oss-process=image/resize,h_500,m_lfit"
                alt="Rendang War Ayam Krispi"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-4 text-gray-700">
                  {item.itemName}
                </div>
                <div class="h-20">
                  <p class="text-gray-700 text-base" id="description">
                    {truncateText(description, 150)}
                  </p>
                </div>
                <div class="font-bold text-xl mt-4 text-yellow-600">
                  {formatterCurrency(item.price)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
