export class ChatController {
  constructor(chatService) {
    this.chatService = chatService;
  }
  getChats = async (req, res) => {
    try {
      const chats = await this.chatService.getChats();

      return res.status(200).json({
        success: true,
        data: chats,
      });
    } catch (error) {
      console.error("ChatController.getChats:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch chats",
      });
    }
  };
}
