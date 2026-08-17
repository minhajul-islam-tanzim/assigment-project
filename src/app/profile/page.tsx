
import LogoutButton from "@/components/LogoutButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";



const page = async () => {

const handleOut = async () => {
const { success } = await auth.api.signOut({
  headers: await headers(),
})

redirect('/login')
}


const session = await auth.api.getSession({
  headers: await headers()
})

if(!session){
  redirect('/login')
}


  return (
    <div className="mt-22">
       <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          {session.user.name}
        </h1>
        <p className="text-gray-500 mt-2">
            {session.user.email}
        </p>

        <div >
        <LogoutButton />
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
