import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/utils/firebase';

type Props = {
  eventid: string;
};

const EventDetailCard = (props: Props) => {
  const { eventid } = props;
  const [eventData, setEventData] = useState<any>(null);

  useEffect(() => {
    // Fetch the event data based on the provided eventid
    const fetchEventDetails = async () => {
      try {
        const eventRef = doc(db, 'events', eventid);
        const eventDoc = await getDoc(eventRef);

        if (eventDoc.exists()) {
          const eventData = eventDoc.data();
          setEventData(eventData);
        }
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [eventid]);

  if (!eventData) {
    // Loading or error handling while fetching data
    return <div>Loading...</div>;
  }

  const { event_name ,event_description, event_start_time, event_venue, event_sponsors } = eventData;

  return (
    <div>
      <Card>
        <CardContent>
          <CardHeader>
            <CardTitle>{event_name}</CardTitle>
            <CardDescription>{event_description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <CardTitle>Event Venue</CardTitle>
            <CardDescription>
              {event_venue}
            </CardDescription>
            <CardTitle>Sponsors</CardTitle>
            <CardDescription>{event_sponsors.join(', ')}</CardDescription>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventDetailCard;
