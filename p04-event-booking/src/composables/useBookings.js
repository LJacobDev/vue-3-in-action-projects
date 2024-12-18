import { ref } from 'vue'

const bookings = ref([])
const loading = ref(false)
const error = ref(null)

const fetchBookings = async () => {
  try {
    error.value = null
    loading.value = true
    const response = await fetch('http://localhost:3001/bookings')
    bookings.value = await response.json()
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
}

const registerBooking = async (event) => {
  //if this event has already been registered and is in bookings, this is already booked, do not continue.
  //UserId being checked here is nearly meaningless because only userId of 1 will ever be used here, but
  //it is shown because it is something that would normally be a part of the check for whether someone has booked an event
  if (bookings.value.some((booking) => booking.eventId === event.id && booking.userId === 1)) {
    alert(`You have already booked the ${event.title}`)

    return
  }

  const newBooking = {
    id: Date.now().toString(),
    userId: 1,
    eventId: event.id,
    eventTitle: event.title,
    status: 'pending'
  }

  //this will cause the booking UI to show the new registration (in a pending state) without needing to refresh the browser
  bookings.value.push(newBooking)

  //POST the booking to the server, and take the response's representation of that object and place into the bookings array as 'confirmed'
  try {
    const response = await fetch('http://localhost:3001/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newBooking,
        status: 'confirmed'
      })
    })

    //if a successful response, add the 'confirmed' booking object in place of where the 'pending' version of it was
    if (response.ok) {
      //get index of this booking in the bookings array, then replace that booking with response.json, which will be the booking item but with 'confirmed' status in the state it had when it was POSTed to the server
      const booking_index = bookings.value.findIndex((b) => b.id === newBooking.id)

      bookings.value[booking_index] = await response.json()
    } else {
      throw new Error()
    }
  } catch (e) {
    //handle errors
    alert(`Error registering for event: ${e.toString()}`)
    bookings.value = bookings.value.filter((b) => b.id != newBooking.id)
  }
}

const cancelBooking = async (booking) => {
  const cancel_index = bookings.value.findIndex((b) => b.id === booking.id)
  const bookingToCancel = bookings.value[cancel_index]
  // const latestStatus = bookings.value[cancel_index].status

  try {
    //bookings.value[cancel_index].status = 'pending cancellation'
    bookings.value.splice(cancel_index, 1)

    // throw Error();
    const response = await fetch(`http://localhost:3001/bookings/${booking.id}`, {
      method: 'DELETE'
    })

    //if (response.ok) {
    //bookings.value = bookings.value.filter((b) => b.id !== booking.id)
    //}

    if (!response.ok) {
      throw Error('response returned as not ok')
    }
  } catch (e) {
    alert(`There was an error deleting the booking: ${e.toString()}`)
    // bookings.value[cancel_index].status = latestStatus
    bookings.value.splice(cancel_index, 0, bookingToCancel)
  }
}

export default function useBookings() {
  return {
    bookings,
    loading,
    error,
    fetchBookings,
    registerBooking,
    cancelBooking
  }
}
