
import AccountInfo from '@/components/module/dashboard/accountInfo'
import CompleteSetup from '@/components/module/dashboard/setup'
import UserTitle from '@/components/module/dashboard/userTitle'
import { Button } from '@/components/ui/button'
import { authOptions } from '@/lib/auth'
import { getServerData } from '@/utils/api'
import { apiRoutes } from '@/utils/api/routes'
import { getServerSession } from 'next-auth'
import React from 'react'

async function Page() {

  const session: any = await getServerSession(authOptions)
  const data = await getServerData<USER_INFO>({ url: apiRoutes.getUserInfo, token: session?.token || "", method: "get" })



  return (

    <div className="bg-neutral-900 min-h-full">
      <div className="custom-container bg-neutral-900 mt-14">

        <UserTitle name={data?.name || "user"} />

        {!data?.phone && <CompleteSetup />}

        {data?.phone && <div>
          <h5 className="mt-5 text-2xl font-bold">Account Info </h5>
          <AccountInfo title='Linked Phone Number' subtitle={data?.phone} />
          <AccountInfo title='Linked Google Account' subtitle={data?.email} />
        </div>}

      </div>
    </div>
  )
}

export default Page