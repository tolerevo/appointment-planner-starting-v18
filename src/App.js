import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, Setcontacts] = useState([]);
  const [appointments, Setappointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    Setcontacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      },
    ]);
  };

  const addAppointment = (name, contact, date, time) => {
    Setappointments([
      ...appointments,
      {
        name: name,
        contact: contact,
        date: date,
        time: time,
      },
    ]);
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
