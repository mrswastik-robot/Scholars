"use client"

import React from 'react'
import { useState , useEffect } from 'react';

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from './ui/button';

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from '@/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
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

import { useToast } from './ui/use-toast';  
import { ToastAction } from "@/components/ui/toast"



type Props = {
    eventid: string;
}

const CommunityCard = (props: Props) => {

    const [user , loading] = useAuthState(auth);

    const {eventid} = props;

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

    //get the community details from eventid
    const[communityName , setCommunityName] = useState<string>('');

    useEffect(() => {
        const fetchCommunityDetails = async () => {
            try {
                const eventRef = doc(db , 'events' , eventid);
                const eventDoc = await getDoc(eventRef);

                if(eventDoc.exists())
                {
                    const event_name = eventDoc.data().event_name;
                    setCommunityName(event_name);
                }
            } catch (error) {
                console.error('Error fetching event details:', error);
                
            }
        };
        fetchCommunityDetails();
    }, [eventid]);

    async function joinCommunity() {

        if(user)
        {

            const communityMembers = collection(db , 'events' , eventid , 'community');

            setDoc(doc(communityMembers , user.uid) , {
                uid: user.uid,
                email: user.email,
                photoURL: user.photoURL,
                displayName: user.displayName,
                joinedAt: serverTimestamp(),
            })
            .then(() => {
                toast({
                    title: "Joined Community",
                    description: "You have successfully joined the community",
                    variant: "success",
                  })
            })
            .catch((error) => {
                toast({
                    title: "Error",
                    description: "There was an error joining the community",
                    variant: "destructive",
                  })
            })
        }
        else
        {
            toast({
                title: "Error",
                description: "Please login to join the community",
                variant: "destructive",
                action: <ToastAction altText='Login' onClick={GoogleLogin}>Login</ToastAction>
              })
        }
    }

  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>{communityName}</CardTitle>
                <CardDescription>Join the awesome community of {communityName}</CardDescription>
            </CardHeader>

            <CardContent className='space-y-5 items-center mx-auto justify-center'>
                <div className=' flex gap-1'>
                    <span className="flex -space-x-4 overflow-hidden">
                    {PEOPLE_URL.map((url) => (
                        <Image 
                        className="inline-block h-10 w-10 rounded-full"
                        src={url}
                        key={url}
                        alt="person"
                        width={52}
                        height={52}
                        />
                    ))}
                    </span>
                    <p className="bold-16 md:bold-20 ">50+ Joined</p>

                </div>
            
                <Button variant={'scholar'} onClick={joinCommunity}>Join Community <img src='/network.svg' className=' ml-2 w-4 h-4 inline'/></Button>
            </CardContent>
        
        </Card>
    </div>
  )
}

export default CommunityCard