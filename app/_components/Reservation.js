import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";
async function Reservation({ cabin }) {
    const [ settings , bookedDates ] = await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin.cabinId)
      ])
    const session = await auth()
    return (
    <div className="grid grid-cols-1 border border-primary-700 min-h-[400px]">
        <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin}/>
        {
          session?.user ? <ReservationForm cabin={cabin} user={session.user}/> : <LoginMessage/>
        }
      </div>
    )
}

export default Reservation
