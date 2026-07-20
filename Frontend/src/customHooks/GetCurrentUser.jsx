import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser, setLoading, clearUser } from "../redux/userSlice";

const useGetCurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      dispatch(setLoading(true));

      try {
        const res = await axios.get("http://localhost:8000/api/user/me", {
          withCredentials: true,
        });

        dispatch(setCurrentUser(res.data.user));
      } catch (error) {
        dispatch(clearUser());
        console.log(error.response?.data);
      } finally {
        console.log("Finally executed");
        dispatch(setLoading(false));
      }
    };

    getUser();
  }, [dispatch]);
};

export default useGetCurrentUser;
