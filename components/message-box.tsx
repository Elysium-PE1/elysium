import { CheckBadgeIcon } from '@heroicons/react/24/solid'

export const MessageBox = () => {
    return (
        <div className="absolute top-0 left-0 bg-black/60 bg-opacity-25 w-screen min-h-screen flex justify-center items-center z-[2]">
            <div className="w-[450px] flex flex-col justify-center items-center gap-[20px] p-4 bg-[#cabd89] rounded-lg text-[#010101]">
                <p className="text-2xl flex flex-col items-center font-semibold tracking-wide text-center">
                    Your seat has been booked successfully
                    <CheckBadgeIcon width={'60px'} fill='#006400' />
                </p>

                <p className="text-lg text-center">
                    You will be redirected to our homepage
                </p>
            </div>
        </div>
    )
}