import React from "react";

const SearchForm = () => {
  return (
    <div>
      <form class="flex flex-col md:flex-row gap-3">
        <div class="flex">
          <input
            type="text"
            placeholder="Search for the tool you like"
            class="w-full md:w-80 px-3 h-10 rounded-l-full border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          />
          <button
            type="submit"
            class="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
          >
            Search
          </button>
        </div>
        <select
          id="pricingType"
          name="pricingType"
          class="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        >
          <option className="rounded-l-full" value="All" selected="">
            All
          </option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </form>
    </div>
  );
};

export default SearchForm;
