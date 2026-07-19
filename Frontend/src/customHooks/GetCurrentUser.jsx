import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/userSlice";

const useGetCurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/user/me",
          {
            withCredentials: true,
          }
        );

        console.log(res.data);
        dispatch(setCurrentUser(res.data.user));
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };

    getUser();
  }, [dispatch]);
};

export default useGetCurrentUser;