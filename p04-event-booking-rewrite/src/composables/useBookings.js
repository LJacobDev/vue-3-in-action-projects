import { ref } from 'vue'

const bookings = ref([])
const bookingsUrl = 'http://localhost:3001/bookings/'
const loading = ref(false)
const error = ref(null)

const fetchBookings = async () => {
  try {
    error.value = null
    loading.value = true
    const response = await fetch(bookingsUrl)
    bookings.value = await response.json()
    console.log('bookings value: ', bookings.value)

    if (!response.ok) {
      throw new Error()
    }
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
}

const registerBooking = async event => {
  //create new booking item
  const newBooking = {
    id: Date.now(),
    eventId: event.id,
    eventName: event.eventName,
    status: 'pending',
  }
  //add booking to bookings so it shows up immediately
  bookings.value.push(newBooking)

  //it would be a little simpler to just get the index of the last element vs doing this
  const index = bookings.value.findIndex(b => b.id === newBooking.id)

  //http post it to the database where it is POSTed with a status: 'confirmed' state
  try {
    const response = await fetch(bookingsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newBooking, status: 'confirmed' }),
    })

    //if the response is ok, use the response.json as assignment to booking value, as it will be the booking object that was POSTed and will have the status: 'confirmed' state
    if (response.ok) {
      bookings.value[index] = await response.json()
    } else {
      throw new Error()
    }

    //if http response is not ok or error, remove booking from list and generate error alert or ui text
  } catch (e) {
    console.log(e)
    bookings.value.splice(index, 1)
    alert(`Error creating booking: ${e}`)
  }
}

const deleteBooking = async booking => {
  const index = bookings.value.findIndex(b => b.id === booking.id)

  try {
    bookings.value.splice(index, 1)
    const response = await fetch(bookingsUrl + booking.id, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error()
    }
  } catch (e) {
    alert(`Error deleting booking: ${e}`)
    bookings.value.splice(index, 0, booking)
  }
}

export default function useBookings() {
  return {
    bookings,
    loading,
    error,
    fetchBookings,
    registerBooking,
    deleteBooking,
  }
}
