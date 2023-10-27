const { Knock } = require('@knocklabs/node')

const knock = new Knock(process.env.NEXT_PUBLIC_KNOCK_API_KEY)

interface FormInput {
    name: string
    email: string
    phoneNo: string
    resDate: string
    resTime: string
    noOfPeople: string
    specialNotes: string
}

export const KnockAPI = {
    setIdentify: async (userId: string, formData: FormInput) => {
        return await knock.users
            .identify(userId, {
                name: formData.name,
                email: formData.email,
            })
            .catch((err: any) => console.log(err))
    },

    triggerWorkflow: async (
        senderId: string,
        recipientId: string,
        formData: FormInput
    ) => {
        return await knock.workflows
            .trigger('elysium-booking', {
                recipients: [recipientId],
                data: { formData },
                actor: senderId,
            })
            .catch((err: any) => console.log(err))
    },
}