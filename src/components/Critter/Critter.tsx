import { Fish } from "../../dataTypes";
import { CritterWrapper, Flag, Icon } from "./Critter.styled";

type CritterProps = {
  critter: Fish;
};
export const Critter = ({ critter }: CritterProps) => {
  return (
    <CritterWrapper>
      <Flag $isDonated={false}>
        <path d="M0 0L34.1745 0C36.0784 0 36.9054 2.40878 35.403 3.57824L26.9734 10.1397C25.9618 10.927 25.9417 12.4494 26.9322 13.2632L35.685 20.4547C37.1357 21.6466 36.2929 24 34.4153 24H0L0 0Z" />
      </Flag>
      <Icon src={critter.image_url} />
    </CritterWrapper>
  );
};
