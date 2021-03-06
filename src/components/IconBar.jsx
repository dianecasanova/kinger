import { Button } from "reactstrap";
import { ImCross } from "react-icons/im";
import { BsFillHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import "./IconBar.css";

function IconBar() {
  return (
    <div className="py-4 d-flex justify-content-center iconBar">
      <Button className="btn-outline-light rounded-circle iconButton mt-1">
        <ImCross color="#fe615f" size={25} />
      </Button>
      <Button className="btn-outline-light rounded-circle mx-2 iconButton startIcon">
        <AiFillStar color="#20bbff" size={30} />
      </Button>
      <Button className="btn-outline-light rounded-circle iconButton mt-1">
        <BsFillHeartFill color="#24e5a9" size={25} />
      </Button>
    </div>
  );
}

export default IconBar;
