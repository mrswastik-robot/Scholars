"use client"

import React, { useEffect , useState } from 'react'

// import { useRouter } from 'next/router'
// import { useRouter } from 'next/navigation'
// import { useSearchParams } from 'next/navigation'
// import { useEffect } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle , CardFooter } from '@/components/ui/card'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from "@/components/ui/toast"


import { useForm } from "react-hook-form";
import { registerSchema } from "@/validators/register";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth , db} from '@/utils/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
  getDoc,
  getDocs,
  setDoc
} from "firebase/firestore";
import Image from 'next/image'

import EventDetailCard from '@/components/EventDetailCard'
import CommunityCard from '@/components/CommunityCard'

type Input = z.infer<typeof registerSchema>;

type Props = {
  params: {
    eventid: string
  }
}

const Eventpage = ({params: {eventid}} : Props) => {

  // const router = useRouter()
  // const  eventId  = router.query.eventid
  // console.log(eventId);

  // const searchParams = useSearchParams();
  // const eventId = searchParams.get("eventid");
  // console.log(eventId);

  console.log(eventid);

  const [user , loading] = useAuthState(auth);
  // console.log(user?.uid);
  const [eventImage , setEventImage] = useState<string>("");

  const {toast} = useToast();

  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.log(error);
      
    }
  }

  async function fetchEventImage(eventId: string) {
    const eventRef = doc(db, 'events', eventId); // Construct a reference to the event document
    try {
      const eventSnapshot = await getDoc(eventRef);
      if (eventSnapshot.exists()) {
        const eventData = eventSnapshot.data();
        if (eventData) {
          setEventImage(eventData.event_image);
          console.log(eventImage)
        }
      }
    } catch (error) {
      console.error('Error fetching event image:', error);
    }
  }
  
  useEffect(() => {
    // Fetch the event image when the component mounts
    if (eventid) {
      fetchEventImage(eventid);
    }
  }, [eventid]);
  


  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      name: "",
      studentId: "",
      year: "",
      branch: "",
      college: "",
    },
  });

  // console.log(form.watch());

  async function createUserDocument(data: Input) {
    if (user) {
      const userRef = doc(db, "AllRegistered", user.uid);
      const docSnapshot = await getDoc(userRef);

      if (!docSnapshot.exists()) {
        try {
          await setDoc(userRef, {
            uid: user.uid,
            eventId: eventid,
            email: data.email,
            name: data.name,
            studentId: data.studentId,
            year: data.year,
            branch: data.branch,
            college: data.college,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          });
        } catch (error) {
          console.error("Error creating user document:", error);
        }
      }
    }
  }




  function onSubmit(data: Input) {
    console.log(data);

    createUserDocument(data);

    // Check if a user is authenticated
    if (user) {
      // Create a reference to the specific event's "participants" subcollection
      const participantsCollection = collection(
        db,
        'events',
        eventid, // Assuming eventid is the ID of the event
        'participants'
      );

      // Add a new document to the "participants" subcollection with the student's registration data
      setDoc(doc(participantsCollection, user.uid), {
        email: data.email,
        name: data.name,
        studentId: data.studentId,
        year: data.year,
        branch: data.branch,
        college: data.college,
      })
        .then(() => {
          console.log('Document added with ID: ', user.uid);
          toast({
            title: "Registered successfully",
            description: "You have been registered for the event",
            variant: "success",
          })
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
          toast({
            title: "Registration failed",
            description: "There was an error registering for the event",
            variant: "destructive",
          })
        });
    }
    else {
      toast({
        title: "Registration failed",
        description: "You must be logged in to register for an event",
        variant: "destructive",
        action: <ToastAction altText='Login' onClick={GoogleLogin}>Login</ToastAction>
      })
    }
  }

  

  return (
    <div className=' max-w-7xl mx-auto'>

      <div className='flex  items-center justify-center w-full mx-auto mt-5 px-2 md:px-0'>
        <img src={eventImage} height={100}  alt='Event' className='  rounded-lg'/>
      </div>

    <div className=' md:flex my-9 md:gap-3 md:space-y-0 space-y-2 px-2 md:px-0'>
    <div className=' flex col-span-4'>
       <Card className="w-[760px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
        <form
        onSubmit = {form.handleSubmit(onSubmit)}
        className="relative space-y-3 overflow-x-hidden"
        >

          {/* name */}
          <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}

          />

          {/* email */}
          <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                {/* college */}
                <FormField
                  control={form.control}
                  name="college"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>College</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your College"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                {/* student id */}
                <FormField
                  control={form.control}
                  name="studentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student ID</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your student id..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* branch */}
                <FormField
                  control={form.control}
                  name="branch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Branch</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your branch..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                {/* year */}
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year of study</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your year of study." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3 , 4 , 5].map((year) => {
                            return (
                              <SelectItem value={year.toString()} key={year}>
                                Year {year}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />


          <div className=' '>
            <Button variant={'scholar'} type="submit" className="w-full">Submit</Button>
          </div>

        </form>
       </Form>
      </CardContent>
    </Card>

    </div>

    {/* Event Details */}

    <div className='w-full space-y-3'>
      <EventDetailCard eventid={eventid} />
      <CommunityCard eventid={eventid}/>
    </div>

  </div>



  </div>
  )
}

export default Eventpage