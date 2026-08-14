export class MessageController {
  constructor(messageService) {
    this.messageService = messageService;
  }


  // core feature controller
  sendMessage = async (req, res) => {
    try {
      const { content } = req.body;
      const { chatId } = req.params;

      if (!content || !content.trim()) {
        return res.status(400).json({
          success: false,
          message: "Message content is required",
        });
      }

      const result = await this.messageService.generateResponse(
        chatId,
        content.trim(),
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

   // spasicific messsages fetching based on chat id 
  getMessagesByChatId = async (req, res) => {
  try {
    const { chatId } = req.params;

    const messages = await this.messageService.getMessagesByChatId(chatId);

    return res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error("MessageController.getMessagesByChatId:", error);

    if (error.message === "Chat not found") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to fetch messages",
    });
  }
};
}
