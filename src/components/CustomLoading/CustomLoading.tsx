import { FC } from "react";
import './CustomLoading.css';

const CustomLoading: FC = () => {
  return (<>
        <div className="flex justify-center items-center h-screen">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
    </>);
}

export default CustomLoading;