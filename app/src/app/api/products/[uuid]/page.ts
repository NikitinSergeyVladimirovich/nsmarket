'use server'
export async function handlePostMessage(req, res) {
    const { body, method } = req;
    console.log('222', method);
    // switch (method) {
    //     case 'POST':
    //         if (validateMessage(body)) {
    //             res.status(201).json({ message: 'Message received' });
    //         } else {
    //             res.status(400).json({ error: 'Invalid message data' });
    //         }
    //         break;
    //     default:
    //         // Inform client about supported methods
    //         res.setHeader('Allow', ['POST']);
    //         res.status(405).end(`Method ${method} Not Allowed`);
    // }
}