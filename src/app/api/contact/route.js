    import { Contact } from "../../Models/Contact";
    import dbConnect from "../../libs/dbConnect";

    export async function POST(req) {
        try {
            const body = await req.json();
            console.log("Request body:", body);

            const { firstName, lastName, phone, email, subject, message } = body;

            // Validate required fields
            if (!firstName || !lastName || !phone || !email || !subject || !message) {
                return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
            }

            await dbConnect();

            // Optional: Check for duplicate by email
          

            // Create contact
            const createdContact = await Contact.create({
                firstName,
                lastName,
                phone,
                email,
                subject,
                message
            });

            return new Response(JSON.stringify(createdContact), { status: 201 });

        } catch (err) {
            console.error("Error:", err);
            return new Response(JSON.stringify({ error: err.message }), { status: 500 });
        }
    }
