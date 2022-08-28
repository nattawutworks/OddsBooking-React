import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingPreviewPage from "./page/booking-preview/booking-preview";
import BookingPage from "./page/booking/booking";

function ApplicationRoute () : JSX.Element {
    return (<Routes>
        <Route path="" element={<BookingPage/>}/>
        <Route path="preview" element={<BookingPreviewPage/>}/>
    </Routes>);
}

export default ApplicationRoute;