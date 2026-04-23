import { createMessageService } from "../services/socket.service.js";

export function registerSocketHandler(io, socket) {
    const user = socket.data.user;
    if (!user) return;

    console.log(`User ${user.id} name ${user.name} connected`);

    // join room
    socket.on('join_room', (partyId) => {
        const roomId = partyId.toString();
        socket.join(roomId);
        console.log(`User ${user.id} joined room: ${roomId}`);

        // emit to every in the room
        // io.to(roomId).emit('user_joined', { userName: user.name });
    });

    // send message
    socket.on('send_message', async ({ text, partyId }) => {
        if (!text?.trim() || !partyId) return;

        try {
            // 1. save to database
            const savedMessage = await createMessageService({
                text: text.trim(),
                userId: user.id,
                partyId: partyId
            });

            // 2. emit to every in the room
            io.to(partyId.toString()).emit('receive_message', savedMessage);
        } catch (error) {
            console.error("Socket send_message error:", error);
            socket.emit("error_message", { error: "ไม่สามารถส่งข้อความได้" });
        }
    });

    // typing
    socket.on('typing', (partyId) => {
        socket.to(partyId.toString()).emit('display_typing', {
            userId: user.id,
            userName: user.name
        });
    });
    socket.on('stop_typing', (partyId) => {
        socket.to(partyId.toString()).emit('hide_typing', {
            userId: user.id
        });
    });

    // leave
    socket.on('leave_room', (partyId) => {
        socket.leave(partyId.toString());
    });

    socket.on("disconnect", () => {
        console.log(`User ${user.id} disconnected`);
    });
}
