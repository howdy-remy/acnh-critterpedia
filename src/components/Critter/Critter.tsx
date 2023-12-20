import { CritterInterface } from "../../context/types";
import { CritterWrapper, Flag, Icon } from "./Critter.styled";

type CritterProps = {
  critter: CritterInterface;
};

export const Critter = ({ critter }: CritterProps) => {
  return (
    <CritterWrapper>
      <Flag
        $isDonated={false}
        width="37"
        height="24"
        viewBox="0 0 37 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0L21.9523 0C23.8562 0 24.6832 2.40878 23.1807 3.57824L19.3345 6.57208C18.3229 7.35947 18.3028 8.88185 19.2933 9.69563L23.4628 13.1214C24.9134 14.3133 24.0706 16.6667 22.1931 16.6667H0L0 0Z" />
      </Flag>
      <Icon src={critter.image_url} />
    </CritterWrapper>
  );
};
