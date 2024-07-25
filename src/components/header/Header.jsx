import { ConHeader } from "./HeaderStyle.style";
import {ReactComponent as Logo} from '../../common/logo/logoHeader.svg';

export const Header = () => {
  return (
    <>
      <ConHeader>
        <div className="innerConHeader">
          <div><Logo/></div>
          <div className="conBtn">
            <button className="btn-users">Users</button>
            <button className="btn-sign">Sign Up</button>
          </div>
        </div>
      </ConHeader>
    </>
  );
};
