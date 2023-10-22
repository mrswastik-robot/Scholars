"use client"

import React, { useEffect, useState } from "react";
import firebase from 'firebase/app'; // Import Firebase
import 'firebase/firestore'; // Import Firestore

import {db, auth} from "../utils/firebase";
import { collection, onSnapshot ,orderBy, query } from 'firebase/firestore';


type Event = {
  event_name: string;
  // Add other event details as needed
};

type Props = {};

const Events = (props: Props) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Create a reference to the "events" collection in Firestore
    const eventsCollection = collection(db,"events");

    // Set up a listener for the collection using onSnapshot
    const q = query(eventsCollection, orderBy("event_name"));
    const unsubscribe = onSnapshot(q ,(snapshot) => {
      const eventList: Event[] = [];
      snapshot.forEach((doc) => {
        const eventData = doc.data() as Event;
        eventList.push(eventData);
      });
      setEvents(eventList);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []); // The empty dependency array ensures this effect runs once

  return (
    <div>
      <div className="text-center">
        <p className="text-3xl font-bold">Events happening around you:</p>
      </div>
      
      {/* Display the events */}
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event.event_name}</li>
          // Add code to display other event details as needed
        ))}
      </ul>
    </div>
  );
};

export default Events;
