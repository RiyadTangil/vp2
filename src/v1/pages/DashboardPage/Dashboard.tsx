import React, { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "../Authpages/ProtectedRoute/ProtectedRoute";
import BottomNavigation from "../../components/MobileViewComponents/BottomNavigation/BottomNavigation";

import { fetchAdminDetails } from "../../redux/actions/AuthActions/fetchAdminDetails";
import { useAppThunkDispatch } from "../../redux/hooks";
import { AdminInterFace } from "../../redux/Types";

const Dashboard = () => {
  const dispatch = useAppThunkDispatch();
  const adminString = localStorage.getItem("admin");
  const admin: AdminInterFace | null = adminString
    ? JSON.parse(adminString)
    : null;

  useEffect(() => {
    if (admin) {
      const AdminResponse = dispatch(fetchAdminDetails());
      AdminResponse.then((result) => {
        console.log(result.message);
        if (!(result.message === "Success")) {
          localStorage.removeItem("authTokens");
          localStorage.removeItem("admin");
          window.location.reload();
        }
      });
    }
  }, []);

  //Mobile View Check
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Routes>
      <Route
        path="/feed/:tab"
        element={<ProtectedRoute component={<BottomNavigation />} />}
      />
    </Routes>
  );
};

export default Dashboard;
