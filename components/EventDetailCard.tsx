import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import Loader from './Loader';

import { gilroyFont } from '@/fonts/font';

import {format} from 'date-fns';

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
    return <Loader />;
  }

  const { event_name ,event_description, event_start_time, event_venue, event_sponsors } = eventData;
  const formattedStartTime = event_start_time ? format(event_start_time.toDate(), 'MMMM d, yyyy H:mm a') : '';

  return (
    <div>
      <Card>
          <CardHeader>
            <CardTitle className={`${gilroyFont.className} text-xl`}>{event_name}</CardTitle>
            <CardDescription>{event_description}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className='space-y-3 '>
              <div className=' flex gap-3'>
                  <CardTitle>Event Venue -</CardTitle>
                  <CardDescription>{event_venue}</CardDescription>
                </div>
                <div className=' flex gap-3'>
                  <CardTitle>Sponsors - </CardTitle>
                  <CardDescription>{event_sponsors.join(', ')}</CardDescription>
                </div>
                <div className=' flex gap-3'>
                  <CardTitle>Event Start Time - </CardTitle>
                  <CardDescription>{formattedStartTime}</CardDescription>
                </div>
            </div>

          </CardContent>
          
      </Card>
    </div>
  );
};

export default EventDetailCard;
