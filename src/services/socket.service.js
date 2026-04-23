import { prisma } from "../lib/prisma.js";

export async function createMessageService(data) {
    console.log(data)
    const message = await prisma.chatMessage.create({
        data: {
            text: data.text,
            user: {
                connect: {
                    id: data.userId
                }
            },
            party: {
                connect: {
                    id: data.partyId
                }
            }
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    avatarUrl: true
                }
            }
        }
    })
    return message;
}

export async function getMessageService(req, res, next) {
    try {
        const { roomId } = req.params;
        const messages = await prisma.chatMessage.findMany({
            where: {
                partyId: roomId
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        avatarUrl: true
                    }
                }
            },
            orderBy: {
                createdAt: "asc"
            }
        });
        
        return res.json({
            message: "Messages fetched successfully",
            data: messages
        });
    } catch (error) {
        console.error("Error in getMessageService:", error);
        next(error);
    }
}