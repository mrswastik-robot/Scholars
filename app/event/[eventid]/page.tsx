import React from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

type Props = {}

const page = (props: Props) => {
  return (
    <div className=' flex items-center justify-center h-screen'>
      <Card>
        <CardHeader>
          <CardTitle className=' font-bold text-2xl'>Register to Joust.</CardTitle>
          <CardDescription>Jaypee welcome you.</CardDescription>
        </CardHeader>
      </Card>

    </div>
  )
}

export default page