import EventCard from "@/components/events/Eventcard";
import axios from "axios";
import { Event } from "@/lib/type";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function getEvents(): Promise<Event[]> {
  const res = await axios.get<{ events: Event[] }>(
    `${BACKEND_URL}/common/events`
  );
  if(!res.data){
    console.log("data not fetched!!!")
  }
  return res.data.events;
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6">All Upcoming Events....</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event: Event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}