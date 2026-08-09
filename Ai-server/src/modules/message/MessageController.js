export class MessageController {
  constructor(messageService) {
    this.messageService = messageService;
  }

  sendMessage = async (req, res) => {
    try {
      const { chatId, content } = req.body;

      if (!content || !content.trim()) {
        return res.status(400).json({
          success: false,
          message: "Message content is required",
        });
      }

      const result = await this.messageService.generateResponse(
        chatId,
        content.trim()
      );

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      console.error("MessageController.sendMessage:", error);

      if (error.message === "Chat not found") {
        return res.status(404).json({
          success: false,
          message: error.message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Failed to process message",
      });
    }
  };
}