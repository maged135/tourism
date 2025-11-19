
import { useState, useMemo, useEffect } from "react";
import { destinations } from "../data/destinations";
export default function useDestinationSearch() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [maxPrice, setMaxPrice] = useState(2000);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(handler);
  }, [search]);

  const countries = useMemo(
    () => [...new Set(destinations.map((d) => d.country))],
    []
  );

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesName = dest.name.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesCountry = filterCountry ? dest.country === filterCountry : true;
      const matchesPrice = dest.price <= maxPrice;
      return matchesName && matchesCountry && matchesPrice;
    });
  }, [debouncedSearch, filterCountry, maxPrice]);

  return {
    search,
    setSearch,
    filterCountry,
    setFilterCountry,
    maxPrice,
    setMaxPrice,
    countries,
    filteredDestinations,
  };
}
