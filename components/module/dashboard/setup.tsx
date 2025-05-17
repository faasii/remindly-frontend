'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { updateData } from '@/utils/api'
import { clientApiRoutes } from '@/utils/api/routes'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import { useForm, } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
    phone: z.string().regex(/^[6-9]\d{9}$/, {
        message: 'Invalid phone number',
    })
})


function CompleteSetup() {
    const { data: session } = useSession()
    const [isPending, startTransition] = useTransition();
    const [isOpen, setisOpen] = useState<boolean>(false)

    const routes = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone: "",
        },
    })



    const onSubmit = async (data: any) => {
        try {
            startTransition(async () => {
                const resData = await updateData({ url: clientApiRoutes.getUserInfo, body: data, token: session?.token || "" })
                if(resData?.status){
                    routes.refresh()
                    return 
                }
                setisOpen(false)
            });
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="min-h-[45vh] flex justify-center items-center">

            <Dialog open={isOpen} onOpenChange={() => setisOpen(false)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Update Phone</DialogTitle>
                        <DialogDescription>
                            Update phone number to recive notification as phone call
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter phone number" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <DialogFooter>
                                <Button disabled={isPending} type="submit">Save changes </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>

            <Button onClick={() => setisOpen(true)} variant={"default"} className="bg-[#ff0] text-black hover:bg-[#ffff00ce] hover:text-black cursor-pointer">Complete Setup</Button>

        </div>
    )
}

export default CompleteSetup