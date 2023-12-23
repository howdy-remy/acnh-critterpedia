import { ReactNode, RefObject, useEffect, useRef } from "react";
import { useCritterContext } from "../../context/CritterContext";
import {
  Bold,
  Catchphrase,
  Description,
  ExhibitNumber,
  Image,
  SidebarTitle,
  SidebarWrapper,
  Spacer,
} from "./Sidebar.styled";
import { Calendar } from "../Calendar/Calendar";

export const Sidebar = () => {
  const { selectedCritter, setSelectedCritter } = useCritterContext();

  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      // @ts-ignore
      if (ref.current && !ref.current.contains(e.target)) {
        setSelectedCritter(null);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  if (!selectedCritter) return null;
  const {
    catchphrases,
    location,
    name,
    number,
    rarity,
    render_url,
    sell_cj,
    sell_nook,
    shadow_size,
    total_catch,
    north: { availability_array, months_array },
  } = selectedCritter;

  const availability = availability_array.map(({ months, time }) => {
    const lcTime = time.toLowerCase();
    const times = lcTime === "all day" ? lcTime : `from ${lcTime}`;
    return `${months} ${times}`;
  });

  return (
    <SidebarWrapper ref={ref}>
      <SidebarTitle>{name}</SidebarTitle>
      <Image src={render_url} />
      <ExhibitNumber>Exhibit #{number}</ExhibitNumber>
      <Description>
        {name} are a/an <Bold>{rarity}</Bold> fish found in a{" "}
        <Bold>{location}</Bold>. They have a <Bold>{shadow_size}</Bold> shadow
        size. You can sell {name} to Nook’s Cranny for <Bold>{sell_nook}</Bold>{" "}
        bells or to CJ for <Bold>{sell_cj}</Bold> bells.
      </Description>
      {!!total_catch && (
        <Description>
          They will appear after you've caught <Bold>{total_catch}</Bold> fish
        </Description>
      )}
      <Spacer />
      <Description>You can find them {availability.join(" and ")}.</Description>
      <Calendar availableMonths={months_array} />
      <Catchphrase>{catchphrases[0]}</Catchphrase>
    </SidebarWrapper>
  );
};
