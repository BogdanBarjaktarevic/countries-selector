import { LoaderFunctionArgs } from "react-router-dom";
import Countries from "../components/countries";
import FilterCountry from "../components/filterCountry";
import SearchCountry from "../components/searchCountry";
import { getCountries } from "../service/api/countriesApi";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const countryQuery = url.searchParams.get("country") || "";
  const filterQuery = url.searchParams.get("filter") || "";

  const countries = getCountries(countryQuery, filterQuery);

  return countries;
};

const Root = () => {
  return (
    <>
      <div className="px-5">
        <SearchCountry />
      </div>
      <div className="px-5">
        <FilterCountry />
      </div>
      <div>
        <main className="px-8 flex flex-col gap-12 mt-6">
          <Countries />
        </main>
      </div>
    </>
  );
};

export default Root;