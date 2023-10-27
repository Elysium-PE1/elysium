"use client";

import { useState } from "react";
import { MessageBox } from "./message-box";
import { useRouter } from "next/navigation";
import { KnockAPI } from "@/lib/knockapi";
import { KnockClient } from "@/lib/knockclient";

interface FormInput {
    name: string
    email: string
    phoneNo: string
    resDate: string
    resTime: string
    noOfPeople: string
    specialNotes: string
}

export const BookingForm = () => {
    const seats = [2, 3, 4, 5, 6, 7, 8];
    const router = useRouter()
    const [userId, setUserId] = useState<string>('')
    const [showModel, setShowModel] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormInput>({
        name: '',
        email: '',
        phoneNo: '',
        resDate: '',
        resTime: '',
        noOfPeople: '',
        specialNotes: '',
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData((prev: FormInput) => ({
            ...prev,
            [name]: value,
        }))
        if (name == 'email')
            setUserId(
                formData.email.substring(0, formData.email.indexOf('@') + 1)
            )
    }

    const handleSubmit = () => {
        KnockAPI.setIdentify(userId, formData)
        KnockClient.getAuth(userId)
        KnockAPI.triggerWorkflow(userId, 'book@elysium', formData)
        setTimeout(() => setShowModel(true), 500)
        setTimeout(() => {
            setShowModel(false)
            router.push('/')
        }, 5000)
    }

    return (
    <section
        id="booking-form"
        className="relative w-screen h-screen bg-[#010101] flex flex-col justify-center items-center"
    >
        <h1 className="text-5xl mt-[60px] font-semibold tracking-wider">Booking Form</h1>
        <form
            onSubmit={(e: any) => {
                e.preventDefault()
                handleSubmit()
                e.target.reset()
            }}
            className="flex flex-col gap-[40px] p-[80px] pt-[40px] items-center"
        >
            {showModel && <MessageBox />}
            <div className="flex gap-[60px]">
            <div className="flex flex-col w-full">
                <div className="flex flex-col mb-5">
                    <label className="text-lg font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="placeholder:text-[#010101] text-[#010101] p-2 bg-[#d1aa07] border-2 border-[#010101] outline outline-offset-2 outline-2 hover:outline-[#cbb144] focus:outline-[#cbb144]"
                        onChange={handleChange}
                        />
                </div>

                <div className="flex gap-3 mb-5">
                    <div className="flex flex-col">
                        <label className="text-lg font-medium">Email</label>
                        <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="placeholder:text-[#010101] text-[#010101] p-2 bg-[#d1aa07] border-2 border-[#010101] outline outline-offset-2 outline-2 hover:outline-[#cbb144] focus:outline-[#cbb144]"
                        onChange={handleChange}
                        />
                    </div>

                <div className="flex flex-col">
                    <label className="text-lg font-medium">Phone </label>
                    <input
                    type="tel"
                    name="phoneNo"
                    placeholder="Contact No"
                    onChange={handleChange}
                    className="placeholder:text-[#010101] text-[#010101] p-2 bg-[#d1aa07] border-2 border-[#010101] outline outline-offset-2 outline-2 hover:outline-[#cbb144] focus:outline-[#cbb144]"
                    />
                </div>
                </div>

                <div className="flex gap-3 mb-5">
                <div className="flex flex-col w-full">
                    <label className="text-lg font-medium">Reservation Date</label>
                    <input
                    type="date"
                    name="resDate"
                    onChange={handleChange}
                    className="placeholder:text-[#010101] text-[#010101] p-2 bg-[#d1aa07] border-2 border-[#010101] outline outline-offset-2 outline-2 hover:outline-[#cbb144] focus:outline-[#cbb144]"
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="text-lg font-medium">Reservation Time</label>
                    <input
                    type="time"
                    name="resTime"
                    onChange={handleChange}
                    className="placeholder:text-[#010101] text-[#010101] p-2 bg-[#d1aa07] border-2 border-[#010101] outline outline-offset-2 outline-2 hover:outline-[#cbb144] focus:outline-[#cbb144]"
                    />
                </div>
                </div>
            </div>

            <div className="flex flex-col w-full">
                <div className="flex flex-col mb-5">
                <label className="text-lg font-medium">
                    How many person will you be with?
                </label>
                <div className="flex items-center gap-4 h-[43.2px]">
                    {seats.map((seat, id) => (
                    <label key={id}>
                        <input
                        type="radio"
                        name="noOfPeople"
                        value={seat}
                        onChange={handleChange}
                        className="hidden peer"
                        required
                        onClick={() => console.log()}
                        />
                        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border-2 border-[#d1aa07] text-[#d1aa07] text-xl peer-checked:bg-[#d1aa07] peer-checked:text-[#010101] peer-checked:font-semibold hover:cursor-pointer hover:bg-[#d1aa07] hover:text-[#010101] hover:font-semibold">
                        {seat}
                        </div>
                    </label>
                    ))}
                </div>
                </div>

                <div className="flex flex-col mb-5">
                <label className="text-lg font-medium mb-1">Notes</label>
                <textarea
                    name="specialNotes"
                    rows={5}
                    cols={50}
                    placeholder="Special Notes"
                    onChange={handleChange}
                    className="placeholder:text-[#010101] w-[456px] h-full text-[#010101] py-1 px-2 bg-[#d1aa07] border-2 border-[#010101] outline outline-offset-2 outline-2 hover:outline-[#cbb144] focus:outline-[#cbb144] resize-none"
                ></textarea>
                </div>
            </div>
            </div>

            <button type="submit" className="py-3 px-9 text-[#010101] bg-[#d1aa07] outline outline-2 outline-offset-2 hover:outline-[#cbb144] hover:bg-[#d1aa07]/90">
            Book your seat!
            </button>
        </form>
    </section>
  );
};