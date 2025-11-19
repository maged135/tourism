import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { destinations } from "../data/destinations";

export default function useDestinationDetails() {
  const params = useParams();
  const router = useRouter();

  const id = parseInt(params.id);
  const destination = destinations.find((d) => d.id === id);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % destination.images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? destination.images.length - 1 : prev - 1
    );
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPeople(1);
    setDate("");
  };

  return {
    destination,
    selectedIndex,
    name,
    email,
    people,
    date,
    setSelectedIndex,
    setName,
    setEmail,
    setPeople,
    setDate,
    nextImage,
    prevImage,
    resetForm,
    router,
  };
}
