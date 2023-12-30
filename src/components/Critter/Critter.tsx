import { useState } from "react";
import { CritterInterface } from "../../context/types";
import { CritterWrapper, Flag, Icon } from "./Critter.styled";
import { useCritterContext } from "../../context/CritterContext";

type CritterProps = {
  critter: CritterInterface;
};

export const Critter = ({ critter }: CritterProps) => {
  const { setSelectedCritter } = useCritterContext();
  const [isDonated, setIsDonated] = useState(false);
  return (
    <CritterWrapper onClick={() => setSelectedCritter(critter)}>
      {true && (
        <Flag
          width="28"
          height="17"
          viewBox="0 0 28 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.7778 0H0V16.6666H27.7778L17.3611 8.10815L27.7778 0ZM8.04321 3.2616C8.24658 2.91284 8.75342 2.91284 8.95679 3.2616L10.3906 5.71802C10.4912 5.89026 10.665 6.00793 10.8633 6.0376L13.55 6.44104C14.0015 6.50891 14.1597 7.07532 13.8081 7.36475L11.8066 9.01343C11.6213 9.16602 11.5342 9.40674 11.5791 9.64172L12.1028 12.3754C12.1855 12.8075 11.7292 13.1432 11.3376 12.9384L8.80762 11.6139C8.61499 11.5131 8.38501 11.5131 8.19238 11.6139L5.66235 12.9384C5.27075 13.1432 4.81445 12.8075 4.89722 12.3754L5.4209 9.64172C5.46582 9.40674 5.37866 9.16602 5.19336 9.01343L3.19165 7.36475C2.84033 7.07532 2.99854 6.50891 3.44995 6.44104L6.13672 6.0376C6.27612 6.01672 6.40356 5.95239 6.50171 5.85608C6.54321 5.81543 6.57959 5.76917 6.60938 5.71802L8.04321 3.2616Z"
            fill="black"
          />

          {/* <path
            d="M0 0L27.7778 0L17.3611 8.10811L27.7778 16.6667H0L0 0Z"
            fill="black"
          /> */}
        </Flag>
      )}
      <Icon src={critter.image_url} />
    </CritterWrapper>
  );
};
