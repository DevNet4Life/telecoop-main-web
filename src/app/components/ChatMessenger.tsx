import { useState } from "react";
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";

export function ChatMessenger() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "support",
      message: "Hi! I'm here to help you with your TeleCoop membership inquiry. How can I assist you today?",
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: chatMessages.length + 1,
      sender: "user",
      message: message,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, newMessage]);
    setMessage("");

    // Simulate support response
    setTimeout(() => {
      const supportResponse = {
        id: chatMessages.length + 2,
        sender: "support",
        message: "Thank you for your message! A TeleCoop representative will respond to you shortly. In the meantime, you can also call us at +63 918-460-0900 or email telecoop.ph@gmail.com for immediate assistance.",
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, supportResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
            size="sm"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-sm">
          <Card className="shadow-xl border-2">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <div>
                    <CardTitle className="text-sm">TeleCoop Support</CardTitle>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs opacity-90">Online</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Chat Messages */}
              <div className="h-64 overflow-y-auto p-4 space-y-3">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs p-2 rounded-lg text-sm ${
                        msg.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="p-3 border-t bg-gray-50">
                <p className="text-xs text-muted-foreground mb-2">Quick help:</p>
                <div className="flex flex-wrap gap-1">
                  <Badge
                    variant="outline"
                    className="text-xs cursor-pointer hover:bg-gray-200"
                    onClick={() => setMessage("I need help filling out the form")}
                  >
                    Form Help
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs cursor-pointer hover:bg-gray-200"
                    onClick={() => setMessage("What are the membership requirements?")}
                  >
                    Requirements
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs cursor-pointer hover:bg-gray-200"
                    onClick={() => setMessage("How much does membership cost?")}
                  >
                    Pricing
                  </Badge>
                </div>
              </div>

              {/* Message Input */}
              <div className="p-3 border-t">
                <div className="flex space-x-2">
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 min-h-0 h-9 resize-none"
                    rows={1}
                  />
                  <Button
                    size="sm"
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="h-9 w-9 p-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-3 border-t bg-gray-50 text-center">
                <p className="text-xs text-muted-foreground mb-2">Need immediate help?</p>
                <div className="flex justify-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <Phone className="h-3 w-3" />
                    <span>+63 918-460-0900</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Mail className="h-3 w-3" />
                    <span>telecoop.ph@gmail.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}